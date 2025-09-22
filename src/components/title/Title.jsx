const Title = ({toggleBtn, toggle}) => {
    return (
        <div className="w-11/12 mx-auto flex justify-between items-center">
            <h1 className="font-bold">{toggle ? "Available Players" : "Selected Players"}</h1>
            <div className="flex">
                <button className={` ${toggle ? "bg-[#E7FE29]" : "" } cursor-pointer font-medium py-2 px-3 border border-gray-400 border-r-0 rounded-l-2xl`} onClick={()=> toggleBtn(true)}>Available</button>
                <button className={` ${toggle ? "" : "bg-[#E7FE29]"} cursor-pointer py-2 px-3 border border-gray-400 border-l-0 rounded-r-2xl`} onClick={()=> toggleBtn(false)}>Selected (0)</button>
            </div>
        </div>
    );
};

export default Title;