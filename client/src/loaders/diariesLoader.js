import { toast } from "react-toastify";

import customFetch from "../utils/customFetch";

const diariesLoader = async () => {
  try {
    const { data } = await customFetch.get("/diaries");
    const { diaries } = data;
    return { diaries };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default diariesLoader;
