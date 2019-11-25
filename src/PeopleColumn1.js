import styled from "styled-components";
import birthdayData from './birthdays.json'

export default function PeopleColumn({ "name, birthday" }) {
const PeopleColumn = styled.div`
  width: 30%;
  background: #35682d;
  font-family: "Josefin Slab", serif;
  height: 100vh;
  margin: 10px;
  {
      name: String,
      birthday: String,
  }
`;

export default EventsColumn;
