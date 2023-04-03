const FantasyCard = ({ id }) => {
  console.log(id);
  return (
    <div
      className={`-skew-x-12 bg-[url('/fantasycard.svg')]   my-auto mx-auto h-[165px] flex justify-center items-center w-[290px]  ${
        id % 2 === 1 && "lg:mt-14 "
      } `}
    >
      <div className="skew-x-12 flex flex-col justify-center px-2 items-center ">
        <img className="my-2" src="/fantasycricket.png" />
        <p className="text-center w-[80%] text">
          Fantasy sports is a platform for online gaming where fantasy players
          create a virtual team of real sports players. Win11 gives you plenty
          of options to create your{" "}
        </p>
      </div>
    </div>
  );
};

export default FantasyCard;
