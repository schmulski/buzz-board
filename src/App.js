import React, { Fragment } from 'react'
import Header from './Header'
import PeopleColumn from './PeopleColumn1'
import EventsColumn from './EventsColumn2'
import LunchColumn from './LunchColumn3'
import styled from 'styled-components/macro'
import Clock from 'react-live-clock'
import GlobalStyles from './GlobalStyles'
import ColumnWrapper from './ColumnWrapper'
import NewsTicker from './NewsTicker'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Media from 'react-media'
import Navigation from './Navigation'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyles />
        <Header>
          <h1 className="title"> BUZZ BOARD</h1>
          <ClockStyle>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'European'} />
          </ClockStyle>
        </Header>
        <ColumnWrapper>
          <Switch>
            <Media queries={{ small: { maxWidth: 599 } }}>
              {matches =>
                matches.small ? (
                  <Fragment>
                    <Route
                      name="events"
                      path="/events"
                      component={EventsColumn}
                    />
                    <Route path="/birthdays" component={PeopleColumn} />
                    <Route path="/recommendations" component={LunchColumn} />
                    <Route path="/news" component={NewsTicker} />
                    <Redirect exact from="/" to="events" />
                  </Fragment>
                ) : (
                  <Fragment>
                    <PeopleColumn />
                    <EventsColumn />
                    <LunchColumn />
                    <NewsTicker />
                  </Fragment>
                )
              }
            </Media>
          </Switch>
        </ColumnWrapper>
        <Media query="(max-width: 599px)" render={() => <Navigation />} />
      </div>
    </BrowserRouter>
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
// @media(max - width: 600px) {
//   grid - template - areas:
//   'events'
//   'people'
//   'lunch';
//   grid - template - columns: 100 %;
