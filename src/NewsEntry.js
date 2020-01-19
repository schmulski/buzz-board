import React from 'react'
import styled from 'styled-components/macro'
import * as moment from 'moment'

export default function NewsEntry({ user, message, timestamp }) {
  return (
    <NewsEntryStyle>
      <User> {user} </User>
      <Message>{message}</Message>
      <br></br>
      <Timestamp> {moment(timestamp).format('llll')}</Timestamp>
    </NewsEntryStyle>
  )
}

const NewsEntryStyle = styled.div`
  display: inline-block;
  line-hight: 1, 5px;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px dashed #333;

  @media (max-width: 600px) {
    outline: dotted;
    display: block;
    white-space: normal;
    margin-bottom: 20px;
    margin-right: 0;
    padding: 10px 0;
    border-right: none;
  }
`

const User = styled.span`
  color: #861657;
  font-family: helvetica;

  @media (max-width: 600px) {
    display: block;
  }
`

const Message = styled.span`
  color: #191919;
  font-family: helvetica;
`
const Timestamp = styled.span`
  font-family: helvetica;
  font-size: 10px;
  color: #861657;

  @media (min-width: 600px) {
    display: none;
  }
`
