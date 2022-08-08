import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import Wrapper from '../../assets/Wrappers/UserSharedLayout';
import NavLinks from '../../components/NavLinks';
import { NavLink } from 'react-router-dom';
import links from '../../utils/links';
import { useState } from 'react';
const UserSharedLayout = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <Wrapper>
      <div className='user-header '>
        <FaBars onClick={() => setToggleMenu(!toggleMenu)} />
        <span>Menu</span>
      </div>

      <NavLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Outlet />

    </Wrapper>
  );
};
export default UserSharedLayout;