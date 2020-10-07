import React from 'react';
import {Formik} from 'formik';
// import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
// import Container from 'react-bootstrap/Container';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// function SignUp() {
//   return (
//     <div>
//       <h1>Sign up page</h1>
//       <Container className='p3'>
//       <Jumbotron>
//       <Form>
//         <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group>
//               <Form.Check
//                 type='checkbox'
//                 label={`Male`}
//             />
//             <Form.Check
//                 type='checkbox'
//                 label={`Female`}
//             />
//             <Form.Check
//                 type='checkbox'
//                 label={`Other`}
//             />
//         </Form.Group>

//   <Button variant="primary" type="submit">
//             Submit
//   </Button>
// </Form>
//       </Jumbotron>
//       </Container>
//     </div>
//   );
// }

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
          <form onSubmit={handleSubmit}>
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
                enabled={'onClick'}
            />
            <Form.Check
                type='radio'
                label={`Female`}
                enabled={'onClick'}
            />
            <Form.Check
                type='radio'
                label={`Other`}
                enabled={'onClick'}
            />
        </Form.Group>
            <button type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          </form>
        );
      }}
    </Formik>
  );

export default SignUp;
