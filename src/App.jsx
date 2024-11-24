import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use Routes instead of Router
import Home from "./Components/Home";
import BookingPage from "./Pages/BookingPage";
import Footer from "./Components/Footer";
import AOS from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booktrip" element={<BookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
