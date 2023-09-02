import patent from "../Images/patent.png";

function Patents() {
  return (
    <div className="bg-white pt-4">
      <div className="container">
        <div className=" ">
          <div className="text-start">
            <p className="display-4 fw-bold servingclientext">
              Key <span className="">Patents</span>
            </p>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="patentcard bg-grad">
                <div className="patentimg">
                  <img src={patent} className="w-50" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="solutionright text-start">
                <div className="px-5">
                  <p className="display-5">Patent name</p>
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

export default Patents;
