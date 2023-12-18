import { getAllCoins } from "./api/Api";
import { Sidebar } from "./component/SideBar/Sidebar";
import { LodingSpinner } from "./component/Spin/LodingSpinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PopOver } from "./pages/Popover/Popover";
import React, { Suspense } from "react";
import "./App.css";
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Coin = React.lazy(() => import("./pages/Coin/Coin"));

const router = createBrowserRouter([
  {
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<div> <LodingSpinner /></div>}><Dashboard /></Suspense>,
        loader: getAllCoins,
      },
      // {
      //   path: "/dashboard/:id",
      //   element: <Suspense fallback={<div> <LodingSpinner /></div>}><Coin /></Suspense>,
      // },
      {
        path: "/spin",
        element: <PopOver />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
