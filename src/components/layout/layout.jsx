import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}
