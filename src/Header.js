import styled from 'styled-components/macro'

const Header = styled.section`
  display: grid;
  grid-template-areas: 'title clock';

  grid-template-columns: 45% 45%;
  align-text: center;
  background: #2c7873;
  min-height: 60px;
  margin: 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;
  color: #ffffff;
  animation-duration: 3s;
  animation-name: slidein;
  animation-timing-function: ease-in-out;
  @keyframes slidein {
    from {
      margin-left: 75%;
    }
    to {
      margin-left: 0%;
    }
  }

  @media (max-width: 600px) {
    grid-template-areas:
      'title'
      'clock';
    grid-template-columns: 100%;

    .title {
      text-align: center;
      padding: 0;
    }
  }

  .title {
    grid-area: title;
    align-text: center;
    font-size: 50px;
    color: #e13a9d;
    padding-left: 30px;
  }
`

export default Header
