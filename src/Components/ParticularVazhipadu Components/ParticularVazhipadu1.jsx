import { useParams } from "react-router-dom";
import claypot from "../../assets/Vazhipadu/claypot.png";

function ParticularVazhipadu1() {

  let {vazhipadu} = useParams();

  return (
    <div className="flex flex-col p-10 space-y-5">
      <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#FC931E] font-bold">
        വഴിപാടുകൾ
      </h2>

      <div className="space-y-5">
        <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl text-[#FC931E] font-bold">
          {vazhipadu}
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:max-h-[30vh]">
          <p className="text-base lg:text-lg">
            <strong>ശ്രീ ഹനുമാൻ സ്വാമി</strong> ശ്രീരാമഭക്തനായ ഹനുമാൻ
            സിംഹശക്തിയും അനന്തഭക്തിയും ദയാമയനുമാണ്. വായുപുത്രനായി ജനിച്ച ഹനുമാൻ
            അതുല്യബലത്തിനുടമയാണ്. ഭക്തർക്ക് പ്രത്യക്ഷനായി പ്രശ്നങ്ങൾ
            പരിഹരിക്കുന്ന ദേവനായ ഹനുമാൻ, ബുദ്ധി, ബലം, ധൈര്യം, വിജയം എന്നിവ
            നൽകുന്നു.{" "}
            <strong>
              ഹനുമാൻ ചാലിസ പാരായണം അവന്റെ അനുഗ്രഹം നേടാൻ സഹായിക്കും.
            </strong>
          </p>
          <img
            src={claypot}
            alt="Clay Pot Image."
            className="w-auto h-[30vh] lg:h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default ParticularVazhipadu1;
