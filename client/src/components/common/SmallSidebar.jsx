import { X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../../pages/DashboardLayout";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <div
      className={`lg:hidden fixed inset-0 z-50 transform ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
        onClick={toggleSidebar}
      />

      <aside className="relative w-64 max-w-[80%] h-full bg-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Logo />
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 px-2 py-4 overflow-y-auto">
            <NavLinks />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SmallSidebar;
