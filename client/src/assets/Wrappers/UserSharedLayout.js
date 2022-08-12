import styled from 'styled-components'
const Wrapper = styled.div`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  .side-menu{
    display: none;
    position: absolute;
    top: 110px;
    left: 0;
    z-index: 1003;
    width: 300px;
    transition: var(--transition);
    background-color: #F6F8FC;
    box-shadow: var(--shadow-2);
  }
  .side-menu-disabled{
    display: none;
  }
   .nav-links {
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1.3rem 2rem ;
      text-transform: capitalize;
      transition: var(--transition);
    }
    /* .nav-link:hover {
      color: var(--primary-400);
    } */
    .active {
      background-color: var(--grey-100);
      transition: var(--transition);
      color: var(--grey-900);
      opacity: 0.8;
    }
  .user-header{
    height: 50px;
    background-color: white ;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
    svg{
      height: 50px;
      cursor: pointer;

    }
  }
   

  @media (min-width: 960px) {
     .user-header{
      display: none;
     }
     .side-menu{
      display: block;
      position: fixed;
      top: 60px;
      min-height: calc(100vh - 60px);
      
     }
   
  }
`
export default Wrapper