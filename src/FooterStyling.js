import styled from 'styled-components'

const FooterStyling = styled.section`
  display: grid;
  grid-template-areas: 'news picture';

  grid-template-columns: 45% 45%;
  align-text: center;
  background: #ffffff;
  min-height: 60px;
  margin: 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;
  color: #ffffff;

  @media (max-width: 600px) {
    grid-template-areas:
      'news'
      'picture';
    grid-template-columns: 100%;

    .news {
      text-align: center;
      padding: 0;
    }
  }

  .news {
    grid-area: news;
    align-text: center;
    font-size: 50px;
    color: #e13a9d;
    padding-left: 30px;
  }
`
export default FooterStyling
