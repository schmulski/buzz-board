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

import Sort from './Sort'

import { eventWithNextOccurence } from './EventHelpers'

export default function EventsColumn() {
  return (
    <StyledColumn gridArea="events">
      <h2 className="title">
        WhatsUp today and this week? <span img="🔮"></span>
      </h2>
      <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
        <FirebaseDatabaseNode path="events/">
          {data => {
            return (
              <Sort>
                {(data.value || []).map(event => (
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
