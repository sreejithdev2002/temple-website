function ParticularVazhipadu1({ data }) {
  const imageApiURL = import.meta.env.VITE_API_IMAGE_URL;

  console.log(data.vazhipad_category);

  return (
    <div className="flex flex-col p-10 space-y-5">
      <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#FC931E] font-bold">
        വഴിപാടുകൾ
      </h2>

      <div className="flex flex-col items-center space-y-20">
        <div className="flex items-center">
          <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl text-[#FC931E] font-bold w-[70vw]">
            {data.vazhipad_name}
          </h2>
          {data.vazhipad_category === "special_god" && (
            <span className="rounded-4xl text-xs bg-green-100 text-green-500 p-2">
              Special Vazhipad
            </span>
          )}
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-start lg:max-h-[30vh]">
          <p className="text-base lg:text-lg w-[80vw] pr-2">
            {data.vazhipad_details}
          </p>
          <img
            src={`${imageApiURL}${data.vazhipad_image}`}
            alt={data.vazhipad_name}
            className="w-auto h-[30vh] lg:h-[40vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default ParticularVazhipadu1;
