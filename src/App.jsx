/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import{Form, Formik, Field} from 'formik'
import validator from 'validator'
function App () {

  const validateForm = (values) => {

    const errors ={};

    if(!values.name)

      {
        errors.name = 'Name is required';
      }

      else if(values.name.length < 3)
      {
        errors.name = 'Name must be at least 3 characters';
      }
      else if(values.name.length > 15)
      {
        errors.name = 'Name must be less than 15 characters';
      }


      if(!values.email)
      {
        errors.email = 'Email is required';
      }
      
      else if(!validator.isEmail(values.email))
      {
        errors.email = 'Invalid email format';
      }

      if(!values.phoneNo)
      {
        errors.phoneNo = 'Contact Number is required';
      }
      else if(!validator.isMobilePhone(values.phoneNo))
      {
        errors.phoneNo = 'Invalid Contact Number';
      }

      if(!values.password)
      {
        errors.password = 'Password is required';
      }
      if(!validator.isStrongPassword(values.password))
      {
        errors.password = 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character';
      }

if(!values.ConfirmPassword)
{
  errors.ConfirmPassword = 'Confirm Password is required';
}
else if(values.password !== values.ConfirmPassword)
{
  errors.ConfirmPassword = 'Password and Confirm Password must match';
}

      return errors;
  }
  return (
    <div className="container container-fluid">
      <div className='row wrapper'>
        <div className="col-10 col-lg-5">

          <Formik className='shadow-lg' initialValues={{name: '', email: '', phoneNo:'', password: ''}}
          
          validate={validateForm}
          onSubmit={(values) => { console.log(values)}}
          >
            {(formik) =>  (

              <Form className='shadow-lg'>
                <h1 className='mb-4'>Register here</h1>

                {/* For Name */}
                <div className="form-group mt-4">
                  <label htmlFor="name">Name</label>
                  <Field 
                  name='name'
                  type='text'
                  className={formik.touched.name && formik.errors.name ? 'form-control is-invalid' : 'form-control'}
                  />

                  {formik.touched.name && formik.errors.name ? (
                    <div className='invalid-feedback'>{formik.errors.name}</div>
                  ) : null}
                </div>



                {/* For Email */}
                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <Field 
                  name='email'
                  type='email'
                  className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <div className='invalid-feedback'>{formik.errors.email}</div>
                  ) : null}
                </div>


                {/* For Phone Number */}
                <div className="form-group mt-4">
                  <label htmlFor="phoneNo">Contact Number</label>
                  <Field 
                  name='phoneNo'
                  type='text'
                  className={formik.touched.phoneNo && formik.errors.phoneNo ? 'form-control is-invalid' : 'form-control'}
                  />

                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className='invalid-feedback'>{formik.errors.phoneNo}</div>
                  ) : null}
                </div>


                {/* For Password */}
                <div className="form-group mt-4">
                  <label htmlFor="password">Password</label>
                  <Field 
                  name='password'
                  type='password'
                  className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className='invalid-feedback'>{formik.errors.password}</div>
                  ) : null}
                </div>


                {/* For  Confirm Password */}
                <div className="form-group mt-4">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <Field 
                  name='ConfirmPassword'
                  type='password'
                  className={formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? 'form-control is-invalid' : 'form-control'}
                  />

                  {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
                    <div className='invalid-feedback'>{formik.errors.ConfirmPassword}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <button type='submit' className='btn btn-primary py-3 mt-4 w-100'>Submit</button>
                </div>
              </Form>
              
            )}

          </Formik>
        </div>
      </div>
    </div>
  )
}

export default App