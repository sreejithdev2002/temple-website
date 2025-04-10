import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "../../Styles/calenderStyles.css";

function AstrologyForm() {
  const [value, setValue] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(dayjs(new Date()).format('DD-MM-YYYY'));

  useEffect(() => {
    setFormattedDate(dayjs(value).format('DD-MM-YYYY'));
  }, [value]);
  

  const Nakshathrams = [
    { value: "ashwathi", label: "അശ്വതി" },
    { value: "bharani", label: "ഭരണി" },
    { value: "karthika", label: "കാർത്തിക" },
    { value: "rohini", label: "റോഹിണി" },
    { value: "makayiram", label: "മകയിരം" },
    { value: "thiruvathira", label: "തിരുവാതിര" },
    { value: "punartham", label: "പുനർതം" },
    { value: "pooyam", label: "പൂയം" },
    { value: "ayilyam", label: "ആയില്യം" },
    { value: "makam", label: "മകം" },
    { value: "pooram", label: "പൂരം" },
    { value: "uthram", label: "ഉത്രം" },
    { value: "atham", label: "അത്തം" },
    { value: "chithira", label: "ചിതിര" },
    { value: "chothi", label: "ചോതി" },
    { value: "vishakham", label: "വിശാഖം" },
    { value: "anizham", label: "അനിഴം" },
    { value: "thrikketta", label: "തൃക്കേട്ട" },
    { value: "moolam", label: "മൂലം" },
    { value: "pooradam", label: "പൂരാടം" },
    { value: "uthradam", label: "ഉത്രാടം" },
    { value: "thiruvonam", label: "തിരുവോണം" },
    { value: "avittam", label: "അവിട്ടം" },
    { value: "chathayam", label: "ചതയം" },
    { value: "pooruruttathi", label: "പൂരുരുട്ടാതി" },
    { value: "uthruttathi", label: "ഉത്രട്ടാതി" },
    { value: "revathi", label: "രേവതി" },
  ];

  return (
    <div className="p-10">
      <form className="flex flex-col items-center justify-center gap-y-3">
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ENTER NAME:
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ENTER NAKSHATHRAM:
          </label>
          <select className="border-2 text-sm md:text-base  py-2 px-5 border-[#606060] rounded-md w-[50vw]">
            {Nakshathrams.map((nakshatram) => (
              <option key={nakshatram.value} value={nakshatram.value}>
                {nakshatram.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ENTER BIRTHDAY:
          </label>
          <div className="w-[50vw] ">
            <Calendar
              onChange={setValue}
              value={value}
              className="rounded-lg border-none px-1 text-sm"
            />
            <p>{formattedDate}</p>
          </div>
          {/* <input
            type="date"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          /> */}
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            CONTACT NUMBER:
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ADDRESS:
          </label>
          <textarea className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]" />
        </div>
        <button className="rounded-4xl bg-[#FC931E] text-white w-[30%] sm:w-[20%] lg:w-[10%] py-3">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default AstrologyForm;
