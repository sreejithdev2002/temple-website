function Vazhipadukal2() {
  const vazhipaduData = [
    "സഹസ്ര നാമ അർച്ചന",
    "അഷ്ടോത്തര നാമ അർച്ചന",
    "ഭാഗ്യസൂക്തം",
    "പുരുഷസൂക്തം",
    "ഐക്കമത്യ സൂക്തം",
    "കുങ്കുമാർച്ചന",
    "വെറ്റില മാല",
    "നാരങ്ങ മാല",
    "വടമാല",
    "തുളസിമാല",
    "ഒറ്റ മാല",
    "കറുകമാല",
    "നെയ് വിളക്ക്",
    "പാൽപ്പായസം",
    "നെയ്പായസം",
    "കട്ടിപ്പായസം",
    "ശർക്കര പായസം",
    "കദളിപ്പഴ പായസം",
    "അവിൽ നിവേദ്യം",
    "വെള്ളനിവേദ്യം",
    "മലർനിവേദിയം",
    "അമൃത നിവേദ്യം",
    "പൊട്ടുകടല നിവേദ്യം",
    "വെണ്ണ നിവേദ്യം",
    "തേൻ നിവേദ്യം",
    "താബൂല നിവേദ്യം",
    "നെയ്യപ്പം",
    "നാഗത്തിന് പാലും നൂറും",
    "കദളിപ്പഴക്കുല സമർപ്പണം",
    "അമ്പം വില്ലും സമർപ്പണം",
    "അമ്പും വില്ലും സമർപ്പണം",
    "ഗദ സമർപ്പണം",
    "കളഭം ചാർത്ത് അരക്കാപ്പ്",
    "കളഭം ചാർത്ത് മുഴുക്കാപ്പ്",
    "ശ്രീരാമ സീതാദേവിക്ക് കളഭൻ ചാർത്ത്- തിരുമുഖം",
    "തുലാഭാരം",
    "ഒരു പാട്ട എണ്ണ",
    "ചെരട്",
    "ഗണപതിഹോമം",
    "മൃത്യുഞ്ജ ഹോമം",
    "സുദർശനം",
    "ശനിദോഷ നിവാരണ പൂജ",
    "നവഗ്രഹ പൂജ",
    "നക്ഷത്ര പൂജ",
    "ഒരു ദിവസത്തെ പൂജ",
    "ചുറ്റുവിളക്ക് ചെറുത്",
    "ചുറ്റുവിളക്ക് വലുത്",
    "നിറമാല",
    "കെടാവിളക്ക്",
    "പൗർണമി പൂജ",
    "അമാവാസി പൂജ",
    "ഉദയാസ്തമന പൂജ",
    "പട്ട് സമർപ്പണം",
    "താലി സമർപ്പണം",
  ];

  return (
    <div className="p-10 space-y-20 lg:space-y-30 xl:space-y-40">
      <h2 className="text-[#FC931E] lg:text-lg xl:text-xl font-bold text-center">
        വഴിപാടുകൾ ഭക്തിയുടെ ബാഹ്യപ്രകടനമാണ്. ഇത് ആത്മീയ ശാന്തിയും
        ലക്ഷ്യസാധ്യതയും നൽകുന്നു.
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5 lg:gap-x-20 xl:gap-x-10 lg:gap-y-10 w-full">
          {vazhipaduData.map((item, index) => (
            <button
              key={index}
              className="p-3 lg:p-5 bg-[#FC931E] text-white rounded-4xl font-bold "
            >
              {item}
            </button>
          ))}

          {/* <button className="p-5 bg-[#FC931E] text-white rounded-4xl text-lg font-bold">
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

export default Vazhipadukal2;
