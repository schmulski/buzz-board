import React from 'react'
import NewsEntry from './NewsEntry'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'
import FooterStyling from './FooterStyling'
import FooterStylingScroller from './FooterStylingScroller'

export default function NewsTicker() {
  return (
    <FooterStyling>
      <FooterStylingScroller>
        <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
          <FirebaseDatabaseNode path="news/" orderByChild="timestamp">
            {data => {
              return Object.keys(data.value || {})
                .map(id => (
                  <NewsEntry
                    user={data.value[id].user}
                    message={data.value[id].message}
                    timestamp={data.value[id].timestamp}
                  />
                ))
                .reverse()
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
      </FooterStylingScroller>
    </FooterStyling>
  )
}
