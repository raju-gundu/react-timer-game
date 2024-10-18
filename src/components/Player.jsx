import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const player = useRef();
  const [playerName,setPlayerName] = useState(null);
  

  function handleClick(){
    setPlayerName(player.current.value);
    player.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
