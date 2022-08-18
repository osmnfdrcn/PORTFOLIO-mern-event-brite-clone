import Wrapper from "../assets/Wrappers/User"
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  const { firstName, avatar } = user
  return (
    // <Link to={`/user/${id}`} >
    <Wrapper>
      <div className="user">
        <div className="avatar-container">
          <img src={avatar?.url} alt="avatar" />
        </div>
        <span>{firstName}   </span>
      </div>

    </Wrapper>
  )
}

export default User