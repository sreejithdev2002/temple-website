import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";

function Vazhipadukal2() {
  const navigate = useNavigate();

  const [vazhipadukal, setVazhipadukal] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let vazhipad_category = "general_vazhipad";
      const response = await axiosInstance.post("/vazhipad/showvazhipad", {
        vazhipad_category,
      });

      if (response.status === 200) {
        setVazhipadukal(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Vazhipadukal : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-[20vh] my-20">
        <h1 className="text-5xl font-semibold">Loading...</h1>
      </div>
    );

  return (
    <div className="p-10 space-y-20 lg:space-y-30 xl:space-y-40">
      <h2 className="text-[#FC931E] lg:text-lg xl:text-xl font-bold text-center">
        വഴിപാടുകൾ ഭക്തിയുടെ ബാഹ്യപ്രകടനമാണ്. ഇത് ആത്മീയ ശാന്തിയും
        ലക്ഷ്യസാധ്യതയും നൽകുന്നു.
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 xl:gap-x-10 lg:gap-y-10 w-full">
          {vazhipadukal.map((item, index) => (
            <button
              key={index}
              className="p-3 lg:p-5 bg-[#FC931E] text-white rounded-4xl font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300"
              onClick={() => navigate(`/vazhipadu/${item.vazhipad_id}`)}
            >
              {item.vazhipad_name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vazhipadukal2;
