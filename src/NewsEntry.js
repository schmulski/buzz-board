import React from 'react'
import styled from 'styled-components/macro'
import * as moment from 'moment'

export default function NewsEntry({ user, message, timestamp }) {
  return (
    <NewsEntryStyle>
      <div>
        {user} {message} {moment(timestamp).format('llll')}
      </div>
      {/* <User> {user} </User>
      <Message>{message}</Message> 
      <Timestamp> {moment(timestamp).format('llll')}</Timestamp>
      <p></p> */}
    </NewsEntryStyle>
  )
}

const NewsEntryStyle = styled.div`
  display: inline-block;
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
