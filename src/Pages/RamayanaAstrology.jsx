import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Astrology from "../Components/RamayanaAstrology Components/Astrology";
import AstrologyForm from "../Components/RamayanaAstrology Components/AstrologyForm";

function RamayanaAstrology() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center m-10 gap-y-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          രാമായണ ജ്യോതിഷം
        </h2>
        <p className="text-xs lg:text-sm text-gray-600">
          Get your astrology checked by a jyothsan
        </p>
      </div>
      <Astrology />
      <div className="bg-[#FC931E] p-5 my-3 sm:my-5 md:my-8 lg:my-20">
        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-center">
          നിങ്ങളുടെ വിശദാംശങ്ങൾ താഴെ പൂരിപ്പിക്കുക
        </h3>
      </div>
      <AstrologyForm />
      <Footer />
    </div>
  );
}

export default RamayanaAstrology;
