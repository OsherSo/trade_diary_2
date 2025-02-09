import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    return error;
  }
};

export default registerAction;
