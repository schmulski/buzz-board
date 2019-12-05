import React from 'react'
import styled from 'styled-components/macro'
import YellowCard from './YellowCard.js'
import StyledColumn from './StyledColumn'

import firebase from 'firebase/app'
import 'firebase/database'
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database'

import FirebaseConfig from './FirebaseConfig'

const BirthdayList = styled.p`
  margin: 0px;
  font-size: 20px;
`

export default function PeopleColumn() {
  return (
    <StyledColumn gridArea="people">
      <h2 className="title">
        {' '}
        Buzzz Birthday Board <span></span>
      </h2>
      <FirebaseDatabaseProvider firebase={firebase} {...FirebaseConfig}>
        <FirebaseDatabaseNode path="birthdays/">
          {d => {
            return (d.value || []).map(birthday => (
              <YellowCard>
                <BirthdayList>{birthday.name}</BirthdayList> Date:
                {birthday.birthday}
                <p>{birthday.funfact}</p>
              </YellowCard>
            ))
          }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
    </StyledColumn>
  )
}
