import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const dashboardLoader = async () => {
  try {
    const { data } = await customFetch("/users/current-user");
    return data;
  } catch (error) {
    console.error(error);
    return redirect("/");
  }
};

export default dashboardLoader;
