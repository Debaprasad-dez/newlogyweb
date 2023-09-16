import patent from "../Images/patent.png";

function Patents() {
  return (
    <div className="bg-white pt-4 pb-5">
      <div className="container">
        <div className=" ">
          <div className="text-start">
            <p className="display-4 fw-bold servingclientext">
              Key <span className="">Patents</span>
            </p>
          </div>
          <div className="row">
            <div className="col-md-7 pe-4">
              <div className="patentcard bg-grad">
                <div className="patentimg">
                  <img src={patent} className="w-50" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="solutionright text-start">
                <div className="px-5">
                  <p className="display-6 patentText">
                    SYSTEM FOR ORAL SCREENING AND ANNOTATING DENTAL IMAGES USING
                    MACHINE LEARNING
                  </p>
                  <p className="">
                    <b>
                      ISO 9001 <span className="fa-star2">CERTIFIED</span>
                    </b>
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

export default Patents;
