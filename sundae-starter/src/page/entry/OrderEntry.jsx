import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderEntry() {
  const [list, setList] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    const test = async () => {
      await axios
        .get(`http://localhost:3030/scoops`)
        .then((item) => setList(item.data))
        .catch((err) => {
          setError(err);
        });
    };

    test();
  }, []);
  return <>{err && <div role="alert">error!</div>}</>;
}
