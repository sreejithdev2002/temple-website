import DonationForm from "../Components/Donation Components/DonationForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function ParticularDonation() {
    let formText = "ഒരു  തുക തിരഞ്ഞെടുക്കുക"
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-5 lg:p-10 gap-y-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          അമ്പലക്കുള നിർമ്മാണത്തിലേക്ക് ഉദാരമായ സംഭാവനകൾ നൽകാം
        </h2>
        <p className="text-xs lg:text-sm text-gray-600">
          We are accepting all kinds of donations, feel free to donate if you
          support our cause
        </p>
        <p className="mt-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-7 lg:leading-10">
          ഭഗവാൻ ശ്രീരാമന്റെ ജീവിത ദർശനം അനുസരിച്ച്, മാനസിക സമാധാനവും സാമ്പത്തിക
          അഭിവൃദ്ധിയും നേടാൻ ഇത് സഹായിക്കുന്നു. പരമ്പരാഗത
          ജ്യോതിഷശാസ്ത്രത്തിനൊപ്പം രാമായണത്തിലെ കഥകളെയും ദർശനങ്ങളെയും ചേർത്ത്,
          ജീവിതത്തിലെ പ്രയാസങ്ങൾ മറികടക്കുന്നതിനുള്ള പരിഹാര മാർഗങ്ങൾ നൽകുന്നു.
          കുടുംബ കലഹം, ശത്രു ദോഷം, ധനനഷ്ടം എന്നിവയിൽ നിന്ന് മോചനം നേടാൻ രാമായണ
          ജ്യോതിഷം ശക്തമായ മാർഗ്ഗനിർദ്ദേശങ്ങൾ നൽകുന്നു.
        </p>
      </div>
      <DonationForm text={formText}/>
      <Footer />
    </div>
  );
}

export default ParticularDonation;
