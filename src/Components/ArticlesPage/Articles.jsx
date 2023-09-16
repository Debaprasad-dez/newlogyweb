import article1 from "../../Images/article1.png";
import article2 from "../../Images/article2.png";

function Articles() {
  return (
    <div className="articlesContent">
      <div className="py-4">
        <div className="solutionright">
          <div className="px-5">
            <p className="solutionpagepara">
              Read the Articles and publications related to Logy.AI
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row mx-auto mb-4">
              <div className="col-md-6 mb-3">
                <a href="" className="text-decoration-none">
                  <img src={article1} className="w-100 articleImg" alt="" />
                  <div className="articleBottomBox py-3 px-2">
                    <p className="mb-0 text-secondary ">edexlive.com</p>
                    <h5 className="py-0 my-0 text-dark">
                      Teeth talk: This Hyderabad start-up is using AI and
                      WhatsApp to bring oral hygiene to the fore
                    </h5>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-3">
                <a href="" className="text-decoration-none">
                  <img src={article2} className="w-100 articleImg" alt="" />
                  <div className="articleBottomBox py-3 px-2">
                    <p className="mb-0 text-secondary">cmp.smu.edu.sg</p>
                    <h5 className="py-0 my-0 text-dark">
                      Beyond a Single Quadrant
                    </h5>
                  </div>
                </a>
              </div>
            </div>
            <hr className="w-25 mx-auto p-1 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
