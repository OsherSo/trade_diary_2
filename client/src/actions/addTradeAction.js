import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const addTradeAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post(`/diaries/${params.id}/trades`, data);
    toast.success("Trade added successfully");
    return redirect(`/dashboard/diaries/${params.id}/trades`);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default addTradeAction;
