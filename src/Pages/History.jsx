// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

// function History() {
//   return (
//     <div>
//       <Header />
//       <h1 className="text-5xl font-bold text-center">BOOKING HISTORY</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>TYPE</th>
//             <th>DATE</th>
//             <th>AMOUNT</th>
//             <th>STATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>123</td>
//             <td>Style Type</td>
//             <td>05-12-2002</td>
//             <td>1200</td>
//             <td>Complete</td>
//           </tr>
//         </tbody>
//       </table>
//       <Footer />
//     </div>
//   );
// }

// export default History;

// import { useEffect, useState } from "react";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import axiosInstance from "../axios/axiosInstance";

// function History() {

//     const [vazhipaduHistory, setVazhipaduHistory] = useState([]);

//     const fetchData = async() => {
//         try {
//             const response = await axiosInstance.post("/vazhipad/vazhipadbookinghistory");

//             if(response.status === 200){
//                 setVazhipaduHistory(response.data.vazhipadbookings);
//                 console.log(response.data.vazhipadbookings);
//             }
//         } catch (error) {
//             console.error("Error fetching vazhipad history : ", error);
//         }
//     };

//     useEffect(() => {
//         fetchData()
//     },[])

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//           BOOKING HISTORY
//         </h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
//                   ID
//                 </th>
//                 <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
//                   Type
//                 </th>
//                 <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {vazhipaduHistory.map((data, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                 <td className="py-4 px-6">{data._id}</td>
//                 <td className="py-4 px-6">Style Type</td>
//                 <td className="py-4 px-6">{data.booking_date}</td>
//                 <td className="py-4 px-6">{data.payment_amount}</td>
//                 <td className="py-4 px-6">
//                   {data.vazhipad_status === 1 ? <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
//                     Complete
//                   </span> : <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-500 bg-yellow-100 rounded-full">
//                     Pending
//                   </span>}
//                 </td>
//               </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default History;

import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axiosInstance from "../axios/axiosInstance";

function History() {
  const [historyData, setHistoryData] = useState([]);

  const fetchData = async () => {
    try {
      const results = await Promise.allSettled([
        axiosInstance.post("/vazhipad/vazhipadbookinghistory"),
        axiosInstance.post("/donation/donationhistory"),
        axiosInstance.post("/ramayanam/ramayanambookinghistory"),
      ]);

      const combinedData = [];

      if (results[0].status === "fulfilled") {
        const vazhipadBookings = results[0].value.data.vazhipadbookings.map(
          (item) => ({
            ...item,
            type: "Vazhipad",
            bookingDate: item.booking_date,
            amount: item.payment_amount,
            status: item.vazhipad_status === 1 ? "Complete" : "Pending",
            name: item.vazhipad_name,
          })
        );
        combinedData.push(...vazhipadBookings);
      }

      if (results[1].status === "fulfilled") {
        const donationBookings = results[1].value.data.donationBookings.map(
          (item) => ({
            ...item,
            type: "Donation",
            bookingDate: item.payment_date,
            amount: item.payment_amount,
            status: item.donation_status === 1 ? "Complete" : "Pending",
            name: item.donation_title,
          })
        );
        combinedData.push(...donationBookings);
      }

      if (results[2].status === "fulfilled") {
        const ramayanamBookings = results[2].value.data.ramayanamBooking.map(
          (item) => ({
            ...item,
            type: "Ramayanam",
            bookingDate: item.booking_date,
            amount: item.payment_amount || "N/A",
            status: item.status === 1 ? "Complete" : "Pending",
            name: "Ramayanam Astrology",
          })
        );
        combinedData.push(...ramayanamBookings);
      }

      setHistoryData(combinedData);
      console.log(combinedData);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          BOOKING HISTORY
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                {/* <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th> */}
              </tr>
            </thead>
            <tbody>
              {historyData.length > 0 ? (
                historyData.map((data, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{data.name}</td>
                    <td className="py-4 px-6">{data.type}</td>
                    <td className="py-4 px-6">
                      {new Date(data.bookingDate)
                        .toLocaleDateString("en-GB")
                        .replaceAll("/", "-")}
                    </td>

                    <td className="py-4 px-6">{data.amount}</td>
                    {/* <td className="py-4 px-6">
                      {data.status === "Complete" ? (
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                          Complete
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-500 bg-yellow-100 rounded-full">
                          Pending
                        </span>
                      )}
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No booking history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default History;
