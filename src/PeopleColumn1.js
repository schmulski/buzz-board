import React from "react";
import styled from "styled-components";
import birthdayData from "./birthdays.json";
import EventCard from "./EventCard.js";

export default function PeopleColumn() {
  return (
    <StyledPeopleColumn>
      <h2>Birthday Board BB 🎈</h2>
      {birthdayData.map(birthday => (
        <EventCard>
          <BirthdayList>{birthday.name}</BirthdayList> Date:{birthday.birthday}
          <p>{birthday.funfact}</p>
        </EventCard>
      ))}
    </StyledPeopleColumn>
  );
}

const StyledPeopleColumn = styled.div`
  display: inline-block;
  max-width: 30%;
  background: #a8e6cf;
  font-family: "josefin";
  color: white;
  margin: 5px;
  padding: 10px;
`;

const BirthdayList = styled.p`
  margin: 0px;
`;
