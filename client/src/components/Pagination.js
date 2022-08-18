import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Wrapper from '../assets/Wrappers/Pagination'
import { updatePage, updateSkip } from '../features/user/userSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <button
        disabled={page === 1}
        onClick={() => {
          dispatch(updatePage(page - 1))
          dispatch(updateSkip(-process.env.REACT_APP_SKIP))
        }}>
        <AiOutlineArrowLeft />
      </button>
      <span>{page} of {numOfPages}</span>
      <button
        disabled={page === numOfPages}
        onClick={() => {
          dispatch(updatePage(page + 1))
          dispatch(updateSkip(+process.env.REACT_APP_SKIP))
        }}>
        <AiOutlineArrowRight />
      </button>
    </Wrapper>
  )
}

export default Pagination