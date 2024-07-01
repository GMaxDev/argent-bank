import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Layout from "../components/layout/layout";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ],
  },
]);
