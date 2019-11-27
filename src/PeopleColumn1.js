import React from "react";
import styled from "styled-components";
import birthdayData from "./birthdays.json";

export default function PeopleColumn() {
  return (
    <StyledPeopleColumn>
      <h2>Birthday Board BB 🎈</h2>
      {birthdayData.map(birthday => (
        <div>
          <BirthdayList>{birthday.name}</BirthdayList> Date:{birthday.birthday}
          <p>{birthday.funfact}</p>
        </div>
      ))}
    </StyledPeopleColumn>
  );
}

const StyledPeopleColumn = styled.div`
  display: inline
  background: #35682d;
  font-family: 'josefin';
  color: white;
  margin: 10px;
  padding: 10px;
`;

const BirthdayList = styled.p`
  margin: 0px;
`;
