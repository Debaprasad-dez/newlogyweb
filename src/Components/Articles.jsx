import articlestar from "../Images/articlestar.svg";
function Article() {
  return (
    <div className="article text-start">
      <div className="container">
        <div className="articlediv">
          <a
            href=""
            className="px-4 py-2 bg-lightblue  text-decoration-none rounded-pill"
          >
            Articles and publication
          </a>
          <br />
          <br />
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
