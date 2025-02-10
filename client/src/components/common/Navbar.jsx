import { Layout } from "lucide-react";

import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-blue-600" />
              <h4 className="text-xl font-semibold text-gray-900 capitalize">
                dashboard
              </h4>
            </div>
          </div>
          <LogoutContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
