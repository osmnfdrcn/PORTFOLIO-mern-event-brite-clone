import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SchemaUser } from "../../utils/formSchemas";
import { FormRow } from "../";
import Wrapper from "../../assets/Wrappers/UserInfo";

const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((store) => store.user);
  const userVerified = user.status === 'Active'


  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      neighborhood: user.address?.neighborhood,
      city: user.address?.city,
      country: user.address?.country,
      zip: user.address?.zip
    },

    validationSchema: SchemaUser,
    onSubmit: () => {
      const { firstName, lastName, email, neighborhood, city, country, zip } = formik.values;
      const address = { neighborhood, city, country, zip }
      dispatch(updateUser({ firstName, lastName, email, address }));
    }
  })


  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>

        <div className="horizontal-line">
          <div>
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
          </div>
          <div>
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
          </div>
        </div>


        <div>
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
        </div>


        <div className="horizontal-line">
          <div>
            <FormRow
              type="text"
              name="neighborhood"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.neighborhood}
            />
            {formik.errors.neighborhood && formik.touched.neighborhood &&
              <span className="form-error">{formik.errors.neighborhood} </span>
            }
          </div>
          <div>
            <FormRow
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.city}
            />
            {formik.errors.city && formik.touched.city &&
              <span className="form-error">{formik.errors.city} </span>
            }
          </div>
        </div>


        <div className="horizontal-line">
          <div>
            <FormRow
              type="text"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.country}
            />
            {formik.errors.country && formik.touched.country &&
              <span className="form-error">{formik.errors.country} </span>
            }
          </div>
          <div>
            <FormRow
              type="text"
              name="zip"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values?.zip}
            />
            {formik.errors.zip && formik.touched.zip &&
              <span className="form-error">{formik.errors.zip} </span>
            }
          </div>
        </div>

        <button className="btn btn-block" type="submit" disabled={!userVerified} >SAVE</button>
      </form>

    </Wrapper >
  )
}

export default UserInfo