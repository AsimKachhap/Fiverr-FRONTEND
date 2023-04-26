import { FunctionComponent, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1234,
    userName: "Asim Kachhap",
    isSeller: true,
  };

  return (
    <div className={active || pathname != "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div onClick={() => setOpen(!open)} className="user">
              <img
                src="https://asimkachhap.com/static/media/heroImage.33be94ca0c4a5acfdaac.png"
                alt=""
              />
              <span>{currentUser?.userName}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/gigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
          <button>Join</button>
        </div>
      </div>
      {(active || pathname != "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Test 1</span>
            <span>Test 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
