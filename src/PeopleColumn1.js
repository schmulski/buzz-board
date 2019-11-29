import React from "react";
import styled from "styled-components";
import birthdayData from "./birthdays.json";
import EventCard from "./EventCard.js";
import StyledColumn from "./StyledColumn";

const BirthdayList = styled.p`
  margin: 0px;
  font-size: 20px;
`;

export default function PeopleColumn() {
  return (
    <StyledColumn>
      <h2 className="title"> Buzzz Birthday Board 🎈</h2>
      {birthdayData.map(birthday => (
        <EventCard>
          <BirthdayList>{birthday.name}</BirthdayList> Date:{birthday.birthday}
          <p>{birthday.funfact}</p>
        </EventCard>
      ))}
    </StyledColumn>
  );
}
