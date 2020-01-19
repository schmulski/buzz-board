import styled from 'styled-components/macro'

const FooterStyling = styled.section`
  background: #ffffff;
  min-height: 60px;
  margin: 10px 0 0 0;
  padding: 0 10px;
  font-family: 'Fredericka the Great';
  font-size: 30px;

  white-space: nowrap;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;

  overflow: hidden;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    animation: none;
    position: relative;
    height: auto;
    margin: 10px;
    padding: 0;

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
