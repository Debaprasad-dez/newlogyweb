import apacmed from "../Images/apacmed.png";
import BIRAC from "../Images/BIRAC.png";
import iigp from "../Images/iigp.png";
import iiith from "../Images/iiith.png";
import iitb from "../Images/iitb.png";
import iusstf from "../Images/iusstf.png";
import nimr from "../Images/nimr.png";
import thyrocare from "../Images/thyrocare.png";
import westminister from "../Images/westminister.png";

function Partners() {
  return (
    <div>
      <div className="footertop">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-start">
              <p className="p-0 m-0 py-4 display-6">
                Partners and collaborators who put their faith in us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-list">
        <div className="row m-0 p-0">
          <div className="col">
            <img src={apacmed} alt="" />
            <img src={BIRAC} alt="" />
            <img src={iigp} alt="" />
            <img src={iiith} alt="" />
            <img src={iitb} alt="" />
            <img src={iusstf} alt="" />
            <img src={nimr} alt="" />
            <img src={thyrocare} alt="" />
            <img src={westminister} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
