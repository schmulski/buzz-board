import styled from 'styled-components/macro'

const ColumnWrapper = styled.section`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: auto;
  grid-template-areas:
    'people events lunch'
    'news news news';

  @media (max-width: 600px) {
    margin-top: 130px;
    padding-bottom: 80px;
    z-index: 10;

    grid-template-areas:
      'events'
      'people'
      'lunch'
      'news';
    grid-template-columns: 100%;
  }
`

export default ColumnWrapper
