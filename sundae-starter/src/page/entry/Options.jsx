export default function Options({ name, imgPath }) {
  return (
    <>
      <img src={imgPath} alt={`${name} scoop`} />
    </>
  );
}
