import React, { useState, useEffect } from "react";


import StatsRow from "./StatsRow";
import { db } from "./FireBase";


import { collection, onSnapshot } from "firebase/firestore";
import axios from "axios";

const Stats = () => {
  const getMyStocks = async (db) => {
    const stocksCol = collection(db, "myStocks");
    onSnapshot(stocksCol, (snapshot) => {
      let promises = [];
      let tempData = [];

      snapshot.docs.map((doc) => {
        promises.push(
          fetchStockData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            }); 
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const TOKEN = import.meta.env.VITE_API_KEY;
  const BASE_URL = `https://finnhub.io/api/v1/quote`;
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const fetchStockData = async (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const pushData = async () => {
    let res = null;
    let tempStockData = [];
    const stockList = [
      "AAPL",
      "GOOGL",
      "TSLA",
      "AMZN",
      "MSFT",
      "UBER",
      "DIS",
      "SBUX",
    ];
    stockList.map(async (stock) => {
      res = await fetchStockData(stock);
      tempStockData.push({
        name: stock,
        ...res.data,
      });
    });
    setTimeout(() => {
      setStockData(tempStockData);
    }, 2000);
  };

  useEffect(() => {
    pushData();
    getMyStocks(db);
  }, []);

  return (
    <div className="stats py-7 pb-7 flex-[0.3] flex-col text-white ">
      <div className="stats__container flex-col flex-1 rounded border border-[#42494D] bg-[#1E2023] ">
        <div className="stats__header  flex text-base items-center justify-between border-b border-[#42494D] px-5 pt-5 pb-2 font-medium ">
          <p className="text-xl">
            Shares <span className="text-[gray] text-sm">(Owned)</span>{" "}
          </p>
        </div>
        <div className="stats__content">
          <div className="stats__rows py-4">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__lists border-t   flex text-base items-center justify-between border-b border-[#42494D]  px-5 pt-5 pb-2 font-medium">
          <p className="text-xl">Lists</p>
        </div>

        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
