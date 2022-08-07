import styled from 'styled-components'
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login{
      height: 100%;
      flex: 1;
  }

  
  @media (min-width: 960px) {
    .login-hero{
      height: 100%;
      flex: 1;
      background-image: url('https://images.pexels.com/photos/1185440/pexels-photo-1185440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
      background-position: center right;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
`
export default Wrapper