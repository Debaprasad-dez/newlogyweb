import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;
  const [notistatus, setNotistatus] = useState(true);
  const closenoti = () => {
    console.log("closed noti");
    setNotistatus(false);
  };
  return (
    <div className="fixed-top">
      <div className="navbg ">
        <div className="navrow container">
          <div className="navblock">
            <span className="bg-sky py-2 pe-1 rounded-pill">
              <span className="m-0  brandName px-4 py-2 rounded-pill fw-bold">
                LOGY.AI
              </span>
            </span>
          </div>
          <div className="navblock2 text-end">
            <button className="togglebutton rounded-pill">
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

              <li></li>
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, ullam.
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
    </div>
  );
}

export default Navbar;
