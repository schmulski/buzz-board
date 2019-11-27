import React from "react";
import Header from "./Header";
import PeopleColumn from "./PeopleColumn1";
import EventsColumn from "./EventsColumn2";
import LunchColumn from "./LunchColumn3";
import styled from "styled-components";
import Clock from "react-live-clock";

function App() {
  return (
    <div>
      <Header>
        <h1>BUZZ BOARD</h1>
        <ClockStyle>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"European"} />
        </ClockStyle>
      </Header>
      <ColumnWrapper>
        <PeopleColumn />
        <EventsColumn>Das ist ein Platzhalter</EventsColumn>
        <LunchColumn>Das ist ein Platzhalter</LunchColumn>
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
  color: gold;
  display: grid;
  place-self: center;
  height: -30px;
`;
