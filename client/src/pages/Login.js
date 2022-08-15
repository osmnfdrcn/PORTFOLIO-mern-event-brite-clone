import Wrapper from "../assets/Wrappers/LoginPage"
import { Login } from "../components"

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="login">
        <Login />
      </div>
      <div className="login-hero"></div>
    </Wrapper>
  )
}

export default LoginPage