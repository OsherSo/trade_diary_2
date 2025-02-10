import { ChevronLeft, ChevronRight } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../../pages/DashboardLayout";

const BigSidebar = () => {
  const { showSidebar, isCollapsed, toggleCollapse } = useDashboardContext();

  return (
    <div
      className={`hidden lg:block transition-all duration-300 ${
        showSidebar ? (isCollapsed ? "w-20" : "w-64") : "w-0 opacity-0"
      }`}
    >
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <header className="h-16 flex items-center px-6 border-b border-gray-200">
          {!isCollapsed && <Logo />}
        </header>
        <div className="px-2">
          <NavLinks isBigSidebar />
        </div>
        <button
          onClick={toggleCollapse}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BigSidebar;
