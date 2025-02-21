import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

import customFetch from "../utils/customFetch";

const deleteTradeAction = async ({ params }) => {
  try {
    await customFetch.delete(`/diaries/${params.id}/trades/${params.tradeId}`);
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect(`/dashboard/diaries/${params.id}/trades`);
};

export default deleteTradeAction;
