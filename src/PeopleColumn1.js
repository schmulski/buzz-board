import React from 'react'
import styled from 'styled-components'
import birthdayData from './birthdays.json'
import YellowCard from './YellowCard.js'
import StyledColumn from './StyledColumn'

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
      {birthdayData.map(birthday => (
        <YellowCard>
          <BirthdayList>{birthday.name}</BirthdayList> Date:{birthday.birthday}
          <p>{birthday.funfact}</p>
        </YellowCard>
      ))}
    </StyledColumn>
  )
}
