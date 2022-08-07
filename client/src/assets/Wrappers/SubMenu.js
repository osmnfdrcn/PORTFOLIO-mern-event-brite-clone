import styled from 'styled-components'
const Wrapper = styled.div`
  position: absolute;
    background-color: white;
    top: 60px;
    right: 3%;
    width: 208px;
    border: 1px solid var(--grey-50);

    ul li{
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 16px;
      color: var(--grey-500);
      height: 55px;
      width: 100%;
      cursor: pointer;
    }
    ul li:hover{
      background-color: var(--grey-50);
    }
`
export default Wrapper