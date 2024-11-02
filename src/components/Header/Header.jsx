import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Header() {



  return (
    <>
      <div className="header">
        <Link to="/"> <img
          src={Logo}
          alt="header-logo"
          className="header__logo"
         
        /> </Link> 
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
          
          <Link to="/upload" className="header__upload">  Upload
          </Link> 
          <div className="header__avatar"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
