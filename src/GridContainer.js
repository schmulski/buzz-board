import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'title clock'
    'people events lunch'
    'news news news';

  @media (max-width: 600px) {
    display: grid;
    grid-template-areas:
      'title clock'
      'events people lunch news'
      'navigation';
  }
`
export default GridContainer
