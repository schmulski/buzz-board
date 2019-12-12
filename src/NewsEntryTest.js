import React from 'react'
import Newsticker from 'react-newsticker'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'

export default function NewsEntry() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
      <FirebaseDatabaseNode path="news/">
        <Newsticker>
          {data => {
            return (data.value || []).map(news => (
              <div>
                {news.title} Date:
                {news.birthday}
                {news.timestamp}
              </div>
            ))
          }}
        </Newsticker>
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  )
}

//         <User> {user} </User>
//         <Message>{message}</Message>
//         <Timestamp> {moment(timestamp).format('LLLL')}</Timestamp>
//         <p></p>

//   ]
// }

// const ListStyle = styled.li`
//   list-style-image: url(${slack});
//   margin: 20px;
// `

// const User = styled.p`
//   color: red;
//   font-family: helvetica;
// `

// const Message = styled.span`
//   color: #49fb35;
//   font-family: helvetica;
// `
// const Timestamp = styled.span`
//   font-family: helvetica;
//   font-size: 10px;
//   color: red;
//
