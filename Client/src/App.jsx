import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen text-[#333] bg-[linear-gradient(#FFFFFF,#F8F8F8,#F0F0F0)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
