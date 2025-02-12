import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

const singleDiaryLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/diaries/${params.id}`);
    return data;
  } catch (error) {
    console.error(error);
    return redirect("/dashboard/diaries");
  }
};

export default singleDiaryLoader;
