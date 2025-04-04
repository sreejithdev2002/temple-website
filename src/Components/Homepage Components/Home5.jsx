import { useNavigate } from "react-router-dom";

function Home5() {

  const navigate = useNavigate();

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between">
        <div className="flex flex-col items-center rounded-2xl border-2 border-[#FC931E] h-auto w-[30vw]">
          <h3 className="p-2 font-extrabold text-2xl text-center">കാര്യ സാധ്യത്തിന്</h3>
          <hr className="w-full bg-[#FC931E] h-[2px] border-0" />
          <h3 className="p-2 font-extrabold text-2xl  text-center">
            സുന്ദരകാണ്ഡ പാരായണം കദ്ദളി ക്കുല സമർപ്പണം
          </h3>
        </div>
        <div className="flex flex-col items-center rounded-2xl border-2 border-[#FC931E] h-auto w-[30vw]">
          <h3 className="p-2 font-extrabold text-2xl text-center">അപമൃത്യൂദോഷത്തിന്</h3>
          <hr className="w-full bg-[#FC931E] h-[2px] border-0" />
          <h3 className="p-2 font-extrabold text-2xl  text-center">
            ഹനുമാൻ സ്വാമിക്ക് കോടി സമർപ്പണം
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="text-[#FC931E] text-2xl font-extrabold">
          എല്ലാ മാസവും പൗർണമി പൂജ, അമാവാസി പൂജ
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center rounded-2xl border-2 border-[#FC931E] h-auto w-[30vw]">
          <h3 className="p-2 font-extrabold text-2xl text-center"> നവാഭിഷേകം</h3>
          <hr className="w-full bg-[#FC931E] h-[2px] border-0" />
          <h3 className="p-2 font-extrabold text-2xl  text-center">
            ഹനുമാൻസ്വാമിക്ക് <br /> ശ്രീരാമസ്വാമി-സീതാദേവി
          </h3>
        </div>
        <div className="flex flex-col items-center rounded-2xl border-2 border-[#FC931E] h-auto w-[30vw]">
          <h3 className="p-2 font-extrabold text-2xl text-center">അമാവാസി പൂജയും കലശവും</h3>
          <hr className="w-full bg-[#FC931E] h-[2px] border-0" />
          <h3 className="p-2 font-extrabold text-2xl  text-center">
            വിഷ്ണുമായ <br /> ഭദ്രകാളി <br /> ഭുവനേശ്വരി
          </h3>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={() => navigate("/vazhipadu")} className="bg-[#FF8600] px-10 py-5 rounded-3xl text-2xl font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300">വഴിപാടുകൾക്കായി</button>
        <button onClick={() => navigate("/abhishekangal")} className="bg-[#FF8600] px-10 py-5 rounded-3xl text-2xl font-bold cursor-pointer hover:bg-[#ff8800c9] transition duration-300">അഭിഷേകങ്ങൾക്കായി</button>
      </div>
    </div>
  );
}

export default Home5;
