import { Title } from "../../components"
import { Password } from "../../components/UserProfile/"

const PasswordChange = () => {
  return (
    <div className='dashboard-section'>
      <Title title={'Password'} />
      <div className="dashboard-container">
        <Password />
      </div>
    </div >
  )
}

export default PasswordChange

