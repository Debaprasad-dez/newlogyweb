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
                  <a className="btn px-5" href="">
                    see all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="articleright">
                <div className="text-end">
                  <img src={articlestar} alt="" />
                  <div className="p-5 pt-0 text-start">
                    <p>LOREM IPSUM</p>
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel{" "}
                    </h6>
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
