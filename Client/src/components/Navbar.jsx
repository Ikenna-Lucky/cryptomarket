import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import { coinContext } from "../context/coinContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
    <div className="flex items-center justify-between py-5 px-[5%] border-b border-[#3c3c3c] lg:px-[8%]">
      <img
        onClick={() => navigate("/")}
        src={logo}
        className="w-[max(12vw,120px)]"
        alt=""
      />
      <ul className="sm:flex lg:gap-10 sm:gap-5 hidden">
        <NavLink>
          <li className="cursor-pointer">Home</li>
        </NavLink>
        <NavLink>
          <li className="cursor-pointer">Features</li>
        </NavLink>
        <NavLink>
          <li className="cursor-pointer">Pricing</li>
        </NavLink>
        <NavLink>
          <li className="cursor-pointer">Blog</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-5 max-[376px]:gap-2.5">
        <select
          onChange={currencyHandler}
          className="py-1.5 border-2 border-[#333] text-[#333] outline-0 rounded sm:px-4 lg:px-7 max-[375px]:text-[11px]"
          name=""
          id=""
        >
          <option className="bg-[#333] text-white hover:bg-[#666]" value="usd">
            USD
          </option>
          <option className="bg-[#333] text-white hover:bg-[#666]" value="eur">
            EUR
          </option>
          <option className="bg-[#333] text-white hover:bg-[#666]" value="inr">
            INR
          </option>
        </select>
        <button className="flex items-center gap-2.5 py-1.5 px-2 rounded-full text-sm font-medium bg-[#333] text-white border-0 cursor-pointer sm:px-4 sm:py-2.5 lg:px-6 max-[375px]:text-[12px]">
          Sign Up <img src={arrow_icon} alt="" width={13} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
