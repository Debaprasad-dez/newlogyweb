import eyeicon from "../../Images/eyeicon.svg";
import oralicon from "../../Images/oralIcon.svg";

function ProductDisplay() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="">
          <div className="solutionright">
            <div className="px-5">
              <p className="solutionpagepara">
                Our company offers a cutting-edge solution in the form of a
                <b> Software as a Medical Device (SAMD)</b> AI tool that enables
                healthcare providers to rapidly assess various conditions, with
                a current focus on eye and oral diseases.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-8 mx-auto pe-1">
          <div className="row solutiondivleft m-0">
            <div className="col-md-6 ps-0">
              <div className="p-3 pb-0">
                <div className=" service2">
                  <img src={eyeicon} className="eye-oral-icon-page" alt="" />
                </div>
                <span className="btn btngrad1  mx-auto" href="">
                  Eye Screening module
                </span>
              </div>
              <div className="p-3">
                <div className="mt-3 text-center ">
                  <h3 className="p-0 m-0">
                    <i class="fa-solid fa-star fa-beat-fade "></i> Features
                  </h3>
                </div>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, minus rerum. Ipsam.
                </span>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>Lorem ipsum dolor sit.</span>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="pageFeatures m-2 mb-0 p-3">
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                  impedit aliquid maiores temporibus fugit officiis.
                </span>
              </div>
              <div className="m-2 mt-0 bg-dark p-3 text-center">
                <a href="" className="btn px-5">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-md-6 ps-0">
              <div className="p-3 pb-0">
                <div className=" service2">
                  <img src={oralicon} className="eye-oral-icon-page" alt="" />
                </div>
                <span className="btn btngrad1  mx-auto" href="">
                  Oral Screening Module
                </span>
              </div>
              <div className="p-3">
                <div className="mt-3 text-center">
                  <h3 className="p-0 m-0">
                    <i class="fa-solid fa-star fa-beat-fade "></i> Features
                  </h3>
                </div>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, minus rerum. Ipsam.
                </span>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>Lorem ipsum dolor sit.</span>
              </div>
              <div className="pageFeatures m-2 p-3">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <div className="pageFeatures m-2 mb-0 p-3">
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                  impedit aliquid maiores temporibus fugit officiis.
                </span>
              </div>
              <div className="m-2 mt-0 bg-dark p-3 text-center">
                <a href="" className="btn px-5">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
