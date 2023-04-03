import StepCard from "./StepCard";

export const stepsData = [
  {
    id: "1",
    idImage: "/1.png",
    logo: "/warner.png",
    title: "Pick A Match",
    body: "Choose from the happening or future sporting matches",
  },
  {
    id: "2",
    idImage: "/2.png",
    logo: "/rohit.png",
    title: "Create your winning team",
    body: "Make a strong combo of your major players to form your virtual team.",
  },
  {
    id: "3",
    idImage: "/3.png",
    logo: "/25.png",
    title: "Play And Perform",
    body: "Put your gaming skills to good use to outperform your own records",
  },
];

const SimpleSteps = () => {
  return (
    <div className="relative  w-[100%]">
      <div className=" relative bg-cover my-5  flex flex-col justify-center items-center py-6 ">
        <img src="/3steps.svg " className="absolute sm:hidden -z-10" />
        <img
          src="/simplestepsmob.svg"
          className="absolute hidden sm:block xl:hidden -z-10 "
        />
        <img
          src="/simplestepsdes.svg"
          className="absolute hidden xl:block -z-10 "
        />

        <h1 className="text-[20px] text-center my-3  font-[700] ">
          <span className="text-[#0169B6]">3 Simple</span>
          <span className="text-[#00A547]">Steps</span>
        </h1>
        <p className="text-[16px] font-[400] text-[#0B592A] text-center my-3">
          Showcasing eSport skills and gaming made exciting!
        </p>
        <img
          src="/football.svg "
          className="absolute left-0 h-[80px] w-[80px] lg:h-[200px] lg:w-[200px] "
        />
        <div className=" flex flex-col w-[90%] sm:w-[80%] md:w-[70%] xl:w-[75%] mx-6 justify-center items-center p-4">
          {stepsData.map((item) => (
            <StepCard
              id={item.id}
              title={item.title}
              body={item.body}
              idImage={item.idImage}
              logo={item.logo}
            />
          ))}
        </div>
        <div className="">
          <img
            src="/basketball.svg "
            className="absolute right-0 -translate-y-20  h-[80px] w-[80px] lg:h-[200px] lg:w-[200px]   "
          />
        </div>

        <div className="flex flex-col  justify-center items-center px-[24px]">
          <h1 className="text-center text-[#003718] font-[400] text-[16px]">
            Earn points and rewards for every gaming and sports achievement you
            create!
          </h1>

          <div className="flex justify-around text-center items-center">
            <p className="text-center text-[#003718] font-[400] text-[16px] my-[16px]">
              For more game specific instructions visit: {"  "}
            </p>
            <p className="text-center text-[#003718] font-[400] text-[16px] px-6 underline">
              How to Play
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
