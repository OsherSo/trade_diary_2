import { useRouteError } from "react-router-dom";

import { NotFoundError, UnexpectedError } from "../components/error";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return <NotFoundError />;
  }

  return <UnexpectedError message={error.message} />;
};

export default Error;
