import { useOrderContext } from "../../context/useOrderContext";

export default function Options({ name, imgPath }) {
  const { optionCounts, countHandler } = useOrderContext();
  return (
    <>
      <img src={imgPath} alt={`${name} scoop`} />
      <div>Scoops Total $ {(optionCounts["scoops"].count || 0) * 2}.00</div>
      <input
        type="number"
        defaultValue={0}
        onChange={(e) => countHandler("scoops", "count", e.target.value)}
      />
    </>
  );
}
