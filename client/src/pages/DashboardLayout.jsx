import { toast } from "react-toastify";
import { createContext, useContext, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";
import { Navbar, SmallSidebar, BigSidebar } from "../components/common";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logged out successfully");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isCollapsed,
        toggleSidebar,
        toggleCollapse,
        logout,
      }}
    >
      <div className="relative min-h-screen bg-gray-50 font-inter">
        <SmallSidebar />
        <BigSidebar />
        <div
          className={`transition-all duration-300 ${
            showSidebar ? (isCollapsed ? "lg:ml-20" : "lg:ml-64") : "lg:ml-0"
          }`}
        >
          <Navbar />
          <div className="p-6 min-h-[calc(100vh-4rem)]">
            <Outlet context={{ user }} />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
