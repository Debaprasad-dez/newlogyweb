import { Link } from "react-router-dom";

function GetTouchFloater() {
  return (
    <Link to="/contact">
      <div className="getInTouch rounded-pill">
        <div className="touchtext">Get in Touch</div>
        <div className="circleOut">
          <div className="circleIn"></div>
        </div>
      </div>
    </Link>
  );
}

export default GetTouchFloater;
