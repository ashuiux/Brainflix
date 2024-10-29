import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/upload'); 
  };
  return (
    <>
      <div className="header">
        <img src={Logo} alt="header-logo" className="header__logo" />
        <div className="header__container">
          <div className="header__search--group">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="header__search"
          />
          <div className="header__avatar header__avatar-mobile"></div>
          </div>
          <input type="button" value="upload" className="header__upload"  onClick={handleUploadClick}/>
          <div className="header__avatar"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
