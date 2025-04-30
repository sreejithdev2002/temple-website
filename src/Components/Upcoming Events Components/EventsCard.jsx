function EventsCard({ data }) {
  const imageApiURL = import.meta.env.VITE_API_IMAGE_URL;

  return (
    <div className="flex flex-col items-center m-5 lg:m-10 w-[80vw] gap-y-3">
      <h2 className="text-4xl text-orange-400 font-bold">
        {data.event_title.charAt(0).toUpperCase() + data.event_title.slice(1)}
      </h2>
      <img
        src={`${imageApiURL}${data.event_image}`}
        alt={data.event_title}
        className="border-5 border-amber-500 rounded-2xl h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] w-[75vw] lg:w-[70vw]"
      />
      <div className="flex flex-col bg-gray-200 p-3 rounded-2xl">
        <h2 className="font-bold text-orange-400">INFO</h2>
        <p className="min-w-[70vw]  text-sm lg:text-base">
          {data.event_details}
        </p>
        <br />
        <h3 className="font-bold">
          DATE : {new Date(data.event_date).toLocaleDateString("en-GB")}
        </h3>
        <h3 className="font-bold">TIME : {data.event_time} </h3>
      </div>
    </div>
  );
}

export default EventsCard;
