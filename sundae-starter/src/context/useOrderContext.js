import { useContext } from "react";
import { MyContext } from "./order-provider";

export function useOrderContext() {
  const contextValue = useContext(MyContext);
  if (!contextValue) {
    throw new Error("Context Error");
  }
  return contextValue;
}
