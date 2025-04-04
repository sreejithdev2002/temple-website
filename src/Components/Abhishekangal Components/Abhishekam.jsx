import GodsImage from "../GodsImage";

function Abhishekam() {
  return (
    <div className="flex justify-between p-10">
      <div className="space-y-3 flex flex-col justify-around">
        <h1 className="text-2xl lg:text-4xl text-[#FC931E] font-bold">അഭിഷേകങ്ങൾ</h1>
        <p className="text-sm lg:text-xl font-bold w-[50vw] lg:w-[75vw]">
          അഭിഷേകങ്ങൾ എന്നത് ദൈവികമൂർത്തിയെ പുണ്യജലം, പഞ്ചാമൃതം, തുളസി, ചന്ദനം
          തുടങ്ങിയവ കൊണ്ട് സ്നാനം ചെയ്യിക്കുന്ന ഒരു പുണ്യാചാരമാണ്. ഇതിന്
          ആധ്യാത്മികവും ശാസ്ത്രീയവുമായ പ്രാധാന്യമുണ്ട്.
        </p>
      </div>
      <GodsImage />
    </div>
  );
}

export default Abhishekam;
