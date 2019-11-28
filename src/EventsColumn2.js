import React from "react";
import styled from "styled-components";
import eventData from "./event.json";

export default function EventsColumn() {
  return (
    <StyledEventColumn>
      <h2>WhatsUp today and this week? 🔮 </h2>
      {eventData.map(event => (
        <div>
          <EventList>{event.title}</EventList>
          Date:{event.day}
          <EventList>Time:{event.time}</EventList>
          <p></p>
        </div>
      ))}
    </StyledEventColumn>
  );
}

var later = require("later");

var sched = later.parse.text("every 5 mins"),
  occurrences = later.schedule(sched).next(10);

for (var i = 0; i < 10; i++) {
  console.log(occurrences[i]);
}

const StyledEventColumn = styled.div`
  display: inline-block;
  background: #35682d;
  margin: 10px;
  color: white;
`;

const EventList = styled.p`
  margin: 0px;
`;
