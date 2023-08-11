function HomeCarousel() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item  active"
          id="carouselImg1"
          data-bs-interval="4000"
        >
          <div className="row">
            <div className="col-1">
              <div className="leftline"></div>
            </div>
            <div className="col-8">
              <div className="containerx">
                <div className="carText">
                  <div className="textBox">
                    <p className="text-start text-white">
                      First-Level Health Checks & Care-Coordination, Made Easy
                      with AI
                    </p>
                  </div>
                  <p className="undertext text-start">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rightline"></div>
            </div>
          </div>
          <div className="darkLayer"></div>
        </div>
        <div class="carousel-item" id="carouselImg2" data-bs-interval="4000">
          <div className="row">
            <div className="col-1">
              <div className="leftline"></div>
            </div>
            <div className="col-8">
              <div className="containerx">
                <div className="carText">
                  <div className="textBox">
                    <p className="text-start text-white">
                      First-Level Health Checks & Care-Coordination, Made Easy
                      with AI
                    </p>
                  </div>
                  <p className="undertext text-start">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rightline"></div>
            </div>
          </div>
          <div className="darkLayer"></div>
        </div>
        <div class="carousel-item " id="carouselImg3" data-bs-interval="4000">
          <div className="row">
            <div className="col-1">
              <div className="leftline"></div>
            </div>
            <div className="col-8">
              <div className="containerx">
                <div className="carText">
                  <div className="textBox">
                    <p className="text-start text-white">
                      First-Level Health Checks & Care-Coordination, Made Easy
                      with AI
                    </p>
                  </div>
                  <p className="undertext text-start">
                    Our AI-enabled digital screening front-door platform makes
                    Care-Coordination easier for businesses and hospitals.
                    Logy.AI tool leverages smartphones and WhatsApp to offer the
                    first level of health check.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rightline"></div>
            </div>
          </div>

          <div className="darkLayer"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev opacity-0"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon invisible"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next opacity-0"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon invisible"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
