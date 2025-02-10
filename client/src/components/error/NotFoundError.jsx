import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const NotFoundError = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mt-8">
          <h1 className="text-6xl font-bold text-blue-600">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
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

export default NotFoundError;
