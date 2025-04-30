// // import { SlCalender } from "react-icons/sl";
// import { RxCheckbox } from "react-icons/rx";
// import { useState } from "react";

// function VazhipaduBookingForm({ price }) {
//   const [checked, setChecked] = useState(false);

//   const handleChecked = () => {
//     setChecked(!checked);
//   };

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

//   const [userName, setUserName] = useState("");
//   const [userNakshathram, setUserNakshathram] = useState("");
//   const [userAddress, setUserAddress] = useState("");
//   const [userNumber, setUserNumber] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [bookingDate, setBookingDate] = useState("");
//   const [prasadamAddress, setPrasadamAddress] = useState("");

//   const handleSubmit = () => {
//     console.log(
//       userName,
//       userAddress,
//       userNumber,
//       dateOfBirth,
//       bookingDate,
//       prasadamAddress
//     );
//     console.log("???????????????????????????");
//   };

//   return (
//     <div className="p-10 my-10">
//       <form className="flex flex-col items-center justify-center gap-y-5">
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പേര്
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userName}
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             നക്ഷത്രം
//           </label>
//           <select className="border-2 text-sm md:text-base  py-2 px-5 border-[#606060] rounded-md w-[40vw] ">
//             {Nakshathrams.map((nakshatram) => (
//               <option key={nakshatram.value} value={nakshatram.value}>
//                 {nakshatram.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             address
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userAddress}
//             onChange={(e) => {
//               setUserAddress(e.target.value);
//             }}
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             കോൺടാക്റ്റ് നമ്പർ
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userNumber}
//             onChange={(e) => {
//               setUserNumber(e.target.value);
//             }}
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ജനന തീയതി
//           </label>
//           <input
//             type="date"
//             name=""
//             id=""
//             value={dateOfBirth}
//             onChange={(e) => {
//               setDateOfBirth(e.target.value);
//             }}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//           />
//           {/* <span className="w-[40vw]">
//             <SlCalender size={30} />{" "}
//           </span> */}
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പൂജ ബുക്കിംഗ് തിയതി
//           </label>
//           <input
//             type="date"
//             name=""
//             id=""
//             value={bookingDate}
//             onChange={(e) => {
//               setBookingDate(e.target.value);
//             }}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//           />
//           {/* <span className="w-[40vw]">
//             <SlCalender size={30} />{" "}
//           </span> */}
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പ്രസാദം പാഴ്സൽ
//           </label>
//           <span className="flex items-center w-[40vw]">
//             <RxCheckbox
//               size={30}
//               color={checked ? "green" : "black"}
//               onClick={handleChecked}
//             />
//             {checked && (
//               <span className="mx-10 text-[#008000]">പ്രസാദം Selected</span>
//             )}
//           </span>
//         </div>
//         {checked && (
//           <div className="flex space-x-10 mb-5 items-center">
//             <label className="min-w-[40vw]  md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl"></label>
//             <textarea
//               type="text"
//               value={prasadamAddress}
//               onChange={(e) => {
//                 setPrasadamAddress(e.target.value);
//               }}
//               className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             />
//           </div>
//         )}
//         <div className="flex flex-col border-2 border-[#60606046] rounded-md p-3 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] gap-y-2 font-semibold">
//           <h3 className="text-start text-[#1a1a1ab3] text-sm lg:text-base">
//             Date 12/03/2025
//           </h3>
//           <h2 className="text-2xl lg:text-4xl text-center">$ {price}/-</h2>
//           <button
//             className="text-sm lg:text-base w-[100%] bg-orange-400 text-white rounded-md py-1 px-3"
//             onClick={handleSubmit}
//           >
//             Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default VazhipaduBookingForm;

// import { RxCheckbox } from "react-icons/rx";
// import { useState } from "react";

// function VazhipaduBookingForm({ price }) {
//   const [checked, setChecked] = useState(false);
//   const handleChecked = () => setChecked(!checked);

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

//   const [userName, setUserName] = useState("");
//   const [userNakshathram, setUserNakshathram] = useState("");
//   const [userAddress, setUserAddress] = useState("");
//   const [userNumber, setUserNumber] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [bookingDate, setBookingDate] = useState("");
//   const [prasadamAddress, setPrasadamAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form refresh
//     console.log("✅ Booking Submitted with the following details:");
//     console.log("Name:", userName);
//     console.log("Nakshathram:", userNakshathram);
//     console.log("Address:", userAddress);
//     console.log("Contact Number:", userNumber);
//     console.log("DOB:", dateOfBirth);
//     console.log("Booking Date:", bookingDate);
//     console.log("Prasadam Selected:", checked);
//     console.log("Prasadam Address:", prasadamAddress);
//     console.log("Price:", price);
//   };

