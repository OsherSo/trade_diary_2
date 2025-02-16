import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const tradesLoader = async ({ params }) => {
  try {
    const [diaryResponse, tradesResponse] = await Promise.all([
      customFetch.get(`/diaries/${params.id}`),
      customFetch.get(`/diaries/${params.id}/trades`),
    ]);

    return {
      diary: diaryResponse.data.diary,
      trades: tradesResponse.data.trades,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default tradesLoader;
