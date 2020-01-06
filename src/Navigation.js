import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import BirthdayIcon from './images/benutzer.png'
import CalendarIcon from './images/lautsprecher.png'
import GoodIcon from './images/information.png'
import NewsIcon from './images/zeitung.png'

export default function Nav() {
  return (
    <Navigation>
      <NavButton>
        <Link to="/birthdays">
          <img src={BirthdayIcon} alt="birthdays" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/events">
          <img src={CalendarIcon} alt="events" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/recommendations">
          <img src={GoodIcon} alt="recommendations" />
        </Link>
      </NavButton>
      <NavButton>
        <Link to="/news">
          <img src={NewsIcon} alt="news" />
        </Link>
      </NavButton>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: grid;
  display-grid-area: 'navigation';
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  grid-auto-flow: column;
  background-color: white;
`

const NavButton = styled.button`
  border: none;
  background: none;
`
