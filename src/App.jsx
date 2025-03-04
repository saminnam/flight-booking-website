import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import GoTopBtn from "./Components/GoTopBtn";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import TourPage from "./Pages/TourPage/TourPage";
import PackagePage from "./Pages/PackagePage/PackagePage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <GoTopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/package" element={<PackagePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
