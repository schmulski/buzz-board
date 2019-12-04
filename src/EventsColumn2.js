import React from 'react'

import StyledColumn from './StyledColumn'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'
import EventCard from './EventCard'

import * as moment from 'moment'
import 'moment-recur'

import Sort from './Sort'

let lastMonday = new Date()
// Ist lastMonday NICHT Montag?
if (lastMonday.getDay() !== 1) {
  let diffToMonday = lastMonday.getDay() - 1
  // An einem Sonntag ist getDay === 0 und daher waere diffToMonday === -1
  // Um dies zu verhindern addieren wir eine Woche (7 Tage) dazu
  // und rechnen dann modulo 7 um nur Werte zwischen 0 und 6 zu erhalten
  diffToMonday = (diffToMonday + 7) % 7

  // lastMonday auf letzten Montag setzen
  lastMonday.setDate(lastMonday.getDate() - diffToMonday)
}
// Auf Mitternacht setzen
lastMonday.setHours(0, 0, 0, 0)

// endDate wird aus dem gleichen Zeitpunkt wie lastMonday initialisiert
let endDate = new Date(lastMonday.getTime())
// Dann werden 5 Tage hinzugerechnet um Mitternacht am nächsten Samstag zu erreichen
endDate.setDate(endDate.getDate() + 5)

// startDate ist heute
let startDate = new Date()
// um Mitternacht
startDate.setHours(0, 0, 0, 0)

// NUR ZUM TESTEN!
startDate = new Date(2019, 11, 1, 0, 0, 0, 0)
endDate = new Date(2019, 11, 7, 0, 0, 0, 0)

let eventWithNextOccurence = (event) => {
  // Startdatum aus den Event Daten auslesen
  let eventStartDate = moment(event.startDate)
  // Wiederkehrende Termine mit moment-recur aus Basis des Startdatums aus dem Event einrichten
  let recurrence = moment(event.startDate)
    .recur()
    .every(event.recurrenceInDays)
    .days()
  // Nur wiederkeherende Termine nach dem startDate betrachten
  recurrence.fromDate(startDate)

  // Nächsten wiederkehrenden Termin suchen (L heisst lokale Zeit)
  let nextOccurence = moment(recurrence.next(1, 'L')[0])

  // nextOccurence auf null setzen wenn es erst nach dem endDate ist
  if (nextOccurence > endDate) {
    nextOccurence = null
  } else {
    // Falls dies vor dem endDate ist, die Uhrzeit aus dem Startdatum des Events nehmen
    // Da moment-recur nur Tage zurückgibt und die Uhrzeit aussen vor lässt
    nextOccurence.hour(eventStartDate.hour())
    nextOccurence.minute(eventStartDate.minute())
  }
  return {...event, nextOccurence};
}

export default function EventsColumn() {
  return (
    <StyledColumn gridArea="events">
      <h2 className="title">
        WhatsUp today and this week? <span img="🔮"></span>
      </h2>
      <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
        <FirebaseDatabaseNode path="events/">
          {d => {
            return (
              <Sort>
                {(d.value || []).map(event => (
                  <EventCard event={eventWithNextOccurence(event)}></EventCard>
                ))}
              </Sort>
            )
          }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </StyledColumn>
  )
}
