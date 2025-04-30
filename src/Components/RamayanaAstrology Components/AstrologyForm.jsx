// import dayjs from "dayjs";
// import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// function AstrologyForm() {
//   const [value, setValue] = useState(new Date());
//   const [formattedDate, setFormattedDate] = useState(
//     dayjs(new Date()).format("DD-MM-YYYY")
//   );

//   useEffect(() => {
//     setFormattedDate(dayjs(value).format("DD-MM-YYYY"));
//   }, [value]);

//   const Nakshathrams = [
//     { value: "ashwathi", label: "അശ്വതി" },
//     { value: "bharani", label: "ഭരണി" },
//     { value: "karthika", label: "കാർത്തിക" },
//     { value: "rohini", label: "രോഹിണി" },
//     { value: "makayiram", label: "മകയിരം" },
//     { value: "thiruvathira", label: "തിരുവാതിര" },
//     { value: "punartham", label: "പുണർതം" },
//     { value: "pooyam", label: "പൂയം" },
//     { value: "ayilyam", label: "ആയില്യം" },
//     { value: "makam", label: "മകം" },
//     { value: "pooram", label: "പൂരം" },
//     { value: "uthram", label: "ഉത്രം" },
//     { value: "atham", label: "അത്തം" },
//     { value: "chithira", label: "ചിത്തിര" },
//     { value: "chothi", label: "ചോതി" },
//     { value: "vishakham", label: "വിശാഖം" },
//     { value: "anizham", label: "അനിഴം" },
//     { value: "thrikketta", label: "തൃക്കേട്ട" },
//     { value: "moolam", label: "മൂലം" },
//     { value: "pooradam", label: "പൂരാടം" },
//     { value: "uthradam", label: "ഉത്രാടം" },
//     { value: "thiruvonam", label: "തിരുവോണം" },
//     { value: "avittam", label: "അവിട്ടം" },
//     { value: "chathayam", label: "ചതയം" },
//     { value: "pooruruttathi", label: "പൂരുരുട്ടാതി" },
//     { value: "uthruttathi", label: "ഉത്രട്ടാതി" },
//     { value: "revathi", label: "രേവതി" },
//   ];

//   return (
//     <div className="p-10">
//       <form className="flex flex-col items-center justify-center gap-y-3">
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER NAME:
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER NAKSHATHRAM:
//           </label>
//           <select className="border-2 text-sm md:text-base  py-2 px-5 border-[#606060] rounded-md w-[50vw]">
//             {Nakshathrams.map((nakshatram) => (
//               <option key={nakshatram.value} value={nakshatram.value}>
//                 {nakshatram.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER BIRTHDAY:
//           </label>
//           <div className="w-[50vw] ">
//             <Calendar
//               onChange={setValue}
//               value={value}
//               className="rounded-lg border-none px-1 text-sm"
//             />
//             <p>{formattedDate}</p>
//           </div>
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             CONTACT NUMBER:
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ADDRESS:
//           </label>
//           <textarea className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]" />
//         </div>
//         <button className="rounded-4xl bg-[#FC931E] text-white w-[30%] sm:w-[20%] lg:w-[10%] py-3">
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AstrologyForm;




// import dayjs from "dayjs";
// import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axiosInstance from "../../axios/axiosInstance"; // Your axios instance

// function AstrologyForm() {
//   const [value, setValue] = useState(new Date());
//   const [formattedDate, setFormattedDate] = useState(dayjs(new Date()).format("DD-MM-YYYY"));
//   const [formData, setFormData] = useState({
//     name: "",
//     nakshathram: "ashwathi",
//     contact_number: "",
//     address: "",
//   });

//   useEffect(() => {
//     setFormattedDate(dayjs(value).format("DD-MM-YYYY"));
//   }, [value]);

//   const Nakshathrams = [
//     { value: "ashwathi", label: "അശ്വതി" },
//     { value: "bharani", label: "ഭരണി" },
//     { value: "karthika", label: "കാർത്തിക" },
//     { value: "rohini", label: "രോഹിണി" },
//     { value: "makayiram", label: "മകയിരം" },
//     { value: "thiruvathira", label: "തിരുവാതിര" },
//     { value: "punartham", label: "പുണർതം" },
//     { value: "pooyam", label: "പൂയം" },
//     { value: "ayilyam", label: "ആയില്യം" },
//     { value: "makam", label: "മകം" },
//     { value: "pooram", label: "പൂരം" },
//     { value: "uthram", label: "ഉത്രം" },
//     { value: "atham", label: "അത്തം" },
//     { value: "chithira", label: "ചിത്തിര" },
//     { value: "chothi", label: "ചോതി" },
//     { value: "vishakham", label: "വിശാഖം" },
//     { value: "anizham", label: "അനിഴം" },
//     { value: "thrikketta", label: "തൃക്കേട്ട" },
//     { value: "moolam", label: "മൂലം" },
//     { value: "pooradam", label: "പൂരാടം" },
//     { value: "uthradam", label: "ഉത്രാടം" },
//     { value: "thiruvonam", label: "തിരുവോണം" },
//     { value: "avittam", label: "അവിട്ടം" },
//     { value: "chathayam", label: "ചതയം" },
//     { value: "pooruruttathi", label: "പൂരുരുട്ടാതി" },
//     { value: "uthruttathi", label: "ഉത്രട്ടാതി" },
//     { value: "revathi", label: "രേവതി" },
//   ];

