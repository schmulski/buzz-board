import React,{useState} from 'react'
import styled from 'styled-components'
import YellowCard from './YellowCard'

export default function EventCard({event}) {
  if (!event.nextOccurence) {
    return
  }
  return (
    <YellowCard>
      <EventList>{event.title}</EventList>
      {event.nextOccurence.format('dddd HH:mm')}
      <p></p>
    </YellowCard>
  )
}

const EventList = styled.p`
  margin: 0px;
  font-size: 30px;
  color: black;
`
