import styled from 'styled-components/macro'

const StyledColumn = styled.div`
  grid-area: ${props => props.gridArea};
  display: inline-block;
  position: relative;
  background: lightgrey;
  font-family: 'Fredericka the Great';
  color: white;
  margin: 5px;
  padding: 10px;

  .title {
    color: #fa697c;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`

export default StyledColumn
