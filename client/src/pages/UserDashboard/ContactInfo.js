import { ImageUpload, UserInfo } from "../../components/UserProfile/"
import { Title } from "../../components"

const ContactInfo = () => {
  return (
    <div className='dashboard-section'>
      <Title title={'Account Info'} />
      <div className="dashboard-container">
        <ImageUpload />
        <UserInfo />
      </div>
    </div>
  )
}

export default ContactInfo