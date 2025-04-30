import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ParticularVazhipadu1 from "../Components/ParticularVazhipadu Components/ParticularVazhipadu1";
import VazhipaduBookingForm from "../Components/ParticularVazhipadu Components/vazhipaduBookingForm";
import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";

function ParticularVazhipadu() {
  let { vazhipadu } = useParams();

  const [particularVazhipad, setParticularVazhipad] = useState([]);
  const [particularVazhipadPrice, setParticularVazhipadPrice] = useState("");

  const fetchData = async () => {
    try {
      let vazhipad_id = vazhipadu;
      const response = await axiosInstance.post(
        "/vazhipad/particularvazhipad",
        {
          vazhipad_id,
        }
      );

      if (response.status === 200) {
        setParticularVazhipad(response.data.vazhipad);
        setParticularVazhipadPrice(response.data.vazhipad.vazhipad_price);
        console.log(response.data.vazhipad);
      }
    } catch (error) {
      console.error("Error fetching Particular Vazhipad : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <ParticularVazhipadu1 data={particularVazhipad} />
      <VazhipaduBookingForm price={particularVazhipadPrice} data={particularVazhipad} id={vazhipadu} />
      <Footer />
    </div>
  );
}

export default ParticularVazhipadu;
