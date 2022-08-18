import styled from 'styled-components'

const Wrapper = styled.div`
    .user{
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      :hover{
        box-shadow: var(--shadow-4);
      }
      .avatar-container{
      width: 100%;
        img{
          display: block;
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 200px;
        }
      }
      span{
        display: block;
        letter-spacing: 2px;
        color: var(--grey-600);
      }
    }
`

export default Wrapper