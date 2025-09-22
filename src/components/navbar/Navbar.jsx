import logoImg from '../../assets/logo.png';
import coinImg from '../../assets/Currency.png';

const Navbar = ({availableBalance}) => {
  return (
      <div className="w-11/12 mx-auto navbar">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={logoImg} alt="logo" />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span>{availableBalance}</span>
          <span>coin</span>
          <img src={coinImg} alt="coin" />
        </div>
      </div>
  );
};

export default Navbar;
