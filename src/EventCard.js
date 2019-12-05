import React, { useState } from 'react'
import styled from 'styled-components/macro'
import YellowCard from './YellowCard'

export default function EventCard({ event }) {
  const [isHidden, setIsHidden] = useState(true)
  const buttonText = isHidden ? 'Show details' : 'Hide details'
  const onButtonClick = () => setIsHidden(!isHidden)
  if (!event.nextOccurence) {
    return
  }
  return (
    <YellowCard>
      <EventList>{event.title}</EventList>
      {event.nextOccurence.format('dddd HH:mm')}
      <p></p>
      <Description active={!isHidden}>{event.description}</Description>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </YellowCard>
  )
}

const EventList = styled.p`
  margin: 0px;
  font-size: 30px;
  color: black;
`
const Description = styled.pre`
  transition: all 0.3s;
  max-height: ${props => (props.active ? 'auto' : '0')};
  overflow-y: hidden;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: 'Fredericka the Great';
`
const Button = styled.button`
  background: #e13a9d;
  font-family: 'Fredericka the Great';
  border-radius: 15px;
  justify-self: center;
  height: 40px;
  width: 100px;
  border: transparent;
`
