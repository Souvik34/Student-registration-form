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

      return errors;
  }
  return (
    <div className="container container-fluid">
      <div className='row wrapper'>
        <div className="col-10 col-lg-5">

          <Formik className='shadow-lg' initialValues={{name: '', email: '', phoneNo:'', password: '', confirmPassword: ''}}
          
          validate={validateForm}
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
              </Form>
              
            )}

          </Formik>
        </div>
      </div>
    </div>
  )
}

export default App