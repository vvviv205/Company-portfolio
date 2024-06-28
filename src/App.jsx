import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import("preline");
import "flowbite";
import Applayout from "./features/UI/Applayout";
import Home from "./features/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
