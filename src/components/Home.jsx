import { useState } from "react";

export default function Home() {
  const [butt, setButt] = useState(false);
  const btn = () => {
    setButt(!butt);
  };
  return (
    <div>
      <h1>How are you doing today?</h1>
      <button onClick={btn}> {butt ? "Hello" : "Welcome"} </button>
    </div>
  );
}
