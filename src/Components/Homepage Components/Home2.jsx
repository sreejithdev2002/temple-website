import bgImage from "../../assets/backgroundHome.png";

function Home2() {
  return (
    <div
      className="flex lg:h-100 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col justify-center items-center px-5 lg:px-0">
        <h2 className="text-[#F80D28] text-xl lg:text-4xl xl:text-5xl lg:w-[1000px] text-center mt-10">
          രാമായണ പാരായണത്തോടെ ഈ ദിവസം ആരംഭിക്കാം.
        </h2>
        <h2 className="text-[#F80D28] text-xl lg:text-4xl xl:text-5xl lg:w-[1000px] text-center mt-10">
          ജീവിതം ധന്യമാക്കാം
        </h2>
      </div>
    </div>
  );
}

export default Home2;
