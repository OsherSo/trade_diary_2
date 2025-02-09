import { Link, Form } from "react-router-dom";

import { FormRow, Logo, SubmitBtn } from "../components";

const Login = () => {
  return (
    <Form method="post">
      <Logo />
      <h4>Login</h4>
      <FormRow type="email" name="email" labelText="Email" />
      <FormRow type="password" name="password" labelText="Password" />
      <SubmitBtn />
      <p>
        Not a member yet?
        <Link to="/register">Register</Link>
      </p>
    </Form>
  );
};

export default Login;
