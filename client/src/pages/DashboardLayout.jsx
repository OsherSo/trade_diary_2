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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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
        toggleSidebar,
        logout,
      }}
    >
      <div className="relative min-h-screen">
        <SmallSidebar />
        <BigSidebar />
        <div
          className={`lg:ml-64 transition-all duration-300 ${showSidebar ? "" : "lg:ml-0"}`}
        >
          <Navbar />
          <div className="px-4 py-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
            <Outlet context={{ user }} />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
