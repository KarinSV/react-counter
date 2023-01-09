import { useState } from "react";

function App() {

const [count, setCount] = useState(5)

const minus = () => {
  setCount(count - 1)
};

const plus = () => {
  setCount(count + 1)
};

  return (
    <div className="App">
      <button onClick={minus}>Minus</button>
      {count}
      <button onClick={plus}>Plus</button>
    </div>
  );
}

export default App;
