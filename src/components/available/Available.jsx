import { use } from "react";
import Card from "../card/Card";

const Available = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {
        playersData.map((player, index) => <Card key={index} player={player}></Card>)
      }

    </div>
  );
};

export default Available;
