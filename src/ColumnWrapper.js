import styled from 'styled-components/macro'

const ColumnWrapper = styled.section`
  display: grid;
  justify-content: space-around;
  grid-template-areas: 'people events lunch';
  grid-template-columns: 30% 40% 30%;

  @media (max-width: 600px) {
    grid-template-areas:
      'events'
      'people'
      'lunch';
    çgrid-template-columns: 100%;
  }
`

export default ColumnWrapper
