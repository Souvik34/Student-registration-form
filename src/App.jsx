/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Form, Formik, Field } from 'formik';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (values) => {
    const errors = {};



    if (!values.name || values.name.trim() === '') {
      errors.name = 'Name is required and cannot be empty spaces';
    } else if (values.name.trim().length < 1) {
      errors.name = 'Name must be at least 1 character';
    } else if (values.name.trim().length > 15) {
      errors.name = 'Name must be less than 15 characters';
    }


    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age < 0) {
      errors.age = 'Age must be a positive number';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!validator.isEmail(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.course || values.course === '') {
      errors.course = 'Course is required';
    }


    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!validator.isStrongPassword(values.password)) {
      errors.password = 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character';
    }

    if (!values.ConfirmPassword) {
      errors.ConfirmPassword = 'Confirm Password is required';
    } else if (values.password !== values.ConfirmPassword) {
      errors.ConfirmPassword = 'Password and Confirm Password must match';
    }

    if (!values.agreeToRules) {
      errors.agreeToRules = 'You must agree to the rules before submitting';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setIsSubmitting(true);
  
    // Show toast notification
    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
    setTimeout(() => {
      resetForm();
      setIsSubmitting(false);
    }, 2000);
  };
  
  return (
    <div className="container container-fluid">
      <div className='row wrapper'>
        <div className="col-10 col-lg-5">
          <Formik
            initialValues={{
              name: '',
              age: '',
              email: '',
              course: '',
              password: '',
              ConfirmPassword: '',
              agreeToRules: false,
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className='shadow-lg glass-form'>
                <h1 className='mb-4' style={{ color: '#1BAAEA', fontWeight: 700 }}>Register here  <i className="fa-regular fa-address-card" style={{ color: '#ffffff' }}></i>
                </h1>


                {/* Name Field */}
                <div className="form-group mt-4">
                  <label htmlFor="name" style={{ color: '#ffffff' }}>Name</label>
                  <Field
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    className={formik.touched.name && formik.errors.name ? 'form-control is-invalid' : 'form-control'}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className='invalid-feedback'>{formik.errors.name}</div>
                  )}
                </div>

                {/* Age Field */}
                <div className="form-group mt-4">
                  <label htmlFor="age">Age</label>
                  <Field
                    name='age'
                    type='number'
                    placeholder='Enter your age'
                    style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    className={formik.touched.age && formik.errors.age ? 'form-control is-invalid' : 'form-control'}
                  />
                  {formik.touched.age && formik.errors.age && (
                    <div className='invalid-feedback'>{formik.errors.age}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group mt-4">
                  <label htmlFor="email">Email</label>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='invalid-feedback'>{formik.errors.email}</div>
                  )}
                </div>

                {/* Course Dropdown */}
                <div className="form-group mt-4 position-relative">
                  <label htmlFor="course">Select your Course</label>
                  <div className="custom-select-wrapper">
                    <Field
                      as="select"
                      name="course"
                      onBlur={formik.handleBlur}
                      className={formik.touched.course && formik.errors.course ? 'form-control is-invalid custom-select' : 'form-control custom-select'}
                      style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    >

                      <option value="" label="Please select your course" />
                      <option value="btech" label="B.Tech" />
                      <option value="mtech" label="M.Tech" />
                      <option value="mba" label="MBA" />
                      <option value="bsc" label="B.Sc" />
                      <option value="msc" label="M.Sc" />
                    </Field>

                    <span className="dropdown-arrow">&#9662;</span>
                  </div>
                  {formik.touched.course && formik.errors.course && (
                    <div className='invalid-feedback'>{formik.errors.course}</div>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-group mt-4">
                  <label htmlFor="password">Password</label>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='invalid-feedback'>{formik.errors.password}</div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="form-group mt-4">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <Field
                    name='ConfirmPassword'
                    type='password'
                    placeholder='Confirm your password'
                    style={{ backgroundColor: '#29313F', color: '#ffffff' }}
                    className={formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? 'form-control is-invalid' : 'form-control'}
                  />
                  {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword && (
                    <div className='invalid-feedback'>{formik.errors.ConfirmPassword}</div>
                  )}
                </div>

                {/* Custom Checkbox for Rules */}
                <div className="form-group form-check mt-4">
                  <Field
                    type="checkbox"
                    name="agreeToRules"
                    id="agreeToRules"
                    className={`form-check-input ${formik.touched.agreeToRules && formik.errors.agreeToRules ? 'is-invalid' : ''}`}
                  />
                  <label htmlFor="agreeToRules" className="form-check-label">
                    I accept the terms and services.
                  </label>
                  {formik.touched.agreeToRules && formik.errors.agreeToRules && (
                    <div className='invalid-feedback d-block'>{formik.errors.agreeToRules}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button
                    type='submit'
                    className='btn btn-primary py-3 mt-4 w-100'
                    disabled={isSubmitting || !formik.isValid}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}

export default App;
