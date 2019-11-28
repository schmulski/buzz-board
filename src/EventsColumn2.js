import React from "react";
import styled from "styled-components";
import eventData from "./event.json";
import EventCard from "./EventCard";

export default function EventsColumn() {
  return (
    <StyledEventColumn>
      <h2>WhatsUp today and this week? 🔮 </h2>
      {eventData.map(event => (
        <EventCard>
          <EventList>{event.title}</EventList>
          Date:{event.day}
          <EventList>Time:{event.time}</EventList>
          <p></p>
        </EventCard>
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
  font-family: "Fredericka the Great";
`;

const EventList = styled.p`
  margin: 0px;
`;
