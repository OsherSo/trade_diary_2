import { createBrowserRouter, RouterProvider } from "react-router-dom";

import loginAction from "./actions/loginAction";
import registerAction from "./actions/registerAction";
import addDiaryAction from "./actions/addDiaryAction";
import deleteDiaryAction from "./actions/deleteDiaryAction";
import editDiaryAction from "./actions/editDiaryAction";
import addTradeAction from "./actions/addTradeAction";
import deleteTradeAction from "./actions/deleteTradeAction";

import authLoader from "./loaders/authLoader";
import dashboardLoader from "./loaders/dashboardLoader";
import diariesLoader from "./loaders/diariesLoader";
import singleDiaryLoader from "./loaders/singleDiaryLoader";
import tradesLoader from "./loaders/tradesLoader";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  Diaries,
  AddDiary,
  EditDiary,
  Trades,
  AddTrade,
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
            children: [
              {
                path: "new",
                element: <AddDiary />,
                action: addDiaryAction,
              },
              {
                path: "edit/:id",
                element: <EditDiary />,
                action: editDiaryAction,
                loader: singleDiaryLoader,
              },
              {
                path: "delete/:id",
                action: deleteDiaryAction,
              },
              {
                path: ":id/trades",
                element: <Trades />,
                loader: tradesLoader,
                children: [
                  {
                    path: "new",
                    element: <AddTrade />,
                    action: addTradeAction,
                  },
                  {
                    path: "delete/:tradeId",
                    action: deleteTradeAction,
                  },
                ],
              },
            ],
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
