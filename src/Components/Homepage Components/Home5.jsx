import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";


function InfoCard({ title, route }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center rounded-2xl border-2 border-[#FC931E] h-auto w-full lg:w-[30vw]">
      <h3
        className="p-2 font-extrabold text-lg lg:text-xl xl:text-2xl text-center cursor-pointer"
        onClick={() => navigate(`/vazhipadu/${route}`)}
      >
        {title}
      </h3>
    </div>
  );
}

function Home5() {
  const [specialVazhipadData, setSpecialVazhipadData] = useState([]);
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      let vazhipad_category = "special_vazhipad";

      const response = await axiosInstance.post("/vazhipad/showvazhipad", {
        vazhipad_category,
      });

      if (response.status === 200) {
        setSpecialVazhipadData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching Special Vazhipad : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topSectionData = specialVazhipadData.slice(0, 2);
  const bottomSectionData = specialVazhipadData.slice(2, 4);

  return (
    <div className="p-10 space-y-10">
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between">
        {topSectionData.map((item, index) => (
          <InfoCard key={index} title={item.vazhipad_name} route={item.vazhipad_id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-[#FC931E] text-lg lg:text-xl xl:text-2xl font-extrabold">
          എല്ലാ മാസവും പൗർണമി പൂജ, അമാവാസി പൂജ
        </h2>
      </div>
      <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between">
        {bottomSectionData.map((item, index) => (
          <InfoCard key={index} title={item.vazhipad_name} route={item.vazhipad_id} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
        <button
          onClick={() => navigate("/vazhipadu")}
          className="bg-[#FF8600] px-10 py-5 rounded-3xl text-base lg:text-xl xl:text-2xl  font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300"
        >
          വഴിപാടുകൾക്കായി
        </button>
        <button
          onClick={() => navigate("/abhishekangal")}
          className="bg-[#FF8600] px-10 py-5 rounded-3xl text-base lg:text-xl xl:text-2xl  font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300"
        >
          അഭിഷേകങ്ങൾക്കായി
        </button>
      </div>
    </div>
  );
}

export default Home5;
