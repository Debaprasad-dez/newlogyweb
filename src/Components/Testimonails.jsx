import leftgo from "../Images/leftgo.svg";
import rightgo from "../Images/rightgo.svg";
import quoteicon from "../Images/quoteicon.svg";

function Testimonails() {
  return (
    <div>
      <div className="footertop">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-start">
              <p className="p-0 m-0 py-4 display-6">Hear from our clients</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="testimonial">
          <div
            className="carousel-item  active"
            id="carouselImg11"
            data-bs-interval="3000"
          >
            <div className="container">
              <div className="col-9 text-start p-3  testi-content">
                <div className="d-md-flex justify-content-start">
                  <div className="">
                    <div className="testi-img"></div>
                  </div>
                  <div className="p-4 text-start testitextresp">
                    <br />
                    <img className="quoteicon mb-2" src={quoteicon} alt="" />
                    <h2 className="fw-lighter">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In animi architecto enim reprehenderit quasi rem.
                    </h2>
                    <h3 className="mb-1">Firstname surname</h3>
                    <h4 className="p-0 m-0 fw-normal">Designation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item"
            id="carouselImg22"
            data-bs-interval="3000"
          >
            <div className="container">
              <div className="col-9 text-start p-3  testi-content">
                <div className="d-md-flex justify-content-start">
                  <div className="">
                    <div className="testi-img"></div>
                  </div>
                  <div className="p-4 text-start testitextresp">
                    <br />
                    <img className="quoteicon mb-2" src={quoteicon} alt="" />
                    <h2 className="fw-lighter">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In animi architecto enim reprehenderit quasi rem.
                    </h2>
                    <h3 className="mb-1">Firstname surname</h3>
                    <h4 className="p-0 m-0 fw-normal">Designation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item "
            id="carouselImg33"
            data-bs-interval="3000"
          >
            <div className="container">
              <div className="col-9 text-start p-3  testi-content">
                <div className="d-md-flex justify-content-start">
                  <div className="">
                    <div className="testi-img"></div>
                  </div>
                  <div className="p-4 text-start testitextresp">
                    <br />
                    <img className="quoteicon mb-2" src={quoteicon} alt="" />
                    <h2 className="fw-lighter">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      In animi architecto enim reprehenderit quasi rem.
                    </h2>
                    <h4 className="mb-1">Firstname surname</h4>
                    <h5 className="p-0 m-0 fw-normal">Designation</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="directionguiderleft"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <img src={leftgo} alt="" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="directionguiderright"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <img src={rightgo} alt="" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonails;
