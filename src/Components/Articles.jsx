import { Link } from "react-router-dom";
import articlestar from "../Images/articlestar.svg";
function Article() {
  return (
    <div className="article text-start">
      <div className="container">
        <div className="articlediv">
          <p className="display-4 fw-bold  mx-auto servingclientext">
            <span className="">Articles</span> and{" "}
            <span className="">Publications</span>
          </p>
          <div className="row articlerow">
            <div className="col-md-7 pe-2">
              <div className="articlebg">
                <div className="articledarklayer">
                  <Link to="/articles" className="btn px-5" href="">
                    see all
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="articleright">
                <div className="text-end">
                  <img src={articlestar} alt="" />
                  <div className="p-5 pt-0 text-start">
                    <p>edexlive.com</p>
                    <h5>
                      Teeth talk: This Hyderabad start-up is using AI and
                      WhatsApp to bring oral hygiene to the fore
                    </h5>
                    <p>
                      Logy.AI is a start-up that is using the power of WhatsApp
                      and Artificial Intelligence to step up oral hygiene
                      efforts. We get a demo to understand how exactly it works
                      and we are thrilled indeed.
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
    </div>
  );
}

export default Article;
