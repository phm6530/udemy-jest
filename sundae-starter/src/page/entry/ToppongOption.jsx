import axios from "axios";
import { useEffect, useState } from "react";

export default function ToppingOption() {
  const [list, setList] = useState([]);
  console.log("list", list);
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
    <div data-testid="test">
      {list.map((item, idx) => {
        return <div key={idx}>{item.name}</div>;
      })}
    </div>
  );
}
