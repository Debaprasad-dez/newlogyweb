function MultiItem() {
  return (
    <div className="multiItemSlider">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" id="carInd">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner bg-white">
          <div
            className="carousel-item active m-0 p-0"
            data-bs-interval="10000"
          >
            <div className="row m-0 p-0">
              <div className="col-sm-6 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      The Community Health Center (CHC) in Madhya Pradesh, India
                      ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-4 m-0 p-0">
              <div className="card">
                <div className="card-body">
                  <button id="btn">CASE STUDY</button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p className="card-text w-75 h5">
                    A hospital in Himachal Pradesh, India, was planning an eye
                    screening ...
                  </p>
                  <br />
                  <a href="#" className="btn btn-primary">
                    READ NOW
                  </a>
                </div>
              </div>
            </div> */}
            </div>
          </div>
          {/* <div className="carousel-item" data-bs-interval="2000">
            <div className="row m-0 p-0">
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="carousel-item">
            <div className="row m-0 p-0">
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0 p-0">
                <div className="card">
                  <div className="card-body">
                    <button id="btn">CASE STUDY</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="card-text w-75 h5">
                      A hospital in Himachal Pradesh, India, was planning an eye
                      screening ...
                    </p>
                    <br />
                    <a href="#" className="btn btn-primary">
                      READ NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MultiItem;
