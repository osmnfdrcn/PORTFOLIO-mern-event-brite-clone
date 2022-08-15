import * as Yup from 'yup'

const SchemaLogin = Yup.object().shape({
  email: Yup.string().required('required'),
  password: Yup.string().required("required"),
})

export default SchemaLogin