import { createContext, useState } from "react";

export const MyContext = createContext();

export function OrderProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: { count: 0 },
    toppings: { count: 0 },
  });

  const countHandler = (itemName, optionName, newCnt) => {
    const scopeCounts = { ...optionCounts };

    // 새로운값
    scopeCounts[itemName][optionName] = newCnt;

    setOptionCounts(scopeCounts);
  };

  // 메소드 + 값 공급
  const value = { optionCounts, countHandler };
  return <MyContext.Provider value={value} {...props}></MyContext.Provider>;
}
