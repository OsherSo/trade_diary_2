import { useLoaderData, Outlet, useLocation } from "react-router-dom";

import { DiariesHeader, DiaryCard, EmptyPage } from "../components/diaries";

const Diaries = () => {
  const { diaries } = useLoaderData();
  const location = useLocation();

  const showDiariesList = location.pathname === "/dashboard/diaries";

  return (
    <>
      {showDiariesList ? (
        <>
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
        </>
      ) : null}
      <Outlet />
    </>
  );
};

export default Diaries;
