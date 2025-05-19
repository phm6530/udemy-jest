import axios from "axios";
import { useEffect, useState } from "react";
import { useOrderContext } from "../../context/useOrderContext";

export default function ToppingOption() {
  const { optionCounts, countHandlern } = useOrderContext();
  const [list, setList] = useState([]);

  useEffect(() => {
    const test = async () => {
      await axios
        .get(`http://localhost:3030/toppings`)
        .then((item) => setList(item.data))
        .catch((err) => {
          console.log(err);
        });
    };
    test();
  }, []);

  return (
    <>
      <div>Scoops Total $ {(optionCounts["scoops"].val ?? 0) * 2}.00</div>
      <div data-testid="test">
        {list.map((item, idx) => {
          return <div key={idx}>{item.name}</div>;
        })}
      </div>
    </>
  );
}
