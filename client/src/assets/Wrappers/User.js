import styled from 'styled-components'

const Wrapper = styled.div`
    .user{
      cursor: pointer;
    }
    .user:hover{
      box-shadow: var(--shadow-3);
    }
    .user-info{
      color: white;
    }
  

  .user-avatar{
    width: 100%;
  }
  .user-avatar img{
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 200px;

  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--grey-800);
    background-color: var(--primary-500);
  }
  .user-info span{
    display: block;
    letter-spacing: .5px;
    
  }
`

export default Wrapper