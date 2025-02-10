import { toast } from "react-toastify";
import { createContext, useContext } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";
import { Navbar } from "../components/common";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();

  const navigate = useNavigate();

  const logout = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logged out successfully");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <main>
        <div>
          <Navbar />
          <div>
            <Outlet context={{ user }} />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
