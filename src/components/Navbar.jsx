import React, { useContext } from "react";
import logo from "../../src/assets/logo.png";
import arrow_icon from "../assets/arrow_icon.png";
import { coinContext } from "../context/coinContext";

const Navbar = () => {
  const { setCurrency } = useContext(coinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default:
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
    }
  };
  return (
    <div className="flex items-center justify-between py-5 px-[5%] text-[#ddd] border-b-2 border-[#3c3c3c] lg:px-[8%]">
      <img src={logo} className="w-[max(12vw,120px)]" alt="" />
      <ul className="sm:flex lg:gap-10 sm:gap-5 hidden">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <div className="flex items-center gap-5">
        <select
          onChange={currencyHandler}
          className="hidden py-1.5 border-2 border-white text-white outline-0 rounded sm:px-4 lg:px-7 sm:block"
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
        <button className="flex items-center gap-2.5 py-1.5 px-2 rounded text-sm font-medium text-[#393939] bg-white border-0 cursor-pointer sm:px-4 sm:py-2.5 lg:px-6">
          Sign Up <img src={arrow_icon} alt="" width={13} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
