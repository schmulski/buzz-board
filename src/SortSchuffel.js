import React, { useState, useEffect } from 'react'

export default function Sort({ children }) {
  const [currentShownEvent, setCurrentShownEvent] = useState(0)

  const childArray = React.Children.toArray(children)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShownEvent((currentShownEvent + 1) % childArray.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [childArray.length, currentShownEvent])

  return [
    childArray.sort((a, b) =>
      a.props.event.nextOccurence > b.props.event.nextOccurence ? 1 : -1
    )[currentShownEvent],
  ]
}
