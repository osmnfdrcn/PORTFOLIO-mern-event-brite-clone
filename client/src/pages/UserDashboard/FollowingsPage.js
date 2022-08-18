import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearSearchCriterias, getUsers } from '../../features/user/userSlice'
import { Title, User, Pagination, Spinner } from "../../components"
import Wrapper from '../../assets/Wrappers/Followers';

const FollowingsPage = () => {
  const dispatch = useDispatch();
  const { users, isLoading, totalUsers, numOfUsers, numOfPages, skip, limit, page } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getUsers(`?limit=${+limit}&skip=${skip}&criteria=followings`));
  }, [page])

  useEffect(() => {
    return () => {
      console.log('useEffect Out');
      dispatch(clearSearchCriterias())
    }
  }, [])

  if (isLoading) {
    return <Spinner center />
  }
  return (
    <div className='dashboard-section'>
      <Title title={'Followings'} />
      <Wrapper>
        {users.map(user => {
          return (
            <User user={user} key={user._id} />
          )
        })}
        <Pagination />
      </Wrapper>

    </div>
  )
}

export default FollowingsPage