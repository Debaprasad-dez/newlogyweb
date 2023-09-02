import edexlive from "../Images/edexlive.png";
import dainik from "../Images/dainikbhaskar.png";
import hitavada from "../Images/hitavada.png";
import patrika from "../Images/patrika.png";

function Recentnews() {
  const newsArray = [
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: edexlive,
      id: "1",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: dainik,
      id: "2",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: hitavada,
      id: "3",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: patrika,
      id: "4",
    },
  ];
  return (
    <div className="news text-start">
      <div className="container">
        <br />
        <br />
        <p className="display-4 fw-bold  mx-auto servingclientext">
          Recent <span className="">News</span>
        </p>
        <div>
          <div className="row">
            {newsArray.map((news) => (
              <div key={news.id} className=" col-md-6  newsitem p-3">
                <div className="bg-lightblue p-1 w-25"></div>
                <a href="" className="text-decoration-none">
                  <br />
                  <h6 className="text-dark">{news.date}</h6>
                  <p className="text-secondary m-0 mb-2">{news.headline}</p>
                  <img className="newslogo" src={news.agency} alt="" />
                  {/* <h5 className="text-dark">{news.agency}</h5> */}
                </a>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Recentnews;
