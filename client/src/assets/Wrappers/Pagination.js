import styled from 'styled-components'
const Wrapper = styled.div`
    position: fixed;
    z-index: 1004;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    bottom: 0;
    right: 0;
    padding: 10px;
    width: 100%;
    button{
      border: transparent;
      background-color: transparent;
      cursor: pointer;
      svg{
        font-size: 24px;
        color: var(--grey-600);
      }
      :hover > svg{
          color:var(--primary-700)
      }
      :disabled{
        cursor: not-allowed;
      }
    }
    span{
      font-size: 18px;
    }



`
export default Wrapper