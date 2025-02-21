import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const addDiaryAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/diaries", data);
    return redirect("/dashboard/diaries");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default addDiaryAction;
