import React from 'react'
import Header from './Header'
import PeopleColumn from './PeopleColumn1'
import EventsColumn from './EventsColumn3'
import LunchColumn from './LunchColumn3'
import styled from 'styled-components/macro'
import Clock from 'react-live-clock'
import GlobalStyles from './GlobalStyles'
import ColumnWrapper from './ColumnWrapper'
import { getEvents, postEvents, deleteEvents, patchEvents } from './services'

console.log()

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header>
        <h1 className="title"> BUZZ BOARD</h1>
        <ClockStyle>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'European'} />
        </ClockStyle>
      </Header>
      <ColumnWrapper>
        <PeopleColumn />
        <EventsColumn />
        <LunchColumn></LunchColumn>
      </ColumnWrapper>
    </div>
  )
}
export default App

const ClockStyle = styled.div`
  grid-area: clock;
  color: #e13a9d;
  font-size: 50px;
  display: grid;
  justify-self: end;
  align-self: center;

  @media (max-width: 600px) {
    justify-self: center;
  }
`