//   return (
//     <div className="p-10 my-10">
//       <form
//         className="flex flex-col items-center justify-center gap-y-5"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പേര്
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             നക്ഷത്രം
//           </label>
//           <select
//             value={userNakshathram}
//             onChange={(e) => setUserNakshathram(e.target.value)}
//             className="border-2 text-sm md:text-base py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//           >
//             <option value="">Select</option>
//             {Nakshathrams.map((nakshatram) => (
//               <option key={nakshatram.value} value={nakshatram.value}>
//                 {nakshatram.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             address
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userAddress}
//             onChange={(e) => setUserAddress(e.target.value)}
//           />
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             കോൺടാക്റ്റ് നമ്പർ
//           </label>
//           <input
//             type="text"
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             value={userNumber}
//             onChange={(e) => setUserNumber(e.target.value)}
//           />
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             ജനന തീയതി
//           </label>
//           <input
//             type="date"
//             value={dateOfBirth}
//             onChange={(e) => setDateOfBirth(e.target.value)}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//           />
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പൂജ ബുക്കിംഗ് തിയതി
//           </label>
//           <input
//             type="date"
//             value={bookingDate}
//             onChange={(e) => setBookingDate(e.target.value)}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//           />
//         </div>

//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//             പ്രസാദം പാഴ്സൽ
//           </label>
//           <span className="flex items-center w-[40vw]">
//             <RxCheckbox
//               size={30}
//               color={checked ? "green" : "black"}
//               onClick={handleChecked}
//             />
//             {checked && (
//               <span className="mx-10 text-[#008000]">പ്രസാദം Selected</span>
//             )}
//           </span>
//         </div>

//         {checked && (
//           <div className="flex space-x-10 mb-5 items-center">
//             <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
//               പ്രസാദം അഡ്രസ്സ്
//             </label>
//             <textarea
//               value={prasadamAddress}
//               onChange={(e) => setPrasadamAddress(e.target.value)}
//               className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
//             />
//           </div>
//         )}

//         <div className="flex flex-col border-2 border-[#60606046] rounded-md p-3 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] gap-y-2 font-semibold">
//           <h3 className="text-start text-[#1a1a1ab3] text-sm lg:text-base">
//             Date 12/03/2025
//           </h3>
//           <h2 className="text-2xl lg:text-4xl text-center">₹ {price}/-</h2>
//           <button
//             type="submit"
//             className="text-sm lg:text-base w-[100%] bg-orange-400 text-white rounded-md py-1 px-3"
//           >
//             Continue
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default VazhipaduBookingForm;

