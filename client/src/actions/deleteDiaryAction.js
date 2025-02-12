import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const deleteDiaryAction = async ({ params }) => {
  try {
    await customFetch.delete(`/diaries/${params.id}`);
    toast.success("Diary deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashboard/diaries");
};

export default deleteDiaryAction;
