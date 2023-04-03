import React from "react";
import AboutCricketApp from "./AboutCricketApp";
import AppHeader from "./AppHeader";
import AppInstallSteps from "./AppInstallSteps";
import CricketFAQ from "./CricketFAQ";
import DownLoadApp from "./DownLoadApp";
import GetAndWin from "./GetAndWin";
import MakeTeam from "./MakeTeam";
import PlayerAboutApp from "./PlayerAboutApp";

import PlayToWin from "./PlayToWin";
import WhatWin11 from "./WhatWin11";

const CricketApp = () => {
  return (
    <div>
      <AppHeader />
      <AppInstallSteps />
      <AboutCricketApp />
      <GetAndWin />
      <MakeTeam />
      <PlayToWin />
      <PlayerAboutApp />
      <WhatWin11 />
      <CricketFAQ />
      <DownLoadApp />
    </div>
  );
};

export default CricketApp;
