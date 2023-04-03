import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import SimpleSteps from "../Home/3SimpleSteps";
import Win11 from "../Home/Win11";
import BasketBall from "./BasketBall";
import BonusOffers from "./BonusOffer";

import CricketHowToPlay from "./CricketHowToPlay";
import DosAndDonts from "./DosAndDont";
// import BestOfFantasy from "./BestOfFantasy";
// import FAQ from "./FAQ";
import HeaderComponent from "./HeaderComponent";
import HeaderComponent2 from "./HeaderComponent2";

import Instructions from "./Instructions";
import PlayFantasy from "./PlayFantasy";
import PointsSystem from "./PointsSystem";
import Prediction from "./Prediction";
import Rules from "./Rules";
import Tips from "./Tips";
// import WatchVideo from "./WatchVideo";
import What from "./What";

import FootballOverView from "./FootballOverView";
import HowDoUse from "./HowDoUse";
import FootBallDoAndDonts from "./FootballDoAndDonts";
import AddTheApp from "./AddTheApp";
import KeyPoints from "./KeyPoints";
import AdditionalPoints from "./AdditionalPoints";
import HowToDo from "./HowToDo";

const FAQ = dynamic(() => import("./FAQ"), {
  ssr: false,
});

const WatchVideo = dynamic(() => import("./WatchVideo"), {
  ssr: false,
});

const BestOfFantasy = dynamic(() => import("./BestOfFantasy"), {
  ssr: false,
});

const FantasyPages = ({ data, pageId }) => {
  const router = useRouter();

  const { id } = router.query;

  // console.log("id ===", id);

  const header1 = [
    "crypto-trading",
    "commodity-trading",
    "forex",
    "equity-stocks",
    "racing",
  ];

  const header2 = [
    "soccer",
    "kabbadi",
    "basket",
    "football",
    "baseball",
    "kickboxing",
    "cricket",
  ];

  const splPages = ["cricket", "basket", "football"];

  const watchVideo = ["cricket", "kabbadi", "basket"];

  const addTheAPP = ["kabbadi", "basket", "baseball"];

  const keyPointsPages = ["baseball", "soccer", "racing"];

  const rulesPages = ["kickboxing", "equity-stocks"];

  const AdditionalStrategyPointsPages = ["commodity-trading", "forex"];

  const instructionsPages = [
    "baseball",
    "soccer",
    "kickboxing",
    "racing",
    "commodity-trading",
    "forex",
    "crypto-trading",
  ];

  return (
    <div className="">
      {header2.includes(id) && (
        <HeaderComponent2 image={data?.header?.imageUrl} />
      )}
      {header1.includes(id) && (
        <HeaderComponent image={data?.header?.imageUrl} pageId={pageId} />
      )}
      <PlayFantasy
        title={data?.instructions?.title}
        pageName={data?.playFantasy?.header?.name}
        cardsData={data?.playFantasy?.cards}
        cardsData1={data?.playFantasy?.cards1}
        cardsData2={data?.playFantasy?.cards2}
      />
      {watchVideo.includes(id) && (
        <WatchVideo
          title={data?.video?.title}
          heading={data?.video?.heading}
          description={data?.video?.description}
        />
      )}

      {id === "cricket" && (
        <>
          <BestOfFantasy />
          <CricketHowToPlay />
          <PointsSystem />
          <Prediction />
          <Tips />
          <DosAndDonts />
          <BonusOffers />
        </>
      )}
      {id === "basket" && <BasketBall />}
      {id === "football" && (
        <>
          <What
            title={data?.instructions?.title}
            details={data?.whatIsFantasy?.description}
          />
          <FootballOverView />
          <HowDoUse />
          <FootBallDoAndDonts />
          {/* <DosAndDonts /> */}
        </>
      )}
      {!splPages.includes(id) && (
        <>
          <What
            title={data?.instructions?.title}
            details={data?.whatIsFantasy?.description}
          />
        </>
      )}

      {instructionsPages.includes(id) && (
        <Instructions
          title={data?.instructions?.title}
          instructions={data?.instructions?.description}
        />
      )}

      {rulesPages.includes(id) && (
        <Rules title={data?.instructions?.title} rules={data?.rules?.body} />
      )}
      {keyPointsPages.includes(id) && (
        <KeyPoints
          title={data?.keyPoints?.title}
          description={data?.keyPoints?.description}
        />
      )}

      {AdditionalStrategyPointsPages.includes(id) && (
        <AdditionalPoints
          content1={data?.additionalPoints?.content1}
          content2={data?.additionalPoints?.content2}
          content3={data?.additionalPoints?.content3}
        />
      )}

      {addTheAPP.includes(id) && <AddTheApp />}

      <div className="hidden md:block">
        {id === "crypto-trading" && <HowToDo />}
      </div>
      {!addTheAPP.includes(id) && <FAQ />}
    </div>
  );
};

export default FantasyPages;
