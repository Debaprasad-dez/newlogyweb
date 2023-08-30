import Mobilemock from "./Mobilemock";
function HomeCarousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-slide bg-white"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner bg-grad">
        <div
          className="carousel-item  active"
          id="carouselImg1"
          data-bs-interval="4000"
        >
          <div className="container">
            <div className="row containerx">
              <div className="col-md-3 ">
                <Mobilemock />
              </div>
              <div className="col-md-9 ">
                <div className="container pe-0">
                  <div className="display-5 uptext text-start  px-4 pb-4">
                    First-Level Health Checks & Care-Coordination, Made Easy
                    with AI
                  </div>
                  <div className="w-100 p- bg-dark">
                    <div className="bg-warning whitemovingbox bg-white"></div>
                  </div>
                  <p className="undertext text-start py-3 mb-0">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          id="carouselImg2"
          data-bs-interval="4000"
        >
          <div className="container">
            <div className="row containerx">
              <div className="col-md-3 ">
                <Mobilemock />
              </div>
              <div className="col-md-9 ">
                <div className="container pe-0">
                  <div className="display-5 uptext text-start  px-4 pb-4">
                    First-Level Health Checks & Care-Coordination, Made Easy
                    with AI
                  </div>
                  <div className="w-100 p- bg-dark">
                    <div className="bg-warning whitemovingbox bg-white"></div>
                  </div>
                  <p className="undertext text-start py-3 mb-0">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item "
          id="carouselImg3"
          data-bs-interval="4000"
        >
          <div className="container">
            <div className="row containerx">
              <div className="col-md-3 ">
                <Mobilemock />
              </div>
              <div className="col-md-9 ">
                <div className="container pe-0">
                  <div className="display-5 uptext text-start  px-4 pb-4">
                    First-Level Health Checks & Care-Coordination, Made Easy
                    with AI
                  </div>
                  <div className="w-100 p- bg-dark">
                    <div className="bg-warning whitemovingbox bg-white"></div>
                  </div>
                  <p className="undertext text-start py-3 mb-0">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev opacity-0"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon invisible"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next opacity-0"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon invisible"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
