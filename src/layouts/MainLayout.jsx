import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
