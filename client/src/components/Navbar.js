import Wrapper from '../assets/Wrappers/Navbar';
import { AiOutlinePlus, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import Logo from './Logo';
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const { user } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <Logo />

      {user
        ? <div className='header-items'>
          <div className="header-item">
            <AiOutlinePlus />
            <span>Create an event</span>
          </div>

          <div className="header-item">
            <AiOutlineHeart />
            <span>Likes</span>
          </div>

          <div className='user-item' onClick={() => setShowSubMenu(!showSubMenu)} >
            <AiOutlineUser />
            <span>{user.email}</span>
          </div>
        </div>
        : (<div className='header-items'>
          <div className="header-item">
            <AiOutlineSearch />
            <span>Search events</span>
          </div>
          <Link to='/login' className='user-item'>
            <div className='user-item' >
              <span>Login</span>
            </div>
          </Link>
        </div>)

      }
      {
        user && showSubMenu && <SubMenu setShowSubMenu={setShowSubMenu} />
      }

    </Wrapper>
  )
}

export default Navbar