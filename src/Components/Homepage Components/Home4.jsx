import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

function Home4() {
  const [specialGodsData, setSpecialGodsData] = useState([]);
  const imageApiURL = import.meta.env.VITE_API_IMAGE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post("/vazhipad/showvazhipad", {
          vazhipad_category: "special_god",
        });

        if (response.status === 200) {
          setSpecialGodsData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching Special Gods Data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-5 py-10 flex flex-col overflow-hidden">
      <h2 className="text-[#FC931E] text-2xl lg:text-3xl xl:text-4xl font-bold mb-8">
        പ്രധാന ദേവതകൾ
      </h2>

      {specialGodsData.length > 0 && (
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable
          emulateTouch
          stopOnHover
          transitionTime={1000}
          axis="horizontal"
        >
          {specialGodsData.map((data, index) => (
            <div
              key={data._id || index}
              className="min-w-full flex flex-col px-4"
            >
              <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-4">
                <p className="lg:text-xl xl:text-2xl w-[70vw] text-start">
                  {data.vazhipad_details}
                </p>
                <div className=" h-[30vh] flex items-center justify-center">
                  <img
                    src={`${imageApiURL}${data.vazhipad_image}`}
                    alt="Deity"
                    className="h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-5">
                <button
                  className="bg-[#FF8600] text-sm xl:text-base p-3 rounded-xl h-[8vh] text-white font-bold flex items-center justify-center text-center cursor-pointer z-10"
                  onClick={() => navigate(`/vazhipadu/${data.vazhipad_id}`)}
                >
                  {data.vazhipad_name}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Home4;
