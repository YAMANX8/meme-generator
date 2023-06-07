import logo from "/logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <h2 className="header_title">meme generator</h2>
      <h3 className="header_project">React course - project 2</h3>
    </header>
  );
};

export default Header;
