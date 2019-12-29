import styled from 'styled-components/macro'

const FooterStyling = styled.section`
  grid-area: news;
  background: #ffffff;
  min-height: 60px;
  margin: 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;

  white-space: nowrap;
  width: 100vw;
  overflow: hidden;

  animation: slidein 40s infinite;
  animation-timing-function: linear;
  @keyframes slidein {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }

  @media (max-width: 600px) {
    grid-template-area: 'news';
    grid-template-column: 100%;

    .news {
      text-align: center;
      padding: 0;
    }
  }

  .news {
    color: #e13a9d;
    padding-left: 30px;
  }
`
export default FooterStyling
