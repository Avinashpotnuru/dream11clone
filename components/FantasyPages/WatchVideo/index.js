import ReviewCard from "@/components/Home/ReviewsAndRating/ReviewCard";
import React from "react";

import { useRouter } from "next/router";

import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  1024: { items: 3 },
};

import { review } from "@/components/Home/ReviewsAndRating";

const WatchVideo = ({ title, heading, description }) => {
  const router = useRouter();

  const { id } = router.query;
  //   console.log(title);
  return (
    <div
      className={`bg-[url('/watchMob.svg')] bg-red  sm:bg-[url('/watchdesk.svg')] p-3 md:pt-16  h-[800px] sm:h-[800px] ${
        id === "cricket" && " md:h-[1400px] "
      } md:h-[820px] lg:h-[1500px]  w-[100%]   bg-cover flex justify-center flex-col items-center ${
        id === "cricket" && "h-[1250px] sm:h-[1000px] "
      }`}
    >
      <div className=" flex flex-col justify-center items-center    my-6">
        {id === "kabbadi" && (
          <h1 className="text-[16px] font-[600] text-[#0B592A]  my-3">
            Wondering how to play Fantasy Kabaddi?
          </h1>
        )}

        {(id === "cricket" && (
          <h1 className="text-[16px] font-[600] text-[#0B592A]  my-3">
            Sounds interesting?
          </h1>
        )) ||
          (id === "basket" && (
            <h1 className="text-[16px] font-[600] text-[#0B592A]  my-3">
              Sounds interesting?
            </h1>
          ))}

        {id === "cricket" && (
          <h1 className="text-[20px] md:text-[24px] lg:text-[40px] font-[700]  text-center text-[#0169B6] my-5 mb-5 lg:mb-[58px]">
            Watch this <span className="text-[#00A547]">video</span> to know
            more:
          </h1>
        )}

        {id === "kabbadi" && (
          <h1 className="text-[20px] md:text-[24px] lg:text-[40px] font-[700]  text-center text-[#0169B6] my-5 mb-5 lg:mb-[58px]">
            Watch this <span className="text-[#00A547]">video</span>
          </h1>
        )}

        {id === "basket" && (
          <h1 className=" text-[20px] md:text-[24px] lg:text-[40px]  font-[700] text-center text-[#0169B6] my-5 mb-5 lg:mb-[58px]">
            Watch this <span className="text-[#00A547]">video</span> to Know
            More:
          </h1>
        )}

        <img className=" " src="/virat.png" />
        <h1 className="text-[16px] font-[400] px-5 md:px-10 text-[#00A547] mt-5 mt lg:mt-[48px] ">
          {description}
        </h1>
      </div>
      <div className=" w-[100%]">
        {id === "cricket" && (
          <div>
            <h1 className="text-[#0169B6] font-[700] text-[20px] lg:mb-5 md:text-[24px] lg:text-[40px] my-2 text-center">
              Here's what some of our{" "}
              <span className="text-[#00A547]">winners</span> have to say about
              Win 11.
            </h1>
            <div className="flex justify-center items-center w-[100%] mb-24  mx-auto ">
              {/* {review.map((item) => (
            <ReviewCard review={item} key={item.id} />
          ))}  */}{" "}
              <AliceCarousel
                mouseTracking
                responsive={responsive}
                disableDotsControls={true}
                disableButtonsControls={true}
                items={review.map((item) => (
                  <ReviewCard review={item} key={item.id} />
                ))}
              ></AliceCarousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchVideo;
