import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;
  const [notistatus, setNotistatus] = useState(true);
  const closenoti = () => {
    setNotistatus(false);
  };
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  const togglesidemenu = () => {
    setToggleSideMenu(!toggleSideMenu);
  };
  const closesidemenu = () => {
    setToggleSideMenu(false);
  };
  return (
    <div className="fixed-top">
      <div className="navbg ">
        <div className="navrow container">
          <div className="navblock">
            <NavLink className="notextdeco" to="/">
              <span className="bg-sky py-2 pe-1 rounded-pill">
                <span
                  style={{ color: "#ffffff" }}
                  className="m-0  brandName px-4 py-2 rounded-pill fw-bold"
                >
                  Logy.<span style={{ color: "#4097e4" }}>AI</span>
                </span>
              </span>
            </NavLink>
          </div>
          <div className="navblock2 text-end">
            <button
              className="togglebutton rounded-pill"
              onClick={togglesidemenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul>
              <li>
                <NavLink
                  className={`${
                    path === "/" ? "bg-lightx" : ""
                  } px-4 py-2 rounded-pill`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    path === "/about" ? "bg-lightx" : ""
                  } px-4 py-2 rounded-pill`}
                  to="/about"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${
                    path === "/products" ? "bg-lightx" : ""
                  } px-4 py-2 rounded-pill`}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {notistatus && (
        <div className="notification">
          <div className="">
            <div className="row p-0 m-0">
              <div className="col-2 newnotifybg text-center text-white">
                <span className="">
                  <i>
                    <b>NEW</b>
                  </i>
                </span>
              </div>
              <div className="col-9 p-0 ps-4 m-0">
                <div className="w-100 bar">
                  <span className="bar_content  p-0 m-0">
                    🔥🔥 Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Qui, ullam. 🔥🔥
                  </span>
                </div>
              </div>
              <div className="col-1 closebutton text-center p-0">
                <button onClick={closenoti}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {toggleSideMenu && (
        <div className="bg-white mobile-menu  text-white">
          <ul>
            <li className={`${path === "/" ? "bg-lightx" : ""}  ps-3 py-4 `}>
              <NavLink
                onClick={closesidemenu}
                className="sidemenuoptions"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li
              className={`${path === "/about" ? "bg-lightx" : ""}  ps-3 py-4`}
            >
              <NavLink
                onClick={closesidemenu}
                className="sidemenuoptions"
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li
              className={`${path === "/other" ? "bg-lightx" : ""}  ps-3 py-4`}
            >
              <NavLink
                onClick={closesidemenu}
                className="sidemenuoptions"
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
