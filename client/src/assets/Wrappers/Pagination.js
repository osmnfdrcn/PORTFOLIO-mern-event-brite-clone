import styled from 'styled-components'
const Wrapper = styled.div`
    position: absolute;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 20px ;
    width: 100%;
    margin-top: 20px;
    button{
      border: transparent;
      background-color: transparent;
      cursor: pointer;
      svg{
        font-size: 20px;
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
      font-size: 16px;
    }



`
export default Wrapper