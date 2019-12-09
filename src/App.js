import React from 'react'
import Header from './Header'
import PeopleColumn from './PeopleColumn1'
import EventsColumn from './EventsColumn2'
import LunchColumn from './LunchColumn3'
import styled from 'styled-components/macro'
import Clock from 'react-live-clock'
import GlobalStyles from './GlobalStyles'
import ColumnWrapper from './ColumnWrapper'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewsEntry from './NewsEntry'
import Navigation from './Navigation'

export default function App() {
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
        <Router>
          {/* <div>
            <nav>
              <ul>
                <li>
                  <Link to="/birthdays">Birthdays</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/recommendations">Recommendation</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
              </ul>
            </nav> */}
          <Switch>
            <Route path="/events">
              <EventsColumn />
            </Route>
            <Route path="/birthdays">
              <PeopleColumn />
            </Route>
            <Route path="/recommendations">
              <LunchColumn />
            </Route>
            <Route path="/news">
              <NewsEntry />
            </Route>
          </Switch>
        </Router>
      </ColumnWrapper>
      <Footer />
      <Navigation />
    </div>
  )
}

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
