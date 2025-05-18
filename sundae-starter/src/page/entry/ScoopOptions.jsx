import axios from "axios";
import { useEffect, useState } from "react";
import OptionItem from "./Options";

export default function ScoopOptions() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const test = async () => {
      await axios
        .get(`http://localhost:3030/scoops`)
        .then((item) => setItems(item.data))
        .catch((err) => {
          console.log(err);
        });
    };

    test();
  }, []);

  console.log(items);

  return (
    <>
      {items.map((e, idx) => (
        <OptionItem key={idx} name={e.name} imgPath={e.imagePath} />
      ))}
    </>
  );
}
