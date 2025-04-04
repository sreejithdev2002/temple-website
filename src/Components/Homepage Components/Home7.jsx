// import temple1 from "../../assets/temple1.png";
// import temple2 from "../../assets/temple2.png";

// function Home7() {
//   return (
//     <div className="p-10">
//       <h2 className="font-bold text-2xl text-[#FC931E] mb-3">
//         ശ്രീ ത്രേതായുഗ മൂർത്തി ക്ഷേത്രത്തിന്റെ
//       </h2>
//       <h3 className="text-4xl font-bold mb-10">പുനർനിർമ്മാണം</h3>
//       <div className="flex justify-between">
//         <div className=" bg-cover">
//           <img src={temple1} alt="Image of temple1" />
//         </div>
//         <div className=" bg-cover">
//           <img src={temple2} alt="Image of temple2" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home7;


import temple1 from "../../assets/temple1.png";
import temple2 from "../../assets/temple2.png";

function Home7() {
  return (
    <div className="p-5 lg:p-10">
      <h2 className="font-bold text-xl lg:text-4xl text-[#FC931E] mb-3">
        ശ്രീ ത്രേതായുഗ മൂർത്തി ക്ഷേത്രത്തിന്റെ
      </h2>
      <h3 className="text-2xl lg:text-4xl font-bold mb-10">പുനർനിർമ്മാണം</h3>
      <div className="flex justify-between gap-5">
        <div className="lg:w-[650px] lg:h-[300px] overflow-hidden rounded-2xl lg:rounded-4xl">
          <img src={temple1} alt="Image of temple1" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-[650px] lg:h-[300px] overflow-hidden rounded-2xl lg:rounded-4xl">
          <img src={temple2} alt="Image of temple2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Home7;
