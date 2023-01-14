import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Count from "../components/Count";

export default function Transactions() {
  const [balance, setBalance] = useState("69,420");
  const [dollars, setDollars] = useState(0);
  const [cents, setCents] = useState(0);

  let money = String(balance).split(".");
  useEffect(()=>{
    if (money[0] != undefined) {
      setDollars(money[0]);
    }
    if (money[1] != undefined) {
      setCents(money[1]);
    }
  }, [money])

    return (
      <>
        <Navbar />
        <div className="flex-col">
          <div className="relative flex items-center justify-center min-h-fit">
            <img className="absolute m-10 w-72 top-10 rounded-full place-items-center outline outline-4 outline-offset-4 outline-green-600" src="../icons/pfp.jpg" />    
          </div>
          <div className="flex items-center justify-center min-h-fit mt-80">
            <div className="p-10 px-20 rounded-lg bg-green-600 text-center text-white">
              <p className="stat-title pt-5 text-5xl text-white">Available Balance</p>
              <p className="stat-value pt-2 text-9xl text-white">${balance}</p>
              <p className="stat-desc pt-3 text-2xl text-white">21% more than last month</p>
              <div className="stat-actions">
                <button className="btn btn-sm">Withdrawal</button> 
                <button className="btn btn-sm">deposit</button>
              </div>
            </div>  
          </div>
        </div>
      </>
    );
}
  