import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";

function Abhishekangal2() {
  const [abhishekangal, setAbhishekangal] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let vazhipad_category = "general_abhishekam";

      const response = await axiosInstance.post("/vazhipad/showvazhipad", {
        vazhipad_category,
      });

      if (response.status === 200) {
        setAbhishekangal(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Abhishekangal : ", error);
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
        അഭിഷേകം ഒരു ആധ്യാത്മിക ശുദ്ധീകരണ പ്രക്രിയ ആണ്. ഇത് ദേവന്റെ ശക്തി
        വർദ്ധിപ്പിക്കുകയും, ഭക്തരുടെ മനസ്സിൽ ശുദ്ധിയും ഭക്തിയും പകരുകയും
        ചെയ്യുന്നു.
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 xl:gap-x-10 lg:gap-y-10 w-full">
          {abhishekangal.map((item, index) => (
            <button
              key={index}
              className="p-3 lg:p-5 bg-[#FC931E] text-white rounded-4xl font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300"
            >
              {item.vazhipad_name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Abhishekangal2;
