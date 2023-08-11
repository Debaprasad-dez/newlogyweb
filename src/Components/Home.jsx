import GetTouchFloater from "./GetTouchFloater.jsx";
import HomeCarousel from "./HomeCarousel.jsx";
import Tagline from "./Tagline.jsx";
import blueSpectrum from "../Images/blueSpectrum.svg";
import ImpactScale from "./ImpactScale.jsx";
import Infinitecarousel from "./InfiniteCarousel.jsx";
import MultiItem from "./MultiItemCarousel.jsx";
import Article from "./Articles.jsx";
import OurServices from "./OurServices.jsx";
import Partners from "./Partners.jsx";
import Recentnews from "./Recentnews.jsx";

function Home() {
  return (
    <div className="homeDiv">
      <div>
        <HomeCarousel />
      </div>
      <GetTouchFloater />
      <Tagline text="let good health begin" />
      <img src={blueSpectrum} className="blueSpec" alt="" />
      <ImpactScale />
      <Infinitecarousel />
      <Tagline text="Mission to improve the health outcomes of 100 million lives by 2030." />
      <MultiItem />
      <Article />
      <OurServices />
      <Partners />
      <Recentnews />
    </div>
  );
}

export default Home;
