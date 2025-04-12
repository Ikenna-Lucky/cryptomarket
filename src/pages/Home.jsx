import React, { useContext, useEffect, useState } from "react";
import { coinContext } from "../context/coinContext";

const Home = () => {
  const { allCoin, currency } = useContext(coinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="px-2.5 pb-[100px]">
      <div className="max-w-[600px] mx-auto my-20 flex flex-col items-center text-center gap-7">
        <h1 className="text-[max(4vw,36px)] font-semibold">
          Largest <br /> crypto Market Place
        </h1>
        <p className="w-3/4 text-[#e3e3e3] text-base">
          Welcome to the world's Largest cryptocurrency marketplaces. Sign up to
          explore more about cryptos.
        </p>
        <form className="p-2 min-w-4/5 bg-white rounded-[5px] text-xl flex justify-between items-center sm:gap-2.5 ">
          <input
            className="outline-0 flex-1 text-[16px] pl-2.5 text-[#393939]"
            type="text"
            placeholder="Search crypto..."
          />
          <button
            className="bg-[#7927ff] text-white text-[16px] py-2.5 px-2 sm:px-8 rounded-[5px] cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full sm:max-w-[800px] m-auto bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))] rounded-2xl overflow-hidden overflow-x-scroll">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center border-b border-[#3c3c3c]">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center border-b border-[#3c3c3c] nth-last-[1]:border-0"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex  items-center gap-2.5">
              <img width={35} src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0
                  ? "text-green-500 text-center"
                  : "text-red-700 text-center"
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="text-right">
              {currency.symbol} {""}
              {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
