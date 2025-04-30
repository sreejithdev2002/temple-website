import GodsImage from "../GodsImage";

function Vazhipadukal() {
  return (
    <div className="flex justify-between p-10">
      <div className="space-y-3 flex flex-col justify-around">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-[#FC931E] font-bold">
          വഴിപാടുകൾ
        </h1>
        <p className="text-sm lg:text-lg xl:text-xl font-bold w-[50vw] md:w-[60vw] lg:w-[60vw] xl:w-[75vw]">
          ശ്രീരാമസ്വാമിയ്ക്ക് വഴിപാടുകൾ (പ്രതിഷ്ഠ, പൂജ, നിവേദ്യംതുടങ്ങിയവ)
          ചെയ്യുന്നതിന് പല കാരണങ്ങളുണ്ട്. ഇവ ആശയപരവും ആത്മീയവും
          സാംസ്കാരികവുമായപ്രാധാന്യം വഹിക്കുന്നു:
        </p>
      </div>
      <GodsImage />
    </div>
  );
}

export default Vazhipadukal;
