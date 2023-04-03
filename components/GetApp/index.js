import dynamic from "next/dynamic";
import React from "react";
import PlayCard from "../FantasyPages/PlayFantasy/PlayCard";

import GetAppHeader from "./GetAppHeader";
import GetTheApp from "./GetTheApp";
import InstallSteps from "./InstallSteps";

const FAQ = dynamic(() => import("../FantasyPages/FAQ"), {
  ssr: false,
});

const GetApp = () => {
  return (
    <div className="w-full">
      <GetAppHeader />
      <InstallSteps />
      <GetTheApp />
      {/* <PlayCard /> */}
      <FAQ />
    </div>
  );
};

export default GetApp;
