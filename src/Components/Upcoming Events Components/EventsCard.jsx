import eventImage from "../../assets/Events/event.png";

function EventsCard() {
  return (
    <div className="flex flex-col items-center m-5 lg:m-10 w-[80vw] gap-y-3">
      <h2 className="text-4xl text-orange-400 font-bold" >EVENT 1</h2>
      <img src={eventImage} alt="" className="border-5 border-amber-500 rounded-2xl" />
      <div className="flex flex-col bg-gray-200 p-3 rounded-2xl">
        <h2 className="font-bold text-orange-400">INFO</h2>
        <p className="w-[90%] text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem
          maiores delectus voluptate repellat veritatis quaerat at? Deserunt
          laudantium accusantium doloribus rem eius tenetur numquam totam,
          dolore, quidem beatae praesentium!
        </p>
        <br />
        <h3 className="font-bold">DATE : </h3>
        <h3 className="font-bold">TIME : </h3>
      </div>
    </div>
  );
}

export default EventsCard;
