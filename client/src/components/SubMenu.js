import Wrapper from "../assets/Wrappers/SubMenu"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../features/user/userSlice";
import axios from 'axios'

const SubMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);

  const socialLogout = async () => {
    //clear cookie if user logged in by using social account
    await axios.get('http://localhost:5000/api/v1/users/auth/logout', { withCredentials: true })
  }
  const handleLogout = () => {
    dispatch(logoutUser())
    socialLogout()

  }
  return (
    <Wrapper >
      <ul>
        <Link to='/'><li>Browse Events</li></Link>
        <li>Manage My Events</li>
        <li>Create An Event</li>
        <li>Following</li>
        <Link to='/me'>Account Settings</Link>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </Wrapper>
  )
}

export default SubMenu

// setShowSubMenu = { setShowSubMenu }