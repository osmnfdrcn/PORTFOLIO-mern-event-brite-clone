import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { socialLogin } from '../features/user/userSlice';
import { useEffect } from 'react';

const HomePage = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch();


  const getUser = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/v1/users/auth/login/success`;
    const { data } = await axios.get(url, { withCredentials: true });
    dispatch(socialLogin(data.user))
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      Home
    </div>
  )
}

export default HomePage