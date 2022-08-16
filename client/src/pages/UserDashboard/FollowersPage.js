import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearSearchCriterias, getUsers } from '../../features/user/userSlice'
import { Title } from "../../components"
import Wrapper from '../../assets/Wrappers/Followers';
import User from '../../components/User';

const FollowersPage = () => {
  const dispatch = useDispatch();
  const { users, isLoading, totalUsers, numOfUsers } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUsers('?limit=10&skip=0&criteria=followers'));
    return () => {
      dispatch(clearSearchCriterias())
    }
  }, [])

  if (isLoading) {
    return <div>Loading </div>
  }
  return (
    <div className='dashboard-section'>
      <Title title={'Followers'} />
      <Wrapper>
        {users.map(user => {
          return (
            <User user={user} />
          )
        })}
      </Wrapper>
    </div>
  )
}

export default FollowersPage