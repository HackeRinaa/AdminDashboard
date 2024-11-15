import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/user.png" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar