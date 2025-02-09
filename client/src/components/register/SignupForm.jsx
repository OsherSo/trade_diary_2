import { Form, Link } from "react-router-dom";

import { FormRow, SubmitBtn } from "../common";

const SignupForm = () => {
  return (
    <Form method="post" className="space-y-6">
      <div className="space-y-4">
        <FormRow
          type="text"
          name="firstName"
          labelText="First Name"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <FormRow
          type="email"
          name="email"
          labelText="Email Address"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          labelStyle="block text-sm font-medium text-gray-700 mb-1"
          inputStyle="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <SubmitBtn
        text="Create Account"
        style="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      />

      <div className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Sign in
        </Link>
      </div>
    </Form>
  );
};

export default SignupForm;
