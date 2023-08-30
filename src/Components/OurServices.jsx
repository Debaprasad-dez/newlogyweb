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
                    <br />
                    <span className="btn btngrad px-4" href="">
                      Eye Screening module
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <div className="bg-lightblue service1">
                      <img src={oralicon} alt="" />
                    </div>
                    <br />
                    <a className="btn btngrad px-4" href="">
                      Oral Screening module
                    </a>
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
                  <a href="" className="btn px-4">
                    LEARN MORE
                  </a>
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
