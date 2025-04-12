import { createContext, useEffect, useState } from "react";

const coinContext = createContext();
const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-fctJMB3Po1s28N3K5rQaLJcc",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    setAllCoin,
    currency,
    setCurrency,
    fetchAllCoin,
  };
  return (
    <coinContext.Provider value={contextValue}>
      {props.children}
    </coinContext.Provider>
  );
};

export { coinContext, CoinContextProvider };
