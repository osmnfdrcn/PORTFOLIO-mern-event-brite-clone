import * as Yup from 'yup'

const SchemaRegister = Yup.object().shape({
  firstName: Yup.string().required('required').min(2).max(30),
  lastName: Yup.string().required('required').min(2).max(30),
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "please enter a valid email"
  ),
  password: Yup.string().required("required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "both password need to be the same"
    )
  })
})

export default SchemaRegister