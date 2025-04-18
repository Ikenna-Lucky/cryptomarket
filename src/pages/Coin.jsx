import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { coinContext } from "../context/coinContext";
import LineChart from "../components/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency, secretKey } = useContext(coinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": secretKey,
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": secretKey,
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="py-5 lg:px-[8%] flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center lg:gap-10 mx-auto my-[100px] mb-[50px]">
          <img className="max-w-[100px]" src={coinData.image.large} alt="" />
          <p>
            <b className=" text-4xl font-medium">
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="max-sm:w-[300px] md:w-[600px] lg:w-[800px] mx-auto h-64 lg:h-96">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="flex flex-col my-32 mx-auto w-[600px] max-sm:w-[300px] md:w-[600px] lg:w-[800px] justify-between">
          <ul className="flex justify-between py-2.5 border-b border-[#5f5d5f]">
            <li>Crypto Market Rank</li>
            <li className="font-light">{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex justify-between py-2.5 border-b border-[#5f5d5f]">
            <li>Current Price</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul className="flex gap-10 justify-between py-2.5 border-b border-[#5f5d5f]">
            <li>Market Cap</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul className="flex justify-between py-2.5 border-b border-[#5f5d5f]">
            <li>24 Hour High</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul className="flex justify-between py-2.5 border-b border-[#5f5d5f]">
            <li>24 Hour Low</li>
            <li className="font-light">
              {currency.symbol}{" "}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid place-self-center min-h-[80vh] ">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white m-auto"></div>
      </div>
    );
  }
};

export default Coin;
