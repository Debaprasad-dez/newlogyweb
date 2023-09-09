import { Link } from "react-router-dom";
import eyeicon from "../Images/eyeicon.svg";
import oralicon from "../Images/oralIcon.svg";

function OurServices() {
  return (
    <div className="article text-start">
      <div className="container">
        <div className="solutiondiv">
          <p className="display-4 fw-bold  mx-auto servingclientext">
            Our <span className="">Solutions</span>
          </p>
          <div className="row solutionrow">
            <div className="col-md-7 pe-1">
              <div className="row solutiondivleft">
                <div className="col-md-6">
                  <div>
                    <div className="bg-lightblue service1">
                      <img src={eyeicon} alt="" />
                    </div>
                    <div className="row px-4">
                      <span className="btn btngrad  mx-auto" href="">
                        Eye Screening module
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <div className="bg-lightblue service1">
                      <img src={oralicon} alt="" />
                    </div>
                    <div className="row px-4">
                      <span className="btn btngrad  mx-auto" href="">
                        Oral Screening Module
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="solutionright">
                <div className="px-5">
                  <p className="">
                    Our company offers a cutting-edge solution in the form of a
                    Software as a Medical Device (SAMD) AI tool that enables
                    healthcare providers to rapidly assess various conditions,
                    with a current focus on eye and oral diseases.
                  </p>
                  <br />
                  <Link to="/products" className="btn px-4">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
