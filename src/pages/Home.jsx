import React from "react";

const Home = () => {
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
        <form className="p-2 min-w-4/5 bg-white rounded-[5px] text-xl flex justify-between items-center gap-2.5">
          <input
            className="outline-0 flex-1 text-[16px] pl-2.5 text-[#393939]"
            type="text"
            placeholder="Search crypto..."
          />
          <button
            className="bg-[#7927ff] text-white text-[16px] py-2.5 px-8 rounded-[5px] cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="max-w-[800px] m-auto bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))] rounded-2xl">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center border-b border-[#3c3c3c]">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
