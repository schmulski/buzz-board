import styled from 'styled-components/macro'

const Header = styled.section`
  display: grid;
  grid-template-areas: 'title clock';

  grid-template-columns: 25% 40% 25%;
  align-text: center;
  background-color #861657;
  background-image linear-gradient(326deg, #861657 0%, #ffa69e 74%);
  min-height: 60px;
  margin: 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;
  color: #ffffff;

  @media (max-width: 600px) {
    grid-template-areas:
      'title'
      'clock';
    grid-template-columns: 100%;

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 130px;
      margin: 0;
      z-index: 100;

    .title {
      text-align: center;
      padding: 0;
    }
  }

  .title {
    grid-area: title;
    align-text: center;
    font-size: 30px;
    color: white;
    padding-left: 30px;
  }
`

export default Header
