import { Logo } from "../common";

const LoginHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <Logo />
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
        Welcome Back
      </h2>
      <p className="text-gray-600 text-center">
        Log in to continue your trading journey
      </p>
    </div>
  );
};

export default LoginHeader;
