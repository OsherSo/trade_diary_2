import { createBrowserRouter, RouterProvider } from "react-router-dom";

import loginAction from "./actions/loginAction";
import registerAction from "./actions/registerAction";

import authLoader from "./loaders/authLoader";
import dashboardLoader from "./loaders/dashboardLoader";
import diariesLoader from "./loaders/diariesLoader";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Diaries,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: authLoader,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        loader: authLoader,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        loader: authLoader,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            path: "diaries",
            element: <Diaries />,
            loader: diariesLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
