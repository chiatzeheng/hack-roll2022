import React, { useState, useEffect } from "react";

export default function count({ string, money, duration }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(money.substring(0, 3));
      if (start === end) return;
  
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur/end)*1000;
  
      let timer = setInterval(() => {
        console.log(start)
        start += 1;
        setCount(String(start) + money.substring(3));
        if (start === end) clearInterval(timer);
      }, incrementTime);
  
    }, [money, duration]);
  
    return(
      <div className="count">
        {string}{count}
      </div>
    );
  }