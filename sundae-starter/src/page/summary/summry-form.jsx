import { useState } from "react";

export default function SummryForm() {
  const [agree, setAgree] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        <input
          type="checkbox"
          name="agree"
          onChange={(e) => {
            setAgree(e.target.checked ? true : false);
          }}
        />
        I agree to
      </label>
      <button name="formSubmit" disabled={!agree}>
        confirm
      </button>
    </div>
  );
}
