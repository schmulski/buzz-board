import React from 'react'
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
import GridContainer from './GridContainer'
import JobliftLogo from '.images/JobliftLogo.png'

export default function App() {
  return (
    <BrowserRouter>
      <GridContainer>
        <GlobalStyles />
        <Header>
          <img src={JobliftLogo} alt="Joblift" />
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
                  <>
                    <Route
                      name="events"
                      path="/events"
                      component={EventsColumn}
                    />
                    <Route path="/birthdays" component={PeopleColumn} />
                    <Route path="/recommendations" component={LunchColumn} />
                    <Route path="/news" component={NewsTicker} />
                    <Redirect exact from="/" to="events" />
                  </>
                ) : (
                  <>
                    <PeopleColumn />
                    <EventsColumn />
                    <LunchColumn />
                    <NewsTicker />
                  </>
                )
              }
            </Media>
          </Switch>
        </ColumnWrapper>
        <Media query="(max-width: 599px)" render={() => <Navigation />} />
      </GridContainer>
    </BrowserRouter>
  )
}

const ClockStyle = styled.div`
  grid-area: clock;
  color: white;
  font-size: 30px;
  display: grid;
  justify-self: end;
  align-self: center;

  @media (max-width: 600px) {
    justify-self: center;
  }

  h1 {
    font-size: 10vw;
  }
`
