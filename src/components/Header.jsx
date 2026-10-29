import "./Header.css";

function Header() {
  return (
    <header className="top-header">
      <div className="header-container">
        <div className="left">
          📞 +91 9876543210 &nbsp; | &nbsp;
          ✉️ info.pvvs@gmail.com
        </div>

        <div className="right">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </header>
  );
}

export default Header;