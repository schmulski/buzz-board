import React from "react";
import styled from "styled-components";
import StyledColumn from "./StyledColumn";

export default function LunchColumn() {
  return (
    <StyledColumn>
      <h2 className="title">Lunch recommendation</h2>
      <ImageLunch
        src={require(`./images/lunchmenu.jpg`)}
        alt="This week for lunch"
      ></ImageLunch>
    </StyledColumn>
  );
}

const ImageLunch = styled.img`
  width: 100%;
`;
