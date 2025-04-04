import image1 from "../../assets/image1.png";
import image2 from "../../assets/image3.png";
import image3 from "../../assets/image2.png";

function Home3() {
  return (
    <div className="flex flex-col p-5 lg:p-10">
      <h2 className="font-bold text-base lg:text-lg text-[#FC931E] mb-3">
        THRETHAYUGA MOORTHI TEMPLE
      </h2>
      <h3 className="text-2xl lg:text-4xl font-bold mb-10">UPCOMING  EVENTS</h3>
      <div className="flex justify-center gap-x-5 my-3">
        <div>
          <img
            className="border-5 border-[#FC931E] rounded-2xl"
            src={image1}
            alt=""
          />
          <p className="text-center font-bold text-xs lg:text-[20px] mt-3">
            12-FEB-2025 മഹാലക്ഷ്മി പൂജ
          </p>
        </div>
        <div>
          <img
            className="border-5 border-[#FC931E] rounded-2xl"
            src={image2}
            alt=""
          />
          <p className="text-center font-bold text-xs lg:text-[20px] mt-3">
            സത്യനാരായണ പൂജ
          </p>
        </div>
        <div>
          <img
            className="border-5 border-[#FC931E] rounded-2xl"
            src={image3}
            alt=""
          />
          <p className="text-center font-bold text-xs lg:text-[20px] mt-3">
            ഭഗവതി പൂജ
          </p>
        </div>
      </div>
      <button className="bg-[#FC931E] text-xs lg:text-base font-medium px-10 py-3 lg:my-3 rounded-4xl text-white self-center">
        View All
      </button>
    </div>
  );
}

export default Home3;
