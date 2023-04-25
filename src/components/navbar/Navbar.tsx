import { FunctionComponent, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

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
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/">
            <span className="text">fiverr</span>
          </Link> */}
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
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
          <button>Join</button>
        </div>
      </div>
      {active && (
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
