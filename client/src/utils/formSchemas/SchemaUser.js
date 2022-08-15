import * as Yup from 'yup'

const SchemaUser = Yup.object().shape({
  firstName: Yup.string().required('required').min(2).max(30),
  lastName: Yup.string().required('required').min(2).max(30),
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "please enter a valid email"
  ),
  neighborhood: Yup.string().required('required'),
  country: Yup.string().required('required'),
  city: Yup.string().required('required'),
  zip: Yup.number().required('required')
})


export default SchemaUser 