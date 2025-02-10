import { useState } from "react";
import { UserCircle, ChevronDown, LogOut } from "lucide-react";

import { useDashboardContext } from "../../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useDashboardContext();

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-8 h-8 text-gray-600" />
        )}
        <span className="text-gray-700">{user?.name}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            showLogout ? "rotate-180" : ""
          }`}
        />
      </button>

      {showLogout && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
          <button
            type="button"
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoutContainer;
