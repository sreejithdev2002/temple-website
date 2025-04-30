// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import DonationForm from "../Components/Donation Components/DonationForm";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Donation() {
//   const navigate = useNavigate();

//   let formText = "സംഭാവന ചെയ്യുക";


//   const [formData, setFormData] = useState([]);

//   // console.log("%%%%%%%%%%%%%%% ", formData);

  

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col items-center p-5 lg:p-10 gap-y-3 lg:gap-y-5">
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#FC931E] text-center lg:leading-15">
//           ക്ഷേത്ര സംരക്ഷണം ആപത്തുകളെ തടയുന്നു, കരുത്തേകാം പ്രാർത്ഥനകൾക്ക്.
//         </h2>
//         <p className="text-xs lg:text-sm text-[#00000099]">
//           We are accepting all kinds of donations, feel free to donate if you
//           support our cause
//         </p>
//       </div>
//       <DonationForm text={formText} setFormData={setFormData} />
//       {/* <div className="flex flex-col items-center gap-y-5 my-3 lg:my-10">
//         <button
//           onClick={() => navigate("/donations/id")}
//           className="border-5 border-[#FC931E] p-3 lg:p-5 rounded-4xl lg:text-xl font-bold w-[90%] lg:w-[60%] cursor-pointer hover:bg-[#fc941e3c] transition duration-300"
//         >
//           അമ്പല പുനരുദ്ധാരണത്തിലേക്ക്ഉദാരമായ സംഭാവനകൾ നൽകാം
//         </button>
//         <button
//           onClick={() => navigate("/donations/id")}
//           className="border-5 border-[#FC931E] p-3 lg:p-5 rounded-4xl lg:text-xl font-bold w-[90%] lg:w-[60%] cursor-pointer hover:bg-[#fc941e3c] transition duration-300"
//         >
//           അമ്പലക്കുള നിർമ്മാണത്തിലേക്ക് ഉദാരമായ സംഭാവനകൾ നൽകാം
//         </button>
//       </div> */}
//       <Footer />
//     </div>
//   );
// }

// export default Donation;


// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import DonationForm from "../Components/Donation Components/DonationForm";
// import { useState } from "react";
// import axiosInstance from "../../axios/axiosInstance";


// function Donation() {
//   const [formData, setFormData] = useState({
//     user_name: "",
//     contact_no: "",
//     user_address: "",
//     payment_amount: "",
//   });

//   const handleFormChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     try {
//       // 1. Create Razorpay order
//       const { data: order } = await axiosInstance.post("/createorderid", {
//         payment_amount: formData.amount * 100, // amount in paise
//       });

//       console.log("Order Created: ", order);

//       const options = {
//         key: "YOUR_RAZORPAY_KEY_ID", // Replace with actual Razorpay Key
//         amount: order.amount,
//         currency: "INR",
//         name: "Temple Donation",
//         description: "Donation Payment",
//         order_id: order.id,
//         handler: async (response) => {
//           console.log("Payment Success: ", response);

//           // Save booking after payment success
//           await axiosInstance.post("/api/booking", {
//             ...formData,
//             payment_id: response.razorpay_payment_id,
//             payment_date: new Date().toISOString().split('T')[0],
//             payment_status: "success",
//           });

//           alert("Donation successful! Thank you for your support.");

//           // Reset form
//           setFormData({
//             userName: "",
//             contactNumber: "",
//             address: "",
//             amount: "",
//           });
//         },
//         theme: {
//           color: "#FC931E",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error("Payment Error: ", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col items-center p-5 lg:p-10 gap-y-3 lg:gap-y-5">
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#FC931E] text-center lg:leading-15">
//           ക്ഷേത്ര സംരക്ഷണം ആപത്തുകളെ തടയുന്നു, കരുത്തേകാം പ്രാർത്ഥനകൾക്ക്.
//         </h2>
//         <p className="text-xs lg:text-sm text-[#00000099]">
//           We are accepting all kinds of donations, feel free to donate if you
//           support our cause
//         </p>
//       </div>

//       {/* Pass formData, change handler and submit handler */}
//       <DonationForm
//         text="സംഭാവന ചെയ്യുക"
//         formData={formData}
//         onFormChange={handleFormChange}
//         onFormSubmit={handlePayment}
//       />

//       <Footer />
//     </div>
//   );
// }

// export default Donation;


import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DonationForm from "../Components/Donation Components/DonationForm";
import { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import Cookies from "js-cookie";


function Donation() {
  const [formData, setFormData] = useState({
    user_name: "",
    contact_no: "",
    user_address: "",
    payment_amount: "", // this field will be used both in Razorpay and backend
  });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // 1. Create Razorpay order
      const user_unique_id = Cookies.get("user_unique_id");

      const { data: order } = await axiosInstance.post("/createorderid", {
        userId: user_unique_id,
        amount: formData.payment_amount * 100, // 🛠 Corrected: amount in paise
      });

      console.log("Order Created: ", order);

      const razorpay_id = import.meta.env.VITE_API_RAZOR_PAY_ID; // Razorpay key ID

      const options = {
        key: razorpay_id, // Replace with actual Razorpay Key
        amount: order.amount,
        currency: "INR",
        name: "Temple Donation",
        description: "Donation Payment",
        order_id: order.id,
        handler: async (response) => {
          console.log("Payment Success: ", response);

          // Save booking after payment success
          await axiosInstance.post("/donation/donationbooking", {
            ...formData,
            donation_id: 1,
            donation_title: "General Donation",
            payment_id: response.razorpay_payment_id,
            // razorpay_order_id: response.razorpay_order_id,
            // razorpay_signature: response.razorpay_signature,
            payment_date: new Date().toISOString(), // yyyy-mm-dd
            payment_status: "success",
          });

          alert("Donation successful! Thank you for your support.");

          // Reset form
          setFormData({
            user_name: "",
            contact_no: "",
            user_address: "",
            payment_amount: "",
          });
        },
        theme: {
          color: "#FC931E",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment Error: ", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center p-5 lg:p-10 gap-y-3 lg:gap-y-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#FC931E] text-center lg:leading-15">
          ക്ഷേത്ര സംരക്ഷണം ആപത്തുകളെ തടയുന്നു, കരുത്തേകാം പ്രാർത്ഥനകൾക്ക്.
        </h2>
        <p className="text-xs lg:text-sm text-[#00000099]">
          We are accepting all kinds of donations, feel free to donate if you
          support our cause
        </p>
      </div>

      {/* Pass formData, change handler and submit handler */}
      <DonationForm
        text="സംഭാവന ചെയ്യുക"
        formData={formData}
        onFormChange={handleFormChange}
        onFormSubmit={handlePayment}
      />

      <Footer />
    </div>
  );
}

export default Donation;
