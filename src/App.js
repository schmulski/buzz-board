import React from "react";
import Header from "./Header";
import PeopleColumn from "./PeopleColumn1";
import EventsColumn from "./EventsColumn2";
import LunchColumn from "./LunchColumn3";
import styled from "styled-components";
import Clock from "react-live-clock";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header>
        <h1>BUZZ BOARD</h1>
        <ClockStyle>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"European"} />
        </ClockStyle>
      </Header>
      <ColumnWrapper>
        <PeopleColumn />
        <EventsColumn>Das ist ein Platzhalter</EventsColumn>
        <LunchColumn></LunchColumn>
      </ColumnWrapper>
    </div>
  );
}
export default App;

const ColumnWrapper = styled.section`
  display: flex;
  flex-dircetion: row;
  justify-content: space-around;
`;

const ClockStyle = styled.div`
  color: #ffaaa5;
  display: grid;
  justify-self: end;
  align-self: center;
`;
