import Punchcam from "../Images/punch-hole.svg";
import eyeicon from "../Images/eyeicon.svg";
import oralicon from "../Images/oralIcon.svg";

function Mobilemock() {
  return (
    <div className="container pe-0">
      <div class="mobile-phone">
        <div class="screen text-white">
          <div className="row">
            <img src={Punchcam} className="punch-hole mx-auto mt-2" alt="" />
          </div>
          {/* <div className="row">
            <img src={eyeicon} className=" mx-auto w-75 mt-5" alt="" />
          </div> */}
          <p className="uptextmob display-5 text-start p-3">
            First-Level Health Checks & Care-Coordination, Made Easy with AI
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mobilemock;
