import React from "react";


import stockDownImg from "./assets/stockDown.svg";
import stockUpImg from "./assets/stockUp.svg";
import { db } from "./FireBase";

import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const StatsRow = (props) => {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  const buyStock = async () => {
    const q = query(
      collection(db, "myStocks"),
      where("ticker", "==", props.name)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      //Update the record

      querySnapshot.forEach(async (document) => {
        const myStocksCol = doc(db, "myStocks", document.id);
        await updateDoc(myStocksCol, {
          shares: (document.data().shares += 1),
        });
      });
    } else {
      //Add a new record
      const docRef = await addDoc(collection(db, "myStocks"), {
        ticker: props.name,
        shares: 1,
      });
      console.log("Document written with ID: ", docRef.id);
    }
  };

  return (
    <div
      className="row hover:cursor-pointer hover:bg-[#31363A] flex justify-between h-[60px] items-center px-6"
      onClick={buyStock}
    >
      <div className="row__intro ">
        <h1 className="text-base font-bold pb-[2px] text-left">{props.name}</h1>
        <p className="text-xs ">{props.shares && props.shares + " shares"}</p>
      </div>
      <div className="row__chart px-2 ">
        <img
          src={percentage > 0 ? stockUpImg : stockDownImg}
          alt="chart"
          width={80}
          height={16}
        />
      </div>
      <div className="row__numbers text-right text-xs font-medium   ">
        <p className="row__price pb-[4px]">{props.price}/USD</p>
        <p
          className={`row__percentage ${
            percentage > 0 ? "text-[#5ac53b]" : "text-[red]"
          }`}
        >
          {percentage > 0 ? (
            <NorthIcon style={{ fontSize: "16px", paddingBottom: "4px" }} />
          ) : (
            <SouthIcon style={{ fontSize: "16px", paddingBottom: "4px" }} />
          )}
          {percentage > 0 && "+"}
          {Number(percentage).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default StatsRow;
