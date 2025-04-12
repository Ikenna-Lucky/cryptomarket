import React, { useContext } from "react";
import logo from "../../src/assets/logo.png";
import arrow_icon from "../assets/arrow_icon.png";
import { coinContext } from "../context/coinContext";

const Navbar = () => {
//   const { setCurrency } = useContext(coinContext);
  const currencyHandler = () => {};
  return (
    <div className="flex items-center justify-between py-5 px-[10%] text-[#ddd] border-b-2 border-[#3c3c3c]">
      <img src={logo} className="w-[max(12vw,120px)]" alt="" />
      <ul className="flex gap-10 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-5">
        <select
          className="py-1.5 border-2 border-white text-white outline-0 px-7 rounded"
          name=""
          id=""
        >
          <option className="bg-[#09005c] text-white" value="usd">
            USD
          </option>
          <option className="bg-[#09005c] text-white" value="eur">
            EUR
          </option>
          <option className="bg-[#09005c] text-white" value="inr">
            INR
          </option>
        </select>
        <button className="flex items-center gap-2.5 px-6 py-2.5 rounded-2xl text-sm font-medium text-[#393939] bg-white border-0 cursor-pointer">
          Sign Up <img src={arrow_icon} alt="" width={13} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
