import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearSearchCriterias, getUsers } from '../../features/user/userSlice'
import { Title, User, Pagination } from "../../components"
import Wrapper from '../../assets/Wrappers/Followers';

const FollowersPage = () => {
  const dispatch = useDispatch();
  const { users, isLoading, totalUsers, numOfUsers, numOfPages, skip, limit } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUsers(`?limit=${+limit}&skip=${skip}&criteria=followers`));

  }, [skip])

  useEffect(() => {
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
      <Pagination />
    </div>
  )
}

export default FollowersPage