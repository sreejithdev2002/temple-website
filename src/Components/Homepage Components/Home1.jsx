import DeviImage from "../../assets/devi.png";

function Home1() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-around p-5 lg:p-0 lg:h-[70vh]">
      {/* Left Side Content */}
      <div className="flex flex-col self-end mb-20 justify-center gap-y-3 lg:gap-y-5 text-center lg:text-left px-10">
        <h1 className="text-2xl lg:text-[40px] font-bold leading-tight">
          പഴുവിൽ ശ്രീ ത്രേതായുഗ മൂർത്തി ക്ഷേത്രം
        </h1>
        <p className="text-sm opacity-60 max-w-[700px]">
          നൂറ്റാണ്ടുകളോളം വിസ്മയത്തിലാണ്ട് പോയ മഹാ വിഷ്ണു ക്ഷേത്രത്തിൻ്റെ
          അധ്യാത്മിക പുനരാവിഷ്ക്കാരമാണ് പഴുവിൽ ശ്രീ ത്രേതായുഗ മൂർത്തി ക്ഷേത്രം
        </p>
        <button className="self-center lg:self-start bg-[#FC931E] text-white px-5 py-3 rounded-full text-xs lg:text-base font-medium">
          കൂടുതൽ അറിയുക
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative flex justify-center w-full max-w-xs sm:max-w-sm lg:max-w-3xl">
        <img src={DeviImage} alt="Image of goddess Devi" className="h-[70vh]" />
      </div>
    </div>
  );
}

export default Home1;
