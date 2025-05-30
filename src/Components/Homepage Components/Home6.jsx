import bookImage from "../../assets/Homepage/book.png";

function Home6() {
  return (
    <div className="p-5 lg:p-10">
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-[#FC931E] mb-3">
        രാമായണ ജ്യോതിഷം
      </h2>
      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-10">
        ദൈവിക ജ്യോതിഷശാസ്ത്രത്തിന്റെ പ്രകാശം
      </h3>
      <div className="flex justify-between">
        <div>
          <p className="w-[200px] md:w-[70vw] lg:w-[70vw] text-xs lg:text-xl font-bold">
            <span className="text-[#FC931E]">ശ്രീ പഴുവില്‍ ത്രേതായുഗ മൂർത്തിയുടെ</span>{" "}
            ഭഗവത് സാന്നിധ്യത്തിൽ രാമായണത്തിൽ താങ്കളുടെ ജീവിത ഭാഗം
            അന്വേഷിക്കുകയാണ് ഈ ജീവിത ദർശനത്തിൽ നിമിത്തങ്ങളും സൂചനകളും
            ഉത്തരങ്ങളും ആയി ദർശനം നൽകുന്നത് മഹാരാമായണം തന്നെ
          </p>
          <button className="bg-[#FF8600] p-3 lg:p-5 text-xs lg:text-base rounded-4xl mt-10 lg:mt-20 font-bold">
            കൂടുതൽ അറിയുക
          </button>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <img
            src={bookImage}
            alt="Image of Lord Ganesh"
            className="h-40 lg:h-56"
          />
        </div>
      </div>
    </div>
  );
}

export default Home6;
