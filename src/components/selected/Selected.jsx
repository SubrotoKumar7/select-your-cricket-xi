import Buy from "../buy/Buy";

const Selected = ({buyPlayers, removePlayers}) => {
    return (
        <div className="w-11/12 mx-auto">
            {
                buyPlayers.map(
                    (player, index) => <Buy removePlayers={removePlayers} key={index} player={player}></Buy>
                )
            }
        </div>
    );
};

export default Selected;



