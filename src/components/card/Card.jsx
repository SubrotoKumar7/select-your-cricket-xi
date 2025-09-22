import React, { useState } from "react";
import groupIcon from "../../assets/Group.png";
import flagIcon from "../../assets/Vector.png";

const Card = ({ player, setAvailableBalance, availableBalance, buyPlayers, setBuyPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerInfo) => {
    if(availableBalance < playerInfo.price){
        alert("You have not enough money")
        return;
    }
    if(buyPlayers.length === 6){
      alert("You already selected 6 players")
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerInfo.price);
    setBuyPlayers([...buyPlayers, playerInfo]);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4 m-4">
        <figure>
          <img
            className="rounded-lg w-full h-[300px]"
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="my-4">
          <div className="flex items-center gap-2">
            <img className="w-5 h-5" src={groupIcon} alt="" />
            <h2 className="card-title">{player.name}</h2>
          </div>
          <div className="flex items-center justify-between my-1">
            <div className="flex items-center gap-2">
              <img src={flagIcon} alt="flag icon" />
              <span>{player.country}</span>
            </div>
            <button className="btn btn-soft">{player.playing_role}</button>
          </div>
          <div className="divider my-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-bold">Rating</p>
              <p>{player.rating}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">{player.batting_style}</p>
              <p className="font-medium">{player.bowling_style}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Price: ${player.price}</p>
              <button
                disabled={isSelected}
                onClick={() => {handleSelected(player)}}
                className="btn btn-sm"
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
