import { useNavigate, useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyUser } from '../features/user/userSlice';
import Wrapper from '../assets/Wrappers/VerifyUser';


const VerifyUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { verificationCode } = useParams()
  const { vCode, isLoading } = useSelector((store) => store.user);

  //useLayoutEffect
  useLayoutEffect(() => {
    dispatch(verifyUser(verificationCode))
    setTimeout(() => {
      navigate('/');
    }, 8000)
  }, []);


  return (
    <Wrapper >
      <p>{
        vCode === verificationCode ? "Account Activated" : "404"
      }</p>
    </Wrapper>
  )
}

export default VerifyUser