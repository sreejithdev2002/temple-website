// import { useState } from "react";

// function DonationForm({ text, setFormData }) {
//   const [userName, setUserName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [amount, setAmount] = useState("");

//   const data = {
//     userName,
//     contactNumber,
//     address,
//     amount,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData(data);
//     console.log("@@@@@@@@@@@ : ", data);
//   };

//   return (
//     <div className="p-10">
//       <form
//         className="flex flex-col items-center justify-center gap-y-3"
//         onSubmit={handleSubmit}
//       >
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
//             NAME
//           </label>
//           <input
//             type="text"
//             value={userName}
//             required
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
//             CONTACT NUMBER
//           </label>
//           <input
//             type="tel"
//             pattern="[0-9]{10}"
//             required
//             value={contactNumber}
//             onChange={(e) => {
//               setContactNumber(e.target.value);
//             }}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//           />
//         </div>
//         <div className="flex space-x-10 mb-5 items-center">
//           <label className="min-w-[30vw]  md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
//             ADDRESS
//           </label>
//           <textarea
//             type="text"
//             value={address}
//             required
//             onChange={(e) => {
//               setAddress(e.target.value);
//             }}
//             className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
//           />
//         </div>
//         <div className="flex flex-col items-center gap-y-3">
//           <h3 className="text-[#FC931E] font-bold text-lg lg:text-2xl">
//             {text}
//           </h3>
//           <input
//             type="number"
//             min="1"
//             required
//             value={amount}
//             onChange={(e) => {
//               setAmount(e.target.value);
//             }}
//             className="border border-black bg-[#EAE8DF] py-2 px-5"
//           />
//           <button
//             type="submit"
//             className="rounded-4xl bg-[#FC931E] text-white w-[40%] py-3 cursor-pointer"
//           >
//             Pay Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default DonationForm;



function DonationForm({ text, formData, onFormChange, onFormSubmit }) {
  const handleChange = (e) => {
    onFormChange(e.target.name, e.target.value);
  };

  return (
    <div className="p-10">
      <form
        className="flex flex-col items-center justify-center gap-y-3"
        onSubmit={onFormSubmit}
      >
        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            NAME
          </label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            required
            onChange={handleChange}
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            CONTACT NUMBER
          </label>
          <input
            type="tel"
            name="contact_no"
            pattern="[0-9]{10}"
            required
            value={formData.contact_no}
            onChange={handleChange}
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>

        <div className="flex space-x-10 mb-5 items-center">
          <label className="min-w-[30vw] md:min-w-[20vw] lg:min-w-[20vw] text-end font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
            ADDRESS
          </label>
          <textarea
            name="user_address"
            value={formData.user_address}
            required
            onChange={handleChange}
            className="border-2 py-2 px-5 border-[#606060] rounded-md w-[50vw]"
          />
        </div>

        <div className="flex flex-col items-center gap-y-3">
          <h3 className="text-[#FC931E] font-bold text-lg lg:text-2xl">
            {text}
          </h3>
          <input
            type="number"
            min="1"
            name="payment_amount"
            required
            value={formData.payment_amount}
            onChange={handleChange}
            className="border border-black bg-[#EAE8DF] py-2 px-5"
          />
          <button
            type="submit"
            className="rounded-4xl bg-[#FC931E] text-white w-[40%] py-3 cursor-pointer"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default DonationForm;
