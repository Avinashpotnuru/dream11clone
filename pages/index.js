import DesktopNavBar from "@/components/DesktopNavBar";
import SimpleSteps from "@/components/Home/3SimpleSteps";
import HowToPlay from "@/components/Home/HowToPlay";
import ItsNow from "@/components/Home/ItsNow";
// import PopularFantasy from "@/components/Home/PopularFantasy";
import WeAre from "@/components/Home/WeAre";
import Win11 from "@/components/Home/Win11";
import Win11FantasyGames from "@/components/Home/Win11FantsyGames";
// import Win11Faq from "@/components/Home/Win11Faq";
import dynamic from "next/dynamic";
const PopularFantasy = dynamic(
  () => import("@/components/Home/PopularFantasy"),
  {
    ssr: false,
  }
);

const Win11Faq = dynamic(
  () => {
    return import("@/components/Home/Win11Faq");
  },
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="w-[100%] ">
      <Win11 />
      <WeAre />
      <SimpleSteps />
      <HowToPlay />
      <ItsNow />
      <Win11FantasyGames />
      <PopularFantasy />
      <Win11Faq />
    </div>
  );
}
