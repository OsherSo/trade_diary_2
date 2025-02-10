import { Menu } from "lucide-react";

import LogoutContainer from "./LogoutContainer";
import { useDashboardContext } from "../../pages/DashboardLayout";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="h-16 px-6 flex items-center justify-between">
        <button
          type="button"
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex-1" />
        <LogoutContainer />
      </div>
    </nav>
  );
};

export default Navbar;
