import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import Wrapper from '../../assets/Wrappers/UserSharedLayout';
import NavLinks from '../../components/NavLinks';
import { useState, useEffect } from 'react';
const UserSharedLayout = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  useEffect(() => {
    window.addEventListener("click", () => setToggleMenu(false))
    return () => {
      window.addEventListener("click", () => setToggleMenu(false))
    }
  })
  return (
    <Wrapper>
      <div className='user-header '>
        <FaBars onClick={(e) => {
          e.stopPropagation()
          setToggleMenu(!toggleMenu)
        }
        }
        />
        <span>Menu</span>
      </div>

      <div className='page-container'>
        <NavLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <div className='outlet-area'>
          <Outlet />
        </div>
      </div>

    </Wrapper>
  );
};
export default UserSharedLayout;

