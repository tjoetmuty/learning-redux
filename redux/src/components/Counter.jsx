import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  decrement,
  increment,
  incrementByAmount,
} from "../store/slice/counterSlice";
import { useState } from "react";

export default function Counter() {
  const { value, name } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();

  return (
    <>
      <h2>{name}</h2>
      <div>
        amount:
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(parseInt(amount)))}>
          increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(changeName())}>change name</button>
      </div>
    </>
  );
}
