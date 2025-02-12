import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const authLoader = async () => {
  try {
    await customFetch.get("/users/current-user");
    return redirect("/dashboard");
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default authLoader;
