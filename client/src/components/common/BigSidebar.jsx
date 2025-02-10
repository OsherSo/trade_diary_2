import Logo from "./Logo";
import NavLinks from "./NavLinks";

import { useDashboardContext } from "../../pages/DashboardLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <div
      className={`hidden lg:block transition-all duration-300 ${
        showSidebar ? "w-64" : "w-0 opacity-0"
      }`}
    >
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
        <header className="h-16 flex items-center px-6 border-b border-gray-200">
          <Logo />
        </header>
        <div className="px-2">
          <NavLinks isBigSidebar />
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
