import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

const App = () => {
  return (
    <div className="min-h-screen text-white bg-[linear-gradient(#0b004e,#1d152f,#002834)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
