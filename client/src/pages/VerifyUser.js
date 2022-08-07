import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyUser } from '../features/user/userSlice';
import Wrapper from '../assets/Wrappers/VerifyUser';


const VerifyUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { verificationCode } = useParams()
  const { vCode, isLoading } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(verifyUser(verificationCode))
    setTimeout(() => {
      navigate('/');
    }, 3000)
  }, []);


  return (
    <Wrapper >
      <p>Redirecting...</p>
    </Wrapper>
  )
}

export default VerifyUser