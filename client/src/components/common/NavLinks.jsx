import { NavLink } from "react-router-dom";

import links from "../../utils/links";
import { useDashboardContext } from "../../pages/DashboardLayout";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

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
              `flex items-center px-4 py-2 my-1 text-gray-700 transition-colors duration-200 gap-4 ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "hover:bg-gray-50"
              }`
            }
            end
          >
            {icon}
            <span className="capitalize">{text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
