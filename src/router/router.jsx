import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Layout from "../components/layout/layout";
import SignIn from "../pages/sign-in/sign-in";
import User from "../pages/user/user";

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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/user",
        element: <User />
      }
    ],
  },
]);
