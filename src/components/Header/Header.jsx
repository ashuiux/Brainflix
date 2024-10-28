import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";

function Header() {
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
          <input type="button" value="upload" className="header__upload" />
          <div className="header__avatar"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
