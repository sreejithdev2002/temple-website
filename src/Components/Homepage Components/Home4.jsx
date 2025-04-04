// import durgaImage from "../../assets/Homepage/durga.png";
// import bhadrakaliImage from "../../assets/Homepage/bhadrakali.png";
// import godessImage from "../../assets/Homepage/godess.png";
// import ganeshImage from "../../assets/Homepage/ganesh.png";
// import snakeImage from "../../assets/Homepage/snake.png";
// import hanumanImage from "../../assets/ganesh.png";

// function Home4() {
//   const gridData = [
//     "സുന്ദരകാണ്ഡ പാരായണം",
//     "കുങ്കുമാർച്ചന0",
//     "എണ്ണ നിവേദ്യം",
//     "അവിൽ നിവേദ്യം",
//     "കദളിപ്പഴം നിവേദ്യം",
//     "വട മാല",
//     "നാരങ്ങ മാല",
//     "വെറ്റില മാല",
//   ];

//   return (
//     <div className="px-5 py-10">
//       <h2 className="text-[#FC931E] text-4xl font-bold">പ്രധാന ദേവതകൾ</h2>
//       <div className="flex my-3 items-start">
//         <p className="text-3xl">
//           <strong>ശ്രീ ഹനുമാൻ സ്വാമി</strong> ശ്രീരാമഭക്തനായ ഹനുമാൻ സിംഹശക്തിയും
//           അനന്തഭക്തിയും ദയാമയനുമാണ്. വായുപുത്രനായി ജനിച്ച ഹനുമാൻ
//           അതുല്യബലത്തിനുടമയാണ്. ഭക്തർക്ക് പ്രത്യക്ഷനായി പ്രശ്നങ്ങൾ പരിഹരിക്കുന്ന
//           ദേവനായ ഹനുമാൻ, ബുദ്ധി, ബലം, ധൈര്യം, വിജയം, danam എന്നിവ നൽകുന്നു.{" "}
//           <strong>ഹനുമാൻ ചാലിസ പാരായണം അനുഗ്രഹം നേടാൻ സഹായിക്കും.</strong>
//         </p>
//         <img src={hanumanImage} alt="" className="w-auto h-[30vh]" />
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
//         {gridData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#FF8600] p-3 rounded-4xl h-[8vh] text-white font-bold flex items-center justify-center text-center"
//           >
//             <p>{item}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home4;


import { useState, useEffect } from "react";
import durgaImage from "../../assets/Homepage/durga.png";
import bhadrakaliImage from "../../assets/Homepage/bhadrakali.png";
import godessImage from "../../assets/Homepage/godess.png";
import ganeshImage from "../../assets/Homepage/ganesh.png";
import snakeImage from "../../assets/Homepage/snake.png";
import hanumanImage from "../../assets/ganesh.png";

const deityImages = [hanumanImage, durgaImage, bhadrakaliImage, godessImage, ganeshImage, snakeImage];

function Home4() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % deityImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const gridData = [
    "സുന്ദരകാണ്ഡ പാരായണം",
    "കുങ്കുമാർച്ചനം",
    "എണ്ണ നിവേദ്യം",
    "അവിൽ നിവേദ്യം",
    "കദളിപ്പഴം നിവേദ്യം",
    "വട മാല",
    "നാരങ്ങ മാല",
    "വെറ്റില മാല",
  ];

  return (
    <div className="px-5 py-10 flex flex-col justify-between">
      <div>
        <h2 className="text-[#FC931E] text-2xl lg:text-4xl font-bold">പ്രധാന ദേവതകൾ</h2>
        <div className="flex flex-col-reverse lg:flex-row my-3 items-start">
          <p className="lg:text-3xl">
            <strong>ശ്രീ ഹനുമാൻ സ്വാമി</strong> ശ്രീരാമഭക്തനായ ഹനുമാൻ സിംഹശക്തിയും
            അനന്തഭക്തിയും ദയാമയനുമാണ്. വായുപുത്രനായി ജനിച്ച ഹനുമാൻ
            അതുല്യബലത്തിനുടമയാണ്. ഭക്തർക്ക് പ്രത്യക്ഷനായി പ്രശ്നങ്ങൾ പരിഹരിക്കുന്ന
            ദേവനായ ഹനുമാൻ, ബുദ്ധി, ബലം, ധൈര്യം, വിജയം, ദാനം എന്നിവ നൽകുന്നു.{" "}
            <strong>ഹനുമാൻ ചാലിസ പാരായണം അനുഗ്രഹം നേടാൻ സഹായിക്കും.</strong>
          </p>
          <img src={deityImages[currentImageIndex]} alt="Deity" className="w-auto h-[30vh] transition-opacity duration-1000 mb-5 lg:mb-0 ease-in-out" />
        </div>

        {/* Grid data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
          {gridData.map((item, index) => (
            <div
              key={index}
              className="bg-[#FF8600] text-sm lg:text-base p-2 lg:p-3 rounded-xl h-[6vh] lg:h-[8vh] text-white font-bold flex items-center justify-center text-center"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots at the bottom of the page */}
      <div className="flex justify-center mt-10">
        {deityImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentImageIndex === index ? "bg-[#FF8600]" : "bg-gray-400"
            } transition-all cursor-pointer`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home4;
