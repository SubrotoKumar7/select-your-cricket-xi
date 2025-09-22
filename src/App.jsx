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

function App() {
  const playersPromise = fetchPlayers();
  const [toggle, setToggle] = useState(true);
  const toggleBtn = (status) => {
    setToggle(status);
  }
  return (
    <>
      <Navbar></Navbar>
      <Title toggleBtn={toggleBtn} toggle={toggle}></Title>
      {
        toggle ? 
      <Suspense fallback={<div className="w-full h-screen flex justify-center items-center"><span className="loading loading-ring loading-xl"></span></div>}>
        <Available playersPromise={playersPromise}></Available>
      </Suspense> 
      :
      <Selected></Selected>
      }


    </>
  );
}

export default App;
