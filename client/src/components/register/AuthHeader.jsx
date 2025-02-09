import { Logo } from "../common";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <Logo />
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
        Create Your Account
      </h2>
      <p className="text-gray-600 text-center">
        Start your trading journey with Trading Journal Pro
      </p>
    </div>
  );
};

export default AuthHeader;
