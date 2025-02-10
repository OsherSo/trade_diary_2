import { NavLink } from "react-router-dom";

import links from "../../utils/links";
import { useDashboardContext } from "../../pages/DashboardLayout";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user, isCollapsed } = useDashboardContext();

  return (
    <div className="pt-4">
      {links.map((link) => {
        const { text, path, icon } = link;
        if (path === "/dashboard/admin" && user.role !== "admin") return null;

        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-1 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
            end
          >
            <div className="flex items-center gap-4">
              {icon}
              {!isCollapsed && (
                <span
                  className={`capitalize ${isBigSidebar ? "" : "lg:hidden"}`}
                >
                  {text}
                </span>
              )}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
