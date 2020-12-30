import "./header.style.scss";

const Header = () => {
  return (
    <div className="header" data-test="header">
      <div className="wrapper">
        <div className="logo" data-test="logo">
          LOGO
        </div>
      </div>
    </div>
  )
}

export default Header;