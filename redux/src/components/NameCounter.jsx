import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/slice/counterSlice";
import { useState } from "react";

const NameCounter = () => {
  const currentName = useSelector((state) => state.counter.name);
  const [nama, setNama] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    if (nama) {
      dispatch(changeName(nama)); // Dispatch action dengan nama baru
      setNama(""); // Reset input setelah submit
    }
  };
  return (
    <div>
      <div>
        <h1>{currentName}</h1>
        <div>
          <form onSubmit={handleSubmit}>
            Input:
            <input
              type="text"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
            />
            <button type="submit">Submit</button>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default NameCounter;
