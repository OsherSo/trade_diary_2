import { Form, Link } from "react-router-dom";

import { FormRow, Logo, SubmitBtn } from "../components";

const Register = () => {
  return (
    <Form method="post">
      <Logo />
      <h4>Register</h4>
      <FormRow type="text" name="firstName" labelText="First Name" />
      <FormRow type="text" name="lastName" labelText="Last Name" />
      <FormRow type="email" name="email" labelText="Email" />
      <FormRow type="password" name="password" labelText="Password" />
      <SubmitBtn />
      <p>
        Already a member?
        <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};

export default Register;
