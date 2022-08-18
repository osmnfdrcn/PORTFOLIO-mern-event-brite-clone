import styled from 'styled-components'
const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    width: 6rem;
    height: 6rem;
    border: 15px solid var(--grey-100);
    border-radius: 50%;
    border-top-color: var(--primary-500);
    animation: spinner 1s linear infinite;
  }
  .loading-center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
`
export default Wrapper