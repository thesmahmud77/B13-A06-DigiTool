import React from "react";
import { createBrowserRouter } from "react-router";
import HomepageLayout from "../Pages/Homepage/HomepageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout></HomepageLayout>,
  },
]);
