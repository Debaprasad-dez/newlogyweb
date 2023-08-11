function Navbar() {
  return (
    <div className="navbg fixed-top">
      <div className="navrow container">
        <div className="navblock">
          <span className="m-0 p-0 brandName px-4 py-2 rounded-pill">
            LOGY.AI
          </span>
        </div>
        <div className="navblock2 text-end">
          <button className="togglebutton rounded-pill">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
