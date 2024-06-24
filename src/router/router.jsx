import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Layout from "../components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
