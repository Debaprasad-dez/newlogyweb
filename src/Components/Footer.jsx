import reqdemoicon from "../Images/reqdemoicon.svg";
import fb from "../Images/fbicon.svg";
import yt from "../Images/yticon.svg";
import lin from "../Images/linkedinicon.svg";
import twitter from "../Images/twittericon.svg";

function Footer() {
  return (
    <div className="footerDiv">
      <div className="footertop">
        <div className="container">
          <div className="row">
            <div className="col-md-7 text-start">
              <p className="p-0 m-0 py-4 display-6">
                Join the growing number of healthcare providers who trust
                Logy.AI
              </p>
            </div>
            <div className="col-md-5 text-end">
              <p className="p-0 m-0 py-4 display-7">
                Request a demo <img src={reqdemoicon} alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom  py-4">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-white">
              <h2>LOGY.AI</h2>
              <br />
              <p className="footerpara">
                Experience the power of AI-powered healthcare platform through
                Logy.AI’s proprietary and clinically validated solutions. Our
                tool leverages smartphones and WhatsApp and can be used to
                improve care coordination, prevent avoidable diseases and
                provide appropriate care for patients worldwide.
              </p>
              <br />
              <div className="iconrow">
                <img src={fb} alt="" />
                <img src={yt} alt="" />
                <img src={lin} alt="" />
                <img src={twitter} alt="" />
              </div>
              <br />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4 hyperlinks">
                  <h5 className="text-white">PRODUCTS</h5>
                  <br />
                  <a href="" className="text-decoration-none  mb-3">
                    Logy.AI-for-Dentistry AI
                  </a>
                  <a href="" className="text-decoration-none  mb-3">
                    AutoML
                  </a>
                  <a href="" className="text-decoration-none  mb-3">
                    AutoML Platform
                  </a>
                </div>
                <div className="col-md-4 hyperlinks">
                  <h5 className="text-white">USEFUL LINKS</h5>
                  <br />
                  <a href="" className="text-decoration-none  mb-3">
                    Privacy Policy
                  </a>
                  <a href="" className="text-decoration-none  mb-3">
                    Terms and Conditions / Cancellation Policy
                  </a>
                </div>
                <div className="col-md-4 hyperlinks">
                  <h5 className="text-white">CONTACT</h5>
                  <br />
                  <a href="" className="text-decoration-none  mb-3">
                    India / Singapore
                  </a>
                  <a href="" className="text-decoration-none  mb-3">
                    humans@logy.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <p className="text-white text-center pt-3">
            Copyright © Nex Fitzap Private Limited
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
