import styled from 'styled-components'

const GridContainer = styled.div`
  height: 100vh;
  width: 100 wh;
  display: grid;
  grid-template-areas:
    'title clock'
    'events'
    'people lunch lunch'
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
