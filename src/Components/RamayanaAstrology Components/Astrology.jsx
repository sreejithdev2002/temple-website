import BookImage from "../../assets/book.png";

function Astrology() {
  return (
    <div className="flex flex-col items-center">
      <img src={BookImage} alt="" className="w-auto h-48 self-center lg:self-end" />
      <div className="p-10 space-y-10">
        <p className="font-bold leading-7 lg:leading-10 text-xs sm:text-base lg:text-xl">
          <span className="text-[#FC931E] text-sm sm:text-lg lg:text-2xl">രാമായണ ജ്യോതിഷം</span> ജീവിതത്തിനുള്ള
          മാർഗ്ഗദർശനം നൽകുന്ന ഇതിഹാസ ചിന്തകളാണ്.
        </p>
        <p className="font-bold leading-7 lg:leading-10 text-xs sm:text-base lg:text-xl">
          ഭഗവാൻ ശ്രീരാമന്റെ ജീവിത ദർശനം അനുസരിച്ച്, മാനസിക സമാധാനവും സാമ്പത്തിക
          അഭിവൃദ്ധിയും നേടാൻ ഇത് സഹായിക്കുന്നു. പരമ്പരാഗത
          ജ്യോതിഷശാസ്ത്രത്തിനൊപ്പം രാമായണത്തിലെ കഥകളെയും ദർശനങ്ങളെയും ചേർത്ത്,
          ജീവിതത്തിലെ പ്രയാസങ്ങൾ മറികടക്കുന്നതിനുള്ള പരിഹാര മാർഗങ്ങൾ നൽകുന്നു.
          കുടുംബ കലഹം, ശത്രു ദോഷം, ധനനഷ്ടം എന്നിവയിൽ നിന്ന് മോചനം നേടാൻ രാമായണ
          ജ്യോതിഷം ശക്തമായ മാർഗ്ഗനിർദ്ദേശങ്ങൾ നൽകുന്നു.
        </p>
        <p className="text-[#FC931E] font-bold leading-7 lg:leading-10 text-xs sm:text-base lg:text-xl">
          ഭഗവാൻ ശ്രീരാമന്റെയും സീതാദേവിയുടെയും അനുഗ്രഹത്താൽ ഭക്തജനങ്ങൾക്ക്
          മനസ്സാന്ത്വനവും വിജയകരമായ ജീവിതവും പ്രാപിക്കാനാകട്ടെ.
        </p>
      </div>
    </div>
  );
}

export default Astrology;
