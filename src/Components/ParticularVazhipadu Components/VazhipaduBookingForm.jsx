import { SlCalender } from "react-icons/sl";
import { RxCheckbox } from "react-icons/rx";
import { useState } from "react";

function VazhipaduBookingForm() {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="p-10 my-10">
      <form className="flex flex-col items-center justify-center gap-y-5">
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പേര്
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            നക്ഷത്രം
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            address
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            കോൺടാക്റ്റ് നമ്പർ
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ജനന തീയതി
          </label>
          <span className="w-[40vw]">
            <SlCalender size={30} />
          </span>
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പൂജ ബുക്കിംഗ് തിയതി
          </label>
          <span className="w-[40vw]">
            <SlCalender size={30} />          </span>
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പ്രസാദം പാഴ്സൽ
          </label>
          <span className="flex items-center w-[40vw]">
            <RxCheckbox
              size={30}
              color={checked ? "green" : "black"}
              onClick={handleChecked}
            />
            {checked && (
              <span className="mx-10 text-[#008000]">പ്രസാദം Selected</span>
            )}
          </span>
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl"></label>
          <textarea
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>
        <div className="flex flex-col border-2 border-[#60606046] rounded-md p-3 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] gap-y-2 font-semibold">
          <h3 className="text-start text-[#1a1a1ab3] text-sm lg:text-base">Date 12/03/2025</h3>
          <h2 className="text-2xl lg:text-4xl text-center">$ 2000/-</h2>
          <button className="text-sm lg:text-base w-[100%] bg-orange-400 text-white rounded-md py-1 px-3">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default VazhipaduBookingForm;
