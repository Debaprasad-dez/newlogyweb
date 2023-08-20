import GetTouchFloater from "./GetTouchFloater";
import HomeCarousel from "./HomeCarousel";
import Tagline from "./Tagline";
import blueSpectrum from "../Images/blueSpectrum.svg";
import ImpactScale from "./ImpactScale";
import Infinitecarousel from "./InfiniteCarousel";
import MultiItem from "./MultiItemCarousel";
import Article from "./Articles";
import OurServices from "./OurServices";
import Partners from "./Partners";
import Recentnews from "./Recentnews";
import Testimonails from "./Testimonails";

function Home() {
  return (
    <div className="homeDiv">
      <HomeCarousel />
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
      <Testimonails />
    </div>
  );
}

export default Home;