import { useEffect, useState } from "react";
import { RxCheckbox } from "react-icons/rx";
import axiosInstance from "../../axios/axiosInstance";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function VazhipaduBookingForm({ price, data, id }) {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNakshathram, setUserNakshathram] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [prasadamAddress, setPrasadamAddress] = useState("");

  useEffect(() => {
    // Dynamically load Razorpay script if not already present
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        console.log("Razorpay script loaded successfully.");
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay script.");
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleChecked = () => {
    setChecked(!checked);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = checked ? price + 1 : price;

    if (
      !userName ||
      !userNakshathram ||
      !userAddress ||
      !userNumber ||
      !dateOfBirth ||
      !bookingDate
    ) {
      alert("ദയവായി എല്ലാ ആവശ്യമായ വിവരങ്ങളും പൂരിപ്പിക്കുക.");
      return;
    }

    if (!/^\d{10}$/.test(userNumber)) {
      alert("സരിയായ ഫോൺ നമ്പർ നൽകുക (10 അക്കങ്ങൾ).");
      return;
    }

    if (checked && !prasadamAddress) {
      alert("പ്രസാദം ആവശ്യപ്പെടുന്നതാണെങ്കിൽ, അഡ്രസും നൽകണം.");
      return;
    }
    try {
      const user_unique_id = Cookies.get("user_unique_id");

      // Step 1: Create Razorpay Order
      const { data: orderData } = await axiosInstance.post("/createorderid", {
        amount: finalAmount, // amount in paisa
        userId: user_unique_id,
      });

      console.log(orderData.orderId, " : Order Id");

      const razorpay_id = import.meta.env.VITE_API_RAZOR_PAY_ID; // Razorpay key ID

      const options = {
        key: razorpay_id,
        amount: orderData.amount,
        currency: "INR",
        name: "Vazhipadu Booking",
        description: "Payment for Vazhipadu",
        order_id: orderData.orderId,
        handler: async function (response) {
          // Step 2: On successful payment, handle booking

          console.log(response + " : Payment response ");
          console.log(response.razorpay_payment_id + "$$$$$$$$$$$$$$$$$$$$");

          const bookingData = {
            vazhipad_id: id,
            vazhipad_name: data.vazhipad_name,
            user_name: userName,
            contact_no: userNumber,
            user_address: userAddress,
            birth_start: userNakshathram,
            date_of_birth: dateOfBirth,
            booking_date: bookingDate,
            vazhipad_parcel: checked ? true : 1,
            parcel_address: checked ? prasadamAddress : " ",
            payment_amount: finalAmount,
            payment_id: response.razorpay_payment_id,
            payment_date: new Date().toISOString().split("T")[0],
            payment_status: "success",
          };

          console.log(bookingData + " : Booking Data");

          const result = await axiosInstance.post(
            "/vazhipad/vazhipadbooking",
            bookingData
          );
          alert(result.data.message || "വിജയകരമായി ബുക്കിങ് പൂർത്തിയായി!");
          console.log(result.data.vazhipad_booking_id);
          navigate(`/vazhipadu/result/${result.data.vazhipad_booking_id}`);
        },
        prefill: {
          name: userName,
          contact: userNumber,
        },
        theme: {
          color: "#F37254", // Custom color for the Razorpay popup
        },
      };

      if (typeof window.Razorpay === "undefined") {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        console.error("💥 Payment failed:", response.error);
        alert("Payment failed: " + response.error.description);
      });
    } catch (err) {
      console.error("❌ Error during payment process:", err);
      alert("An error occurred, please try again later.");
    }
  };

  return (
    <div className="p-10 my-10">
      <form
        className="flex flex-col items-center justify-center gap-y-5"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പേര്
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            നക്ഷത്രം
          </label>
          <select
            value={userNakshathram}
            onChange={(e) => setUserNakshathram(e.target.value)}
            className="border-2 text-sm md:text-base py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          >
            <option value="">Select</option>
            {Nakshathrams.map((nakshatram) => (
              <option key={nakshatram.value} value={nakshatram.value}>
                {nakshatram.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            address
          </label>
          <input
            type="text"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            കോൺടാക്റ്റ് നമ്പർ
          </label>
          <input
            type="tel"
            pattern="\d{10}"
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            ജനന തീയതി
          </label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പൂജ ബുക്കിംഗ് തിയതി
          </label>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
            പ്രസാദം പാഴ്സൽ
          </label>
          <span className="flex items-center w-[40vw]">
            <RxCheckbox
              size={30}
              color={checked ? "green" : "black"}
              onClick={handleChecked}
            />
            {checked && (
              <span className="mx-10 text-[#008000]">പ്രസാദം Selected</span>
            )}
          </span>
        </div>

        {checked && (
          <div className="flex space-x-10 mb-5 items-center">
            <label className="min-w-[40vw] md:min-w-[20vw] lg:min-w-[30vw] text-end font-bold text-xs lg:text-xl">
              പ്രസാദം അഡ്രസ്സ്
            </label>
            <textarea
              value={prasadamAddress}
              onChange={(e) => setPrasadamAddress(e.target.value)}
              className="border-2 py-2 px-5 border-[#606060] rounded-md w-[40vw]"
            />
          </div>
        )}

        <div className="flex flex-col border-2 border-[#60606046] rounded-md p-3 w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] gap-y-2 font-semibold">
          <h3 className="text-start text-[#1a1a1ab3] text-sm lg:text-base">
            {new Date().toISOString().split("T")[0]}
          </h3>
          <h2 className="text-2xl lg:text-4xl text-center">
            ₹ {checked ? price + 1 : price}/-
          </h2>
          <button
            type="submit"
            className="text-sm lg:text-base w-[100%] bg-orange-400 text-white rounded-md py-1 px-3"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default VazhipaduBookingForm;
