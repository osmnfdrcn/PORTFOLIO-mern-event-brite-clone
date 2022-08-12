import Wrapper from '../assets/Wrappers/Navbar';
import MainHeaderItem from './MainHeaderItem';
import Logo from './Logo';
import SubMenu from './SubMenu';
import { AiOutlinePlus, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMainSubMenu } from '../features/app/appSlice'


const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { showMainSubMenu } = useSelector((store) => store.app)

  return (
    <Wrapper>
      <Logo />

      {user
        ? <div className='header-items'>
          <MainHeaderItem reactIcon={<AiOutlineSearch />} text={"Search events"} classname={"header-item search"} />
          <MainHeaderItem reactIcon={<AiOutlinePlus />} text={"Create an event"} classname={"header-item"} />
          <MainHeaderItem reactIcon={<AiOutlineHeart />} text={"Likes"} classname={"header-item"} />
          <MainHeaderItem reactIcon={<AiOutlineUser />} text={user.firstName} classname={"user-item"} onClick={() => dispatch(setShowMainSubMenu(!showMainSubMenu))} />
        </div>
        : (<div className='header-items'>
          <MainHeaderItem reactIcon={<AiOutlineSearch />} text={"Search events"} classname={"header-item search"} />
          <Link to='/login' className='user-item'>
            <MainHeaderItem text={"Login"} classname={"user-item"} />
          </Link>
        </div>)

      }
      {
        user && showMainSubMenu && <SubMenu />
      }

    </Wrapper>
  )
}

export default Navbar