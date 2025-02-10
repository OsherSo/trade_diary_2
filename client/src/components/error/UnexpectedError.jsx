import { Link } from "react-router-dom";
import { AlertCircle, HomeIcon } from "lucide-react";

const UnexpectedError = ({ message }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mt-8">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Something went wrong
          </h2>
          <p className="mt-2 text-gray-600">
            {message || "An unexpected error occurred. Please try again later."}
          </p>
        </div>
        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UnexpectedError;
