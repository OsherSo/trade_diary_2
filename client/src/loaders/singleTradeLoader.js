import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

const singleTradeLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/diaries/${params.id}/trades/${params.tradeId}`,
    );
    return data;
  } catch (error) {
    console.error(error);
    return redirect(`/dashboard/diaries/${params.id}/trades`);
  }
};

export default singleTradeLoader;
