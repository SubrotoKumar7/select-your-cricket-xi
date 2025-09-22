import deleteIcon from '../../assets/delete.png';
const Buy = ({player, removePlayers}) => {
    const handleRemove = () => {
        removePlayers(player);
    }
    return (
        <div className='flex justify-between items-center p-4 border border-gray-500 rounded-lg my-4'>
            <div>
                <div className='flex gap-2 items-center'>
                    <img className='w-15 rounded' src={player.player_image} alt={`{player.name} image`} />
                    <div>
                        <h2 className='font-bold'>{player.name}</h2>
                        <p className='text-gray-500'>{player.playing_role}</p>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer' onClick={handleRemove}>
                <img src={deleteIcon} alt="icon" />
            </div>
        </div>
    );
};

export default Buy;