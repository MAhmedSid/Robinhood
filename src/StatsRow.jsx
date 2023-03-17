import React from "react";
import stockImg from "./assets/stock.svg";
import stockImg2 from "./assets/stock2.svg";
import { db } from "./FireBase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc
} from "firebase/firestore";

const StatsRow = (props) => {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  // console.log(percentage);

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
          src={props.percentage > 0 ? stockImg : stockImg2}
          alt="chart"
          width={80}
          height={16}
        />
      </div>
      <div className="row__numbers text-right text-xs font-medium   ">
        <p className="row__price pb-[4px]">{props.price}</p>
        <p className="row__percentage text-[#5ac53b]">
          {percentage > 0 && "+"}
          {Number(percentage).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default StatsRow;
