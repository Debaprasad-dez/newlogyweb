import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;
  return (
    <div className="navbg fixed-top">
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
  );
}

export default Navbar;
