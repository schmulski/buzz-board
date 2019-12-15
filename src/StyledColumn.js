import styled from 'styled-components/macro'

const StyledColumn = styled.div`
  grid-area: ${props => props.gridArea};
  display: inline-block;
  background: #2c7873;
  font-family: 'Fredericka the Great';
  color: white;
  margin: 10px;
  padding: 10px;

  .title {
    color: #fa697c;
    text-align: center;
  }
`

export default StyledColumn
