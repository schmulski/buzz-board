import styled from 'styled-components'
import React from 'react'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'

export default function Footer() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
      <FirebaseDatabaseNode path="news/">
        {data => {
          return Object.keys(data.value || {}).map(id => (
            <NewsEntry
              user={data.value[id].user}
              message={data.value[id].message}
            />
          ))
        }}
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  )
}

const NewsEntry = styled.section`
  display: grid;
  grid-template-areas: 'news picture';

  grid-template-columns: 45% 45%;
  align-text: center;
  background: #2c7873;
  min-height: 60px;
  margin: 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;
  color: #ffffff;

  @media (max-width: 600px) {
    grid-template-areas:
      'news'
      'picture';
    grid-template-columns: 100%;

    .news {
      text-align: center;
      padding: 0;
    }
  }

  .news {
    grid-area: news;
    align-text: center;
    font-size: 50px;
    color: #e13a9d;
    padding-left: 30px;
  }
`
