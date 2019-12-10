import React, { Fragment } from 'react'

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
import SortSchuffel from './SortSchuffel'

import { eventWithNextOccurence } from './EventHelpers'
import Media from 'react-media'

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
              <Media queries={{ small: { maxWidth: 599 } }}>
                {matches =>
                  matches.small ? (
                    <Fragment>
                      <Sort>
                        {(data.value || []).map(event => (
                          <EventCard
                            event={eventWithNextOccurence(event)}
                          ></EventCard>
                        ))}
                      </Sort>
                    </Fragment>
                  ) : (
                    <SortSchuffel>
                      {(data.value || []).map(event => (
                        <EventCard
                          event={eventWithNextOccurence(event)}
                        ></EventCard>
                      ))}
                    </SortSchuffel>
                  )
                }
              </Media>
            )
          }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </StyledColumn>
  )
}
