import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);
