import { Suspense, useState } from "react";
import "./App.css";
import Available from "./components/available/Available";
import Navbar from "./components/navbar/Navbar";
import Selected from "./components/selected/Selected";
import Title from "./components/title/Title";

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(20000000);
  const toggleBtn = (status) => {
    setToggle(status);
  }

  const [buyPlayers, setBuyPlayers] = useState([]);


  const removePlayers = (ply) => {
    const filtered = buyPlayers.filter(p => p.name !== ply.name);
    setBuyPlayers(filtered);
    setAvailableBalance(availableBalance + ply.price);
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Title buyPlayers={buyPlayers} toggleBtn={toggleBtn} toggle={toggle}></Title>
      {
        toggle ? 
      <Suspense fallback={<div className="w-full h-screen flex justify-center items-center"><span className="loading loading-ring loading-xl"></span></div>}>
        <Available buyPlayers={buyPlayers} setBuyPlayers={setBuyPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></Available>
      </Suspense> 
      :
      <Selected removePlayers={removePlayers} buyPlayers={buyPlayers}></Selected>
      }


    </>
  );
}

export default App;
