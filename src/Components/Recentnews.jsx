import edexlive from "../Images/edexlive.png";
import dainik from "../Images/dainikbhaskar.png";
import hitavada from "../Images/hitavada.png";
import patrika from "../Images/patrika.png";

function Recentnews() {
  const newsArray = [
    {
      date: "14th December 2020",
      headline:
        "Teeth talk: This Hyderabad start-up is using AI and WhatsApp to bring oral hygiene to the fore.",
      agency: edexlive,
      id: "1",
      url: "https://www.edexlive.com/happening/2020/dec/14/teeth-talk-this-hyderabad-start-up-is-using-ai-and-whatsapp-to-bring-oral-hygiene-to-the-fore-16582.html",
    },
    {
      date: "27th February 2023",
      headline:
        "C-DOT made app available: Logi-AI... Cataract detection in 2 minutes through app...",
      agency: dainik,
      id: "2",
      url: "https://www.bhaskar.com/local/mp/vidisha/news/cataract-test-in-2-minutes-with-logi-ai-app-so-far-1600-have-been-done-53-patients-marked-for-operation-130976141.html",
    },
  ];
  return (
    <div className="news text-start">
      <div className="container">
        <br />
        <br />
        <p className="display-4 fw-bold  mx-auto servingclientext">
          Covered <span className="">By</span>
        </p>
        <div>
          <div className="row">
            {newsArray.map((news) => (
              <div key={news.id} className=" col-md-6  newsitem p-3">
                <div className="bg-lightblue p-1 w-25"></div>
                <a href={news.url} target="#" className="text-decoration-none">
                  <br />
                  <h6 className="text-dark">{news.date}</h6>
                  <br />
                  <div className="col-md-8">
                    <p className="text-secondary m-0 mb-2">{news.headline}</p>
                  </div>
                  <br />
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
