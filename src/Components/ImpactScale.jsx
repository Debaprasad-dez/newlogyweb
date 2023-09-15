import scaleOfImpact from "../Images/scaleOfImpact.svg";
import metric1 from "../Images/metric1.svg";
import metric2 from "../Images/metric2.svg";
import metric3 from "../Images/metric3.svg";
import metric4 from "../Images/metric4.svg";
import metric5 from "../Images/metric5.svg";
import metric6 from "../Images/metric6.svg";
import metric7 from "../Images/metric7.svg";
import metric8 from "../Images/metric8.svg";
import metric9 from "../Images/metric9.svg";

function ImpactScale() {
  return (
    <div className="impactdiv ">
      <img className="scaleImp my-4" src={scaleOfImpact} alt="" />

      <div className="container mt-5">
        <div className="col-md-9 mx-auto ">
          <div className="row">
            {/* <div className="col-4 scaleBlock">
              <img src={metric1} alt="" />
            </div> */}
            <div className="col-4 scaleBlock">
              <img src={metric2} alt="" />
            </div>
            <div className="col-4 scaleBlock">
              <img src={metric3} alt="" />
            </div>
            <div className="col-4 scaleBlock">
              <img src={metric4} alt="" />
            </div>
            {/* <div className="col-4 scaleBlock">
              <img src={metric5} alt="" />
            </div> */}
            <div className="col-4 scaleBlock">
              <img src={metric6} alt="" />
            </div>
            <div className="col-4 scaleBlock">
              <img src={metric7} alt="" />
            </div>
            <div className="col-4 scaleBlock">
              <img src={metric8} alt="" />
            </div>
            {/* <div className="col-4 scaleBlock">
              <img src={metric9} alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default ImpactScale;
