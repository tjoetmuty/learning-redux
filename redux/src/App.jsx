import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const { name } = useSelector((state) => state.counter);
  return (
    <>
      <Counter />
      <div>counter value: {name}</div>
    </>
  );
}

export default App;
