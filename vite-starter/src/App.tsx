import { useState } from "react";
import { cn } from "./util/cn";

function App() {
  const [btnColor, setBtnColor] = useState(true);
  const [isChk, setIsChk] = useState<boolean>(false);
  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>

      <button
        className={cn(
          btnColor ? "bg-red-500" : "bg-blue-500",
          isChk && "bg-zinc-900"
        )}
        onClick={() => setBtnColor((prev) => !prev)}
        disabled={isChk}
      >
        Change to {btnColor ? "blue" : "red"}
      </button>

      <label className="cursor-pointer">
        <input
          type="checkbox"
          name="Chk"
          onChange={(e) => {
            setIsChk(e.target.checked ? true : false);
          }}
        />
        Chk
      </label>
    </div>
  );
}

export default App;
