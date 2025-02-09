import { Link } from "react-router-dom";

import Logo from "../common/Logo";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
