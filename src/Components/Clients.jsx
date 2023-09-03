import LogoFree from "../Images/LogoFree.svg";
import cartula from "../Images/Cartula Health.png";
import kdisk from "../Images/K - DISC logo.png";
import pristyn from "../Images/Pristyn Care.webp";
import sharpsight from "../Images/sharp sight.jpg";
import colgate from "../Images/Colgate-Logo.png";
import dot from "../Images/DOT.png";
import aggarwal from "../Images/Dr. Agarwals.png";
import cdot from "../Images/cdot_logo.png";
import amtron from "../Images/AMTRON.webp";
import appolo1 from "../Images/Apollo-Clinic.png";
import appolo2 from "../Images/Apollo Dental.webp";
import appolo3 from "../Images/Apollo sugar clinic.jpg";

function Clients() {
  return (
    <div className="bg-white">
      <div className="container pb-3">
        <div className="">
          <div className="text-start">
            <p className="display-4 fw-bold  servingclientext">
              Serving clients <span className="">globally</span>
            </p>
          </div>
          <div className=" clientsmq ">
            <div className="marquee1">
              <div className="marquee--inner">
                <div className="span">
                  <div className="row m-0 p-0">
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={cartula} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={kdisk} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={pristyn} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={sharpsight} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={colgate} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={dot} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="span">
                  <div className="row m-0 p-0">
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={aggarwal} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={cdot} className="w-50 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={amtron} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={appolo1} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={appolo2} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                    <div className="col p-0">
                      <div className="client-box1 bg-white ">
                        <img src={appolo3} className="w-75 mx-auto" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
