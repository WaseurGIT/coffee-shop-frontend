import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
