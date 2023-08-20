function Recentnews() {
  const newsArray = [
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: "India times",
      id: "1",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: "India times",
      id: "2",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: "India times",
      id: "3",
    },
    {
      date: "20 Aug 2023",
      headline:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel ",
      agency: "India times",
      id: "4",
    },
  ];
  return (
    <div className="news text-start">
      <div className="container">
        <br />
        <br />
        <a className="px-4 py-2 bg-lightblue  text-decoration-none rounded-pill">
          Our Solutions
        </a>
        <br />
        <br />
        <br />
        <div>
          <div className="row">
            {newsArray.map((news) => (
              <div key={news.id} className=" col-md-6  newsitem p-3">
                <div className="bg-lightblue p-1 w-25"></div>
                <a href="" className="text-decoration-none">
                  <br />
                  <h5 className="text-dark">{news.date}</h5>
                  <p className="text-secondary">{news.headline}</p>
                  <h5 className="text-dark">{news.agency}</h5>
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
