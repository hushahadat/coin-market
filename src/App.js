import { getAllCoins } from "./api/Api";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Sidebar } from "./component/SideBar/Sidebar";
import {Coin} from './pages/Coin/Coin'
import { LodingSpinner } from "./component/Spin/LodingSpinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: getAllCoins,
      },
      {
        path: "/dashboard/:id",
        element: <Coin />,
      },
      {
        path: "/spin",
        element: <LodingSpinner />,
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
