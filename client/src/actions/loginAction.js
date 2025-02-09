import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

export default loginAction;
