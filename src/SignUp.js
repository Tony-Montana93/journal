import React from 'react';
import './App.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Redirect} from "react-router-dom";  


const location = {
    pathname: '/user',
    state: { fromDashboard: true }
  }

const SignUp = () => (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      //Using Yum for validation
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
      <Container className='p3'>
      <Jumbotron>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input name='full name' 
            type='text' 
            placeholder='Enter full name'
            ></input>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
              <em className='text-muted'>We will never share your email with anyone</em>
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <Form.Group>
              <Form.Check
                type='radio'
                label={`Male`}
                name='male'
            />
            <Form.Check
                type='radio'
                label={`Female`}
                name='female'
            />
            <Form.Check
                type='radio'
                label={`Other`}
                name='other'
            />
        </Form.Group>
        <Link to={location}/>
            <Redirect to={location}/>
            history.push(location)
            history.replace(location)
            <button class="btn btn-primary" type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          </form>
          </Jumbotron>
          </Container>
        );
      }}
    </Formik>
  );

export default SignUp;
