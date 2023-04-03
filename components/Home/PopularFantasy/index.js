import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import FantasyCard from "./FantasyCard";

import dynamic from "next/dynamic";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();
const items = [
  <FantasyCard id={1} onDragStart={handleDragStart} role="presentation" />,
  <FantasyCard id={2} onDragStart={handleDragStart} role="presentation" />,
  <FantasyCard id={3} onDragStart={handleDragStart} role="presentation" />,
];

const PopularFantasy = () => {
  return (
    <div className=" bg-[url('/popularmob.svg')] sm:bg-[url('/populartab.svg')] lg:bg-[url('/populardes(2).svg')] bg-cover    w-[100%] sm:w-[100%] h-[830px] sm:h-[800px] lg:h-[850px] flex flex-col justify-center items-center px-4  ">
      <h1 className="text-[20px]  text-center md:text-[40px] mt-7 font-[700]">
        <span className=" text-[#0169B6]">Popular</span>{" "}
        <span className=" mx-2 text-[#00A547]"> Fantasy Sports</span>
        <span className=" text-[#0169B6]">in India</span>
      </h1>
      <p className="text-center text-[16px] px-3 my-3 font-[700] text-[#0B592A]">
        Fantasy sports is a platform for online gaming where fantasy players
        create a virtual team of real sports players. Win11 gives you plenty of
        options to create your fantasy sports team for the sport you would like
        to play and win! Here are the most popular fantasy sports leagues to
        play.
      </p>
      <div className="w-[100%] lg:h-[300px] flex  justify-center items-center">
        {
          <AliceCarousel
            disableDotsControls={true}
            disableButtonsControls={true}
            mouseTracking
            items={items}
            responsive={responsive}
          />
        }
      </div>
    </div>
  );
};

export default PopularFantasy;
