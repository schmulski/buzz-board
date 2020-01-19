import styled from 'styled-components/macro'

const FooterStylingScroller = styled.section`
  @media (min-width: 600px) {
    animation: slidein 20s infinite;
    animation-timing-function: linear;
    @keyframes slidein {
      from {
        transform: translateX(100vw);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`

export default FooterStylingScroller
