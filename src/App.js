import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [a, seta] = useState(0);
  const handleincrement = () => {
    seta(a + 1);
    console.log(a);
  };

  const handledecrement = () => {
    seta(a - 1);
    console.log(a);
  };

  return (
    <div>
      <button className="increment" onClick={handleincrement}>
        +
      </button>
      console.log("Hi");
      <textarea name="" id="" cols="30" rows="10" readOnly value={a}>
        {a}
      </textarea>
      <button className="decrement" onClick={handledecrement}>
        -
      </button>
    </div>
  );
}

export default App;