//   const handleFormChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Submit the form data (without payment)
//       await axiosInstance.post("/api/booking", {
//         ...formData,
//         booking_date: formattedDate, // Add the selected date
//         status: "booked",
//       });

//       alert("Your astrology consultation has been booked successfully!");

//       // Reset the form data
//       setFormData({
//         name: "",
//         nakshathram: "ashwathi",
//         contact_number: "",
//         address: "",
//       });
//     } catch (error) {
//       console.error("Booking Error: ", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="p-10">
//       <form className="flex flex-col items-center justify-center gap-y-3" onSubmit={handleFormSubmit}>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER NAME:
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//             value={formData.name}
//             onChange={(e) => handleFormChange("name", e.target.value)}
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER NAKSHATHRAM:
//           </label>
//           <select
//             className="border-2 text-sm md:text-base py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//             value={formData.nakshathram}
//             onChange={(e) => handleFormChange("nakshathram", e.target.value)}
//           >
//             {Nakshathrams.map((nakshatram) => (
//               <option key={nakshatram.value} value={nakshatram.value}>
//                 {nakshatram.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ENTER BIRTHDAY:
//           </label>
//           <div className="w-[50vw]">
//             <Calendar
//               onChange={setValue}
//               value={value}
//               className="rounded-lg border-none px-1 text-sm"
//             />
//             <p>{formattedDate}</p>
//           </div>
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             CONTACT NUMBER:
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//             value={formData.contact_number}
//             onChange={(e) => handleFormChange("contact_number", e.target.value)}
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ADDRESS:
//           </label>
//           <textarea
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//             value={formData.address}
//             onChange={(e) => handleFormChange("address", e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="rounded-4xl bg-[#FC931E] text-white w-[30%] sm:w-[20%] lg:w-[10%] py-3"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AstrologyForm;



import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axiosInstance from "../../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

function AstrologyForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    birth_star: "ashwathi",
    date_of_birth: new Date(),
    contact_no: "",
    address: "",
  });

  const Nakshathrams = [
    { value: "ashwathi", label: "അശ്വതി" },
    { value: "bharani", label: "ഭരണി" },
    { value: "karthika", label: "കാർത്തിക" },
    { value: "rohini", label: "രോഹിണി" },
    { value: "makayiram", label: "മകയിരം" },
    { value: "thiruvathira", label: "തിരുവാതിര" },
    { value: "punartham", label: "പുണർതം" },
    { value: "pooyam", label: "പൂയം" },
    { value: "ayilyam", label: "ആയില്യം" },
    { value: "makam", label: "മകം" },
    { value: "pooram", label: "പൂരം" },
    { value: "uthram", label: "ഉത്രം" },
    { value: "atham", label: "അത്തം" },
    { value: "chithira", label: "ചിത്തിര" },
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const booking_date = dayjs(new Date()).format("YYYY-MM-DD");  // <<== change here
      const date_of_birth = dayjs(formData.date_of_birth).format("YYYY-MM-DD"); // <<== change here

      await axiosInstance.post("/ramayanam/ramayanambooking", {
        name: formData.name,
        birth_star: formData.birth_star,
        booking_date,
        date_of_birth,
        contact_no: formData.contact_no,
        address: formData.address,
        status: "booked",
      });

      alert("Booking successful!");

      // Reset form
      setFormData({
        name: "",
        birth_star: "ashwathi",
        date_of_birth: new Date(),
        contact_no: "",
        address: "",
      });

      navigate("/history")

    } catch (error) {
      console.error("Booking Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-y-3">
        {/* Name */}
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">Name:</label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* Birth Star */}
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">Nakshathram:</label>
          <select
            className="border-2 text-sm md:text-base py-2 px-5 border-[#606060] rounded-md w-[50vw]"
            value={formData.birth_star}
            onChange={(e) => handleChange("birth_star", e.target.value)}
          >
            {Nakshathrams.map((nakshatram) => (
              <option key={nakshatram.value} value={nakshatram.value}>
                {nakshatram.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date of Birth */}
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">Date of Birth:</label>
          <div className="w-[50vw]">
            <Calendar
              onChange={(date) => handleChange("date_of_birth", date)}
              value={formData.date_of_birth}
              className="rounded-lg border-none px-1 text-sm"
            />
            <p>Selected: {dayjs(formData.date_of_birth).format("YYYY-MM-DD")}</p>
          </div>
        </div>

        {/* Contact Number */}
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">Contact Number:</label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
            value={formData.contact_no}
            onChange={(e) => handleChange("contact_no", e.target.value)}
          />
        </div>

        {/* Address */}
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] text-end font-bold text-xs lg:text-xl">Address:</label>
          <textarea
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-4xl bg-[#FC931E] text-white w-[30%] sm:w-[20%] lg:w-[10%] py-3"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default AstrologyForm;
