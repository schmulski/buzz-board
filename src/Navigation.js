import React from 'react'
import styled from 'styled-components'
import { Link, Router } from 'react-router-dom'
import BirthdayIcon from './images/confetti.png'
import CalendarIcon from './images/calendar.png'
import GoodIcon from './images/good.png'
import NewsIcon from './images/news.png'

export default function Nav() {
  //({ links })
  return (
    <Navigation>
      <Router>
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
      </Router>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  background-color: white;
`

const NavButton = styled.button`
  border: none;
  background: none;
`

//     //<nav>
//       {links.map(({ path, text }) => (
//         <Link key={path + text} to={path}>
//           {text}
//         </Link>
//       ))}
//     </nav>
//   )
// }
