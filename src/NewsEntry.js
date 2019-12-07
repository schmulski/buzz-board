import React from 'react'
import styled from 'styled-components'
import * as moment from 'moment'

export default function NewsEntry({ user, message, timestamp }) {
  return (
    <ul>
      <li>
        <User> {user} </User>:<Message>{message}</Message>
        <Timestamp> {moment(timestamp).format('LLLL')}</Timestamp>
      </li>
    </ul>
  )
}

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
