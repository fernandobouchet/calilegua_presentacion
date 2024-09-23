import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-[100dvh] flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
