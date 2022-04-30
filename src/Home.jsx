import React, { useState } from "react";
import { useDispatch } from "react-redux";
//using useState
const Home = () => {
  const [change, setChange] = useState(0);
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: Number(change),
    });
  };
  console.log(typeof change);
  return (
    <div className="conatiner">
      <button onClick={addBtn}>Incremenet</button>
      <button onClick={subBtn}>Decremenet</button>
      <input onChange={(e) => setChange(e.target.value)} />
      <button onClick={addBtn25}>Add</button>
    </div>
  );
};

export default Home;
