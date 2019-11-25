import React from "react";
import Header from "./Header";
import PeopleColumn from "./PeopleColumn1";
import EventsColumn from "./EventsColumn2";
import LunchColumn from "./LunchColumn3";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header>BUZZ BOARD</Header>
      <ColumnWrapper>
        <PeopleColumn>
          {/* <h2>{name}</h2>
          <p>{birthday}</p> */}
        </PeopleColumn>
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
