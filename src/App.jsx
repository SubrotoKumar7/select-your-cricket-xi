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
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const toggleBtn = (status) => {
    setToggle(status);
  }
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Title toggleBtn={toggleBtn} toggle={toggle}></Title>
      {
        toggle ? 
      <Suspense fallback={<div className="w-full h-screen flex justify-center items-center"><span className="loading loading-ring loading-xl"></span></div>}>
        <Available availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></Available>
      </Suspense> 
      :
      <Selected></Selected>
      }


    </>
  );
}

export default App;
