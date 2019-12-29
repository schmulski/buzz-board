import React from 'react'
import styled from 'styled-components/macro'
import * as moment from 'moment'
import slack from './images/slack.png'

export default function NewsEntry({ user, message, timestamp }) {
  return (
    <NewsEntryStyle>
      <User> {user} </User>
      <Message>{message}</Message>
      <Timestamp> {moment(timestamp).format('LLLL')}</Timestamp>
      <p></p>
    </NewsEntryStyle>
  )
}

const NewsEntryStyle = styled.div`
  display: inline-block;
  animation: slidein 40s infinite;
  animation-timing-function: linear;
  @keyframes slidein {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
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
