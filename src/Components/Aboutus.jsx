import aboutusnumbers from "../Images/aboutusnumbers.svg";
import LogoFree from "../Images/LogoFree.svg";
import aboutuspic1 from "../Images/aboutuspic1.avif";
import bluebg from "../Images/bluebg.jpg";
import patent from "../Images/patent.png";
import teamimg from "../Images/multislidebg1.png";
import teamimg1 from "../Images/empidimg.png";

function Aboutus() {
  return (
    <div className="pt-5">
      <div className="bg-grad aboutusheader text-center ">
        <h1 className="display-5 fw-normal">About Us</h1>
      </div>
      <div className="bg-sky"></div>
      <div className="bg-darkblue"></div>
      <div className="bg-sky"></div>
      <div className="container mission ">
        <div className="row ">
          <div className="col-md-6">
            <p className="display-2 fw-bold w-75 mx-auto servingclientext">
              Our <span className="">Mission</span>
            </p>
            <hr className="w-75 mx-auto my-3 underHeaderLine" />
          </div>
          <div className="col-md-6">
            <h4 className="aboutusparagraph">
              Keep innovating and building clinically validated AI tools enabled
              over smartphones, for easy screening and care coordination that
              can be used by anyone, anywhere and anytime to touch and improve
              the health outcomes of 100 million lives by 2030. 
            </h4>
          </div>
        </div>
      </div>
      <div className="container ps-0">
        <div className="row aboutusrow">
          <div className="col-md-6 text-center">
            <div className="logobox">
              <img src={LogoFree} className="logoabout" alt="" />
              <img src={bluebg} className="w-75 aboutuspic1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="aboutusparagraph">
              With its AI-powered healthcare screening tools, Logy.AI is one of
              the pioneers in the <b>Software as a medical device (SAMD)</b>{" "}
              domain and is truly a story of made in India for the world. Rooted
              in three fundamental principles of empathy, honesty, and ethics,
              Logy.AI envisions a future where accessible healthcare is
              available to all, facilitated by its remarkable AI tools. 
            </h4>
            <h4 className="aboutusparagraph2 w-75">
              Leveraging advanced technology, Logy.AI's tools possess the
              capability to diagnose diseases, forecast outcomes, and empower
              patients to receive prompt and efficient treatment. By adopting
              Logy.AI's innovative solutions, hospitals, clinics, diagnostic
              centers, and healthcare organizations can elevate the quality of
              care they offer, ultimately leading to improved patient outcomes.
            </h4>
            <div className="aboutusnumbers text-start">
              <img src={aboutusnumbers} className="w-100 mx-auto" alt="" />
              <div className=" text-center mt-2">
                {/* <img className="w-25 mx-auto" src={LogoFree} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container qualitycommit">
        <div className="row ">
          <div className="col-md-6">
            <p className="display-2 fw-bold w-75 mx-auto servingclientext">
              Our Commitment to <span className="">Quality</span>
            </p>
            <hr className="w-75 mx-auto my-3 underHeaderLine" />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="teamheader text-center">
        <div className="container">
          <p className="m-0 p-0 py-3 display-4 text-white fw-bold">The Team</p>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-3 col-6 p-0 m-0">
          <div className="teamcard">
            <img src={teamimg} alt="" className="teamImage w-100" />
            <div className="teamMemberDetail text-center text-white py-2">
              <h5 className="p-0 m-0">Anand</h5>
              <p className="small p-0 m-0">designation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 p-0 m-0">
          <div className="teamcard">
            <img src={teamimg} alt="" className="teamImage w-100" />
            <div className="teamMemberDetail bg-dark text-center text-white py-2">
              <h5 className="p-0 m-0">Anand</h5>
              <p className="small p-0 m-0">designation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 p-0 m-0">
          <div className="teamcard">
            <img src={teamimg} alt="" className="teamImage w-100" />
            <div className="teamMemberDetail text-center text-white py-2">
              <h5 className="p-0 m-0">Anand</h5>
              <p className="small p-0 m-0">designation</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 p-0 m-0">
          <div className="teamcard">
            <img src={teamimg} alt="" className="teamImage w-100" />
            <div className="teamMemberDetail bg-dark text-center text-white py-2">
              <h5 className="p-0 m-0">Anand</h5>
              <p className="small p-0 m-0">designation</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container my-3">
        <div className="row m-0">
          <div className="col-md-2 col-6 p-0 m-0 mx-auto">
            <div className="teamcard">
              <img src={teamimg1} alt="" className="teamImage-sm w-100 p-3" />
              <div className="teamMemberDetail1 text-center text-dark py-2">
                <h5 className="p-0 m-0">Anand</h5>
                <p className="small p-0 m-0">designation</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 p-0 m-0 mx-auto">
            <div className="teamcard">
              <img src={teamimg1} alt="" className="teamImage-sm w-100 p-3" />
              <div className="teamMemberDetail1 text-dark text-center  py-2">
                <h5 className="p-0 m-0">Anand</h5>
                <p className="small p-0 m-0">designation</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 p-0 m-0 mx-auto">
            <div className="teamcard">
              <img src={teamimg1} alt="" className="teamImage-sm w-100 p-3" />
              <div className="teamMemberDetail1 text-center text-dark py-2">
                <h5 className="p-0 m-0">Anand</h5>
                <p className="small p-0 m-0">designation</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 p-0 m-0 mx-auto">
            <div className="teamcard">
              <img src={teamimg1} alt="" className="teamImage-sm w-100 p-3" />
              <div className="teamMemberDetail1  text-center text-dark py-2">
                <h5 className="p-0 m-0">Anand</h5>
                <p className="small p-0 m-0">designation</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-6 p-0 m-0 mx-auto">
            <div className="teamcard">
              <img src={teamimg1} alt="" className="teamImage-sm w-100 p-3" />
              <div className="teamMemberDetail1  text-center text-dark py-2">
                <h5 className="p-0 m-0">Anand</h5>
                <p className="small p-0 m-0">designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
