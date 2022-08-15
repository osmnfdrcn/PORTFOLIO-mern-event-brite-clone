import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { FcGoogle } from 'react-icons/fc'
import { FormRow } from "./";
import Wrapper from "../assets/Wrappers/Login";
import { SchemaRegister, SchemaLogin } from "../utils/formSchemas";

const Login = () => {
  const [isMember, setIsMember] = useState(true)
  const [forgotPassword, setForgotPassword] = useState(false)
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [googleUser, setGoggleUser] = useState(null)


  const googleAuth = async () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/api/v1/users/auth/google/callback`,
      "_self"
    );
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: isMember ? SchemaLogin : SchemaRegister,
    onSubmit: () => {
      console.log(formik.values)
      const { firstName, lastName, email, password } = formik.values;

      if (isMember) {
        dispatch(loginUser({ email, password }));
        return;
      }
      dispatch(registerUser({ firstName, lastName, email, password }));
      formik.resetForm()
    }
  })

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);


  return (
    <Wrapper>
      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <span className="title">
            {isMember ? "LOGIN" : "REGISTER"}
          </span>

          {!isMember && <>
            <FormRow
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />

            {formik.errors.firstName && formik.touched.firstName &&
              <span className="form-error"> {formik.errors.firstName}</span>
            }

            <FormRow
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && formik.touched.lastName &&
              <span className="form-error">{formik.errors.lastName} </span>
            }
          </>}

          <FormRow
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email &&
            <span className="form-error">{formik.errors.email} </span>
          }

          <FormRow
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.touched.password &&
            <span className="form-error">{formik.errors.password} </span>
          }
          {!isMember && (
            <>
              <FormRow
                type="password"
                name="confirmPassword"
                labelText="confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                <span className="form-error">{formik.errors.confirmPassword} </span>
              }
            </>
          )}

          <button className="btn btn-block" type="submit" disabled={isLoading}>SUBMIT</button>

          <div className="toggle-button">
            <input type="checkbox" id="toggle" className="toggleCheckbox" />
            <label htmlFor="toggle" className="toggleContainer">
              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                Login
              </div>

              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                Register
              </div>
            </label>
          </div>

        </form>
        <div className="social-login" onClick={googleAuth}>
          <FcGoogle />
          <span>Sign in using Google </span>
        </div>


      </div>
    </Wrapper >
  )
}

export default Login