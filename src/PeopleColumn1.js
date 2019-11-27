import React from "react";
import styled from "styled-components";
import birthdayData from "./birthdays.json";

export default function PeopleColumn() {
  return (
    <StyledPeopleColumn>
      <h2>BirthdayBoard</h2>
      {birthdayData.map((birthday, index) => (
        <div>
          <p>Name={birthday.name}</p> Birthday={birthday.birthday},
        </div>
      ))}
    </StyledPeopleColumn>
  );
}

const StyledPeopleColumn = styled.div`
  width: auto;
  background: #35682d;
  font-family: "Fredericka the Great";
  color: hotpink;
  height: auto;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: auto;
`;
