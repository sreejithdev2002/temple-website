// import Gods from "../assets/gods.png";

// function GodsImage() {
//   return (
//     <div className="border-10 rounded-2xl border-amber-500 w-[440px] h-[460px]">
//       <img src={Gods} alt="Image of Gods." className="bg-cover h-auto w-auto" />
//     </div>
//   );
// }

// export default GodsImage;


import Gods from "../assets/gods.png";

function GodsImage() {
  return (
    <div className="border-5 lg:border-10 rounded-4xl border-[#FA8232] w-[200px] lg:w-[500px] h-[150px] lg:h-[300px] overflow-hidden flex items-center justify-center">
      <img src={Gods} alt="Image of Gods." className="w-full h-full object-cover" />
    </div>
  );
}

export default GodsImage;
