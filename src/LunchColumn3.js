import React from "react";
import styled from "styled-components";
import StyledColumn from "./StyledColumn";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

export default function LunchColumn() {
  return (
    <StyledColumn>
      <h2 className="title">Lunch recommendation</h2>
      <ImageLunch
        src={require(`./images/lunchmenu.jpg`)}
        alt="This week for lunch"
      ></ImageLunch>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="HVVStoerungen"
        options={{ height: 400 }}
      />
    </StyledColumn>
  );
}

const ImageLunch = styled.img`
  width: 100%;
`;
