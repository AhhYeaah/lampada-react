import { useEffect, useState } from "react";
import Lampada from "./components/Lampada/Lampada";
import "./style.css";

type props = { lampadaState: [boolean, Function] };

function LampadaContainer(props: props) {
  const lampadaState = props.lampadaState[0];
  const changeLampadaState = props.lampadaState[1];

  const maxDurability = 5;

  const [lampadaDurability, changeLampadaDurability] = useState(maxDurability);
  const isLampadaBroken = lampadaDurability === 0;

  function onChangeLampadaState() {
    if (lampadaDurability > 0) {
      changeLampadaState((state: boolean) => !state);
      changeLampadaDurability((value) => --value);
    }
  }

  useEffect(() => {
    if(isLampadaBroken){
      changeLampadaState(() => false);
    }
    
    const timer = setInterval(() => {
      if (lampadaDurability < maxDurability && !isLampadaBroken) {
        changeLampadaDurability((value: number) => ++value);
      }
    }, 1000)

    return ()=>clearInterval(timer);
  }, [lampadaDurability]);

  return (
    <div>
      <h1>{ !isLampadaBroken ? 'Que bela lampada!' : 'Lampada :('}</h1>

      <Lampada lampadaState={lampadaState} isBroken={isLampadaBroken}></Lampada>

      <button onClick={() => onChangeLampadaState()}>Interruptor</button>

      <div>
        <h2>{ !isLampadaBroken ? 'Mas vai com calma' : 'Eu avisei'}</h2>
        <h2>{lampadaDurability}</h2>  
      </div>
    </div>
  );
}

export default LampadaContainer;
