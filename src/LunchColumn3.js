import React, { useState } from 'react'
import styled from 'styled-components/macro'
import StyledColumn from './StyledColumn'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function LunchColumn() {
  const [swipeIndex, setSwipeIndex] = useState(0)

  return (
    <StyledColumn gridArea="lunch">
      <h2 className="title">Lunch recommendation</h2>
      <AutoPlaySwipeableViews
        index={swipeIndex}
        onChangeIndex={handleChangeIndex}
      >
        <ImageLunch
          src={require(`./images/lunchmenu.jpg`)}
          alt="This week for lunch"
        ></ImageLunch>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="HVVStoerungen"
          options={{ height: 600 }}
        />
      </AutoPlaySwipeableViews>
    </StyledColumn>
  )

  function handleChangeIndex(index) {
    setSwipeIndex(index)
  }
}

const ImageLunch = styled.img`
  width: 100%;
`
export default LunchColumn
