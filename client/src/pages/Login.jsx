import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { LoginHeader, LoginForm } from "../components/login";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <LoginHeader />
          <LoginForm />
        </div>

        <Link
          to="/"
          className="flex items-center justify-center mt-8 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
