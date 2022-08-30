import { useState } from "react";
import "./App.css";
import LampadaContainer from "./components/LampadaContainer/LampadaContainer";

function App() {
  const [pageState, changeState] = useState(false);

  return (
    <div className={`centro ${pageState ? "ligado" : "desligado"}`}>
      <LampadaContainer lampadaState={[pageState, changeState]} ></LampadaContainer>
    </div>
  );
}

export default App;
