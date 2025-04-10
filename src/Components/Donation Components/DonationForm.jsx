function DonationForm({text}) {
  return (
    <div className="p-10">
      <form className="flex flex-col items-center justify-center gap-y-3">
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            NAME
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            CONTACT NUMBER
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            ADDRESS
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="text-[#FC931E] font-bold text-lg lg:text-2xl">{text}</h3>
          <input
            type="text"
            className="border border-black bg-[#EAE8DF] py-2 px-5"
          />
          <button className="rounded-4xl bg-[#FC931E] text-white w-[40%] py-3">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default DonationForm;
