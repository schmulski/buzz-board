import React from 'react'
import styled from 'styled-components'
import * as moment from 'moment'
import slack from './images/slack.png'

export default function NewsEntry({ user, message, timestamp }) {
  return (
    <ul>
      <ListStyle>
        <User> {user} </User>
        <Message>{message}</Message>
        <Timestamp> {moment(timestamp).format('LLLL')}</Timestamp>
        <p></p>
      </ListStyle>
    </ul>
  )
}

const ListStyle = styled.li`
  list-style-image: url(${slack});
  margin: 20px;
`

const User = styled.p`
  color: red;
  font-family: helvetica;
`

const Message = styled.span`
  color: #49fb35;
  font-family: helvetica;
`
const Timestamp = styled.span`
  font-family: helvetica;
  font-size: 10px;
  color: red;
`
