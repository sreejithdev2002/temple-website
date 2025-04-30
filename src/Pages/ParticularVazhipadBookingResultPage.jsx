import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";

function ParticularVazhipadBookingResultPage() {
  const { vazhipadu } = useParams();

  const [vazhipaduData, setVazhipaduData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.post(
        "/vazhipad/particularbookingdetails",
        {
          vazhipad_booking_id: vazhipadu,
        }
      );

      if (response.status === 200) {
        setVazhipaduData(response.data.data[0]);
        setLoading(false);
        console.log("Vazhipadu Results : ", response.data.data[0]);
      }
    } catch (error) {
      console.error("Error fetching vazhipadu results data : ", error);
      setLoading(false);
      alert("Error fetching vazhipadu results data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      {!loading ? (
        <>
          <div className="flex flex-col p-10 space-y-5">
            <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#FC931E] font-bold">
              വഴിപാടുകൾ
            </h2>

            <div className="flex flex-col items-center space-y-20">
              <div className="flex items-center">
                <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl text-[#FC931E] font-bold w-[70vw]">
                  {vazhipaduData.vazhipad_name || "N/A"}
                </h2>
                {/* {data.vazhipad_category === "special_god" && (
              <span className="rounded-4xl text-xs bg-green-100 text-green-500 p-2">
                Special Vazhipad
              </span>
            )} */}
              </div>
              <div className="flex flex-col-reverse lg:flex-row items-start lg:max-h-[30vh]">
                <p className="text-base lg:text-lg w-[80vw] pr-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt nihil repellendus atque sunt expedita quas rem
                  necessitatibus recusandae consequuntur? Mollitia corporis
                  necessitatibus, voluptates odit quibusdam iusto temporibus
                  doloribus non omnis?
                </p>
                <img src="" alt="" className="w-auto h-[30vh] lg:h-[40vh]" />
              </div>
            </div>
          </div>
          <div className="px-10 mb-10">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  പേര് :
                </label>
                <h2 className="text-xl w-[30vw]">{vazhipaduData.user_name}</h2>
              </div>

              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  നക്ഷത്രം :
                </label>
                <h2 className="text-xl w-[30vw]">
                  {vazhipaduData.birth_start}
                </h2>
              </div>

              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  address :
                </label>
                <h2 className="text-xl w-[30vw]">
                  {vazhipaduData.user_address}
                </h2>
              </div>

              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  കോൺടാക്റ്റ് നമ്പർ :
                </label>
                <h2 className="text-xl w-[30vw]">{vazhipaduData.contact_no}</h2>
              </div>

              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  ജനന തീയതി :
                </label>
                <h2 className="text-xl w-[30vw]">
                  {" "}
                  {new Date(vazhipaduData.date_of_birth)
                    .toLocaleDateString("en-GB")
                    .replaceAll("/", "-")}
                </h2>
              </div>

              <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  പൂജ ബുക്കിംഗ് തിയതി :
                </label>
                <h2 className="text-xl w-[30vw]">
                  {" "}
                  {new Date(vazhipaduData.booking_date)
                    .toLocaleDateString("en-GB")
                    .replaceAll("/", "-")}
                </h2>
              </div>

              {vazhipaduData.vazhipadu_parcel === 1 && (
                <div className="flex space-x-10 mb-5 items-center">
                <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
                  പ്രസാദം അഡ്രസ്സ് : 
                </label>
                <p className="text-xl w-[30vw]">
                    {vazhipaduData.parcel_address}
                </p>
              </div>
              )}

              <div className="flex flex-col border-2 border-[#60606046] rounded-md p-3 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] gap-y-2 font-semibold">
                <h3 className="text-start text-[#1a1a1ab3] text-sm lg:text-base">
                  {new Date().toISOString().split("T")[0]}
                </h3>
                <h2 className="text-2xl lg:text-4xl text-center">
                  ₹ {vazhipaduData.payment_amount}/-
                </h2>
                <button
                  type="submit"
                  className="text-sm lg:text-base w-[100%] bg-orange-400 text-white rounded-md py-1 px-3"
                >
                  Download Reciept
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[80vh] flex items-center justify-center">
          <p className="font-bold text-3xl">Loading...</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ParticularVazhipadBookingResultPage;
