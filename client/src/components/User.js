import Wrapper from "../assets/Wrappers/User"
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  const { firstName, avatar } = user
  return (
    // <Link to={`/user/${id}`} >
    <Wrapper>
      <div className="user">
        <div className="user-avatar">
          <img src={avatar?.url} alt="avatar" />
        </div>
        <div className="user-info">
          <span>{firstName}   </span>
        </div>
      </div>

    </Wrapper>
  )
}

export default User