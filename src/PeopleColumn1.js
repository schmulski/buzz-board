import React from "react";
import styled from "styled-components";
import birthdayData from "./birthdays.json";

export default function PeopleColumn() {
  return (
    <StyledPeopleColumn>
      {birthdayData.map((birthday, index) => (
        <div>
          key={index}, Name={birthday.name}, Birthday={birthday.birthday},
        </div>
      ))}
    </StyledPeopleColumn>
  );
}

const StyledPeopleColumn = styled.div`
  width: 30%;
  background: #35682d;
  font-family: "Josefin Slab", serif;
  height: 100vh;
  margin: 10px;
`;
