import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Belajar React Redux</h1>
      <p>Ikhwan Studio</p>

      <br />

      <h3>Counter: {counter}</h3>

      <div className="tombol">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <br />
      <br />

      <p>
        User dalam keadaan{" "}
        <strong>{isLogged ? "Sudah Login" : "Belum Login"}</strong>
      </p>
      <br />
      <button onClick={() => dispatch(signIn())}>
        {isLogged ? "Keluar" : "Masuk"}
      </button>
    </div>
  );
}

export default App;