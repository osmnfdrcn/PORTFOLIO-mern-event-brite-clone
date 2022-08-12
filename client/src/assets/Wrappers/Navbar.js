import styled from 'styled-components'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background-color: white;
  height: 60px;
  width: 100%;
  padding: 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-100);

  .header-items{
    display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
  }
  .header-item{
    display: none;
  }
  .user-item {
     padding: 0 24px;
        height: 100%;
    display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        height: 100%;
    /* span{
      display: none;
    } */
    svg{
      font-size: 20px;
    }
  }
  .search{
    display: none;

  }
   .user-item:hover,
      .header-item:hover{
        background-color:var(--grey-50);
        cursor: pointer;
      }
  
   @media (min-width: 960px) {
    .header-items{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
     .header-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 24px;
        svg{
          font-size:16px;
          font-weight: 600;
        }
        span{
          font-size: 14px;
        }
      }
      .user-item{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        /* width: 200px; */
        span{
          display: block;
          font-size: 14px;
        }
        :visited{
          color: var(--textColor);
        }
      }
      .search{
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 24px;
        svg{
          font-size:16px;
          font-weight: 600;
        }
        span{
          font-size: 14px;
        }
  }
     
  }
  }


`
export default Wrapper