import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DonationForm from "../Components/Donation Components/DonationForm";
import { useNavigate } from "react-router-dom";

function Donation() {

    const navigate = useNavigate();

    let formText = "സംഭാവന ചെയ്യുക";

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-5 lg:p-10 gap-y-3 lg:gap-y-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#FC931E] text-center lg:leading-15">
          ക്ഷേത്ര സംരക്ഷണം ആപത്തുകളെ തടയുന്നു, കരുത്തേകാം പ്രാർത്ഥനകൾക്ക്.
        </h2>
        <p className="text-xs lg:text-sm text-[#00000099]">
          We are accepting all kinds of donations, feel free to donate if you
          support our cause
        </p>
      </div>
      <DonationForm text={formText}/>
      <div className="flex flex-col items-center gap-y-5 my-3 lg:my-10">
        <button onClick={() => navigate("/donations/id")} className="border-5 border-[#FC931E] p-3 lg:p-5 rounded-4xl lg:text-xl font-bold w-[90%] lg:w-[60%] cursor-pointer hover:bg-[#fc941e3c] transition duration-300">അമ്പല പുനരുദ്ധാരണത്തിലേക്ക്ഉദാരമായ സംഭാവനകൾ നൽകാം</button>
        <button onClick={() => navigate("/donations/id")} className="border-5 border-[#FC931E] p-3 lg:p-5 rounded-4xl lg:text-xl font-bold w-[90%] lg:w-[60%] cursor-pointer hover:bg-[#fc941e3c] transition duration-300">അമ്പലക്കുള നിർമ്മാണത്തിലേക്ക് ഉദാരമായ സംഭാവനകൾ നൽകാം</button>
      </div>
      <Footer />
    </div>
  );
}

export default Donation;
