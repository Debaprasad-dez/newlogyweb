import getintouch from "../Images/getintouch.svg";
function Contact() {
  return (
    <div className="container">
      <div className="contactDiv">
        <div className="row">
          <div className="col-md-5">
            <div className="pe-2 h-100 norightpadding">
              <div className="leftContact text-center p-4 py-0">
                <div className="bg-white py-5 shadow w-75 mx-auto mt-n3 touchbox">
                  <img src={getintouch} className="w-50 ms-2" srcset="" />
                </div>
                <br />
                <p className="w-50 mx-auto mt-3 h5 fw-500">
                  Great! Please get in touch with us
                </p>
                <p className="w-75 mx-auto mt-3 h6 fw-normal">
                  let's start something wonderful together. Call us with any
                  questions.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className=" h-100">
              <div className="rightContact ">
                <button className="text-start entdet p-3 h6">
                  Enter your details here
                </button>
                <div className="p-3 ">
                  <form>
                    <div class="form-group">
                      <label for="formGroupExampleInput" className="my-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="e.g. Vish Anand"
                      />
                    </div>
                    <div class="form-group">
                      <div className="row">
                        <div className="col">
                          <label for="formGroupExampleInput2" className="my-2">
                            Your Mobile Number
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder="e.g. 9876543210"
                          />
                        </div>
                        <div className="col">
                          <label for="formGroupExampleInput3" className="my-2">
                            Your Email address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput3"
                            placeholder="e.g. vish.anand@yahoo.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput3" className="my-2">
                        Your Message to us
                      </label>
                      <textarea
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput3"
                        placeholder="Write your heart out"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary my-2 px-4 btnx"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
