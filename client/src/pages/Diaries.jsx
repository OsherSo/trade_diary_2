import { DiariesHeader, DiaryCard, EmptyPage } from "../components/diaries";
import { useLoaderData } from "react-router-dom";

const Diaries = () => {
  const { diaries } = useLoaderData();

  return (
    <div>
      <DiariesHeader />
      {diaries.length === 0 ? (
        <EmptyPage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diaries.map((diary) => (
            <DiaryCard key={diary._id} diary={diary} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Diaries;
