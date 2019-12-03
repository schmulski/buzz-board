import React from 'react'

import styled from 'styled-components/macro'
import YellowCard from './YellowCard'
import StyledColumn from './StyledColumn'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'
import EventCard from './EventCard'

export default function EventsColumn() {
  return (
    <StyledColumn gridArea="events">
      <h2 className="title">WhatsUp today and this week? 🔮 </h2>
      <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
        <FirebaseDatabaseNode path="events/">
          {d => {
            return (d.value || []).map(event => (
              <EventCard event={event}></EventCard>
            ))
          }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </StyledColumn>
  )
}

const EventList = styled.p`
  margin: 0px;
  font-size: 30px;
  color: black;
`
