function Abhishekangal2() {
  const abhishekangalData = [
    "തേൻ",
    "നെയ്യ്",
    "കരിക്ക്",
    "കളഭം",
    "കുങ്കുമം",
    "ഭസ്മം",
    "പാല്",
    "പഞ്ചാമൃതം",
    "പഞ്ചഗവ്യം",
    "നവഗാഭിഷേകം",
  ];

  return (
    <div className="p-10 space-y-20 lg:space-y-40">
      <h2 className="text-[#FC931E] lg:text-xl font-bold text-center">
        അഭിഷേകം ഒരു ആധ്യാത്മിക ശുദ്ധീകരണ പ്രക്രിയ ആണ്. ഇത് ദേവന്റെ ശക്തി
        വർദ്ധിപ്പിക്കുകയും, ഭക്തരുടെ മനസ്സിൽ ശുദ്ധിയും ഭക്തിയും പകരുകയും
        ചെയ്യുന്നു.
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 lg:gap-x-80 lg:gap-y-10 w-full">
          {abhishekangalData.map((item, index) => (
            <button
              key={index}
              className="p-3 lg:p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold"
            >
              {item}
            </button>
          ))}

          {/* <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഉത്സവ ബലി
          </button> */}

          {/* <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ക്ഷേത്ര പ്രദക്ഷിണം
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഹോമ-യജ്ഞങ്ങൾ
          </button>

          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഉത്സവ ബലി
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ക്ഷേത്ര പ്രദക്ഷിണം
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഹോമ-യജ്ഞങ്ങൾ
          </button>

          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഉത്സവ ബലി
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ക്ഷേത്ര പ്രദക്ഷിണം
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഹോമ-യജ്ഞങ്ങൾ
          </button>

          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഉത്സവ ബലി
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ക്ഷേത്ര പ്രദക്ഷിണം
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഹോമ-യജ്ഞങ്ങൾ
          </button>

          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഉത്സവ ബലി
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ക്ഷേത്ര പ്രദക്ഷിണം
          </button>
          <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
            ഹോമ-യജ്ഞങ്ങൾ
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Abhishekangal2;
