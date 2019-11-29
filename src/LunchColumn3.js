import React from "react";
import styled from "styled-components";

export default function LunchColumn() {
  return (
    <StyledLunchColumn>
      <h2>Lunch recommendation</h2>
      <ImageLunch
        src={require(`./images/lunchmenu.jpg`)}
        alt="This week for lunch"
      ></ImageLunch>
    </StyledLunchColumn>
  );
}

const StyledLunchColumn = styled.div`
  width: 30%;
  background: #a8e6cf;
  margin: 10px;
  margin 5px;
  font-family: "Fredericka the Great";
`;

const ImageLunch = styled.img`
  width: 100%;
  margin: 5px;
`;
