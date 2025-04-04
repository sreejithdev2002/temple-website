// import { Kollavarsham } from "kollavarsham";

// function Calendar() {
//   const kollavarsham = new Kollavarsham();
//   const today = kollavarsham.fromGregorianDate(new Date());

//   return (
//     <div className="w-64 bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300">
//       <h2 className="text-lg font-semibold text-gray-700">
//         Malayalam Calendar
//       </h2>
//       <div className="mt-2 text-gray-800">
//         <p className="text-xl font-bold">{today.date - 1}</p>
//         <p className="text-md">
//           {today.mlMasaName}, {today.year}
//         </p>
//         <p className="text-sm text-gray-500">({today.mlNaksatraName})</p>
//       </div>
//     </div>
//   );
// }

// export default Calendar;




// import React, { useState } from "react";
// import { addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
// import { Kollavarsham } from "kollavarsham";

// // Initialize Kollavarsham Converter with options
// const options = {
//   system: "SuryaSiddhanta",
//   latitude: 10,
//   longitude: 76.2,
// };
// const kollavarsham = new Kollavarsham(options);

// const Calendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);

//   // Convert Gregorian to Kollavarsham
//   const convertToKollavarsham = (date) => {
//     const kollavarshamDate = kollavarsham.fromGregorianDate(date);
//     return `Kollavarsham Year: ${kollavarshamDate.year}, Month: ${kollavarshamDate.mlMasaName}, Day: ${kollavarshamDate.date} (${kollavarshamDate.mlNaksatraName})`;
//   };

//   const days = eachDayOfInterval({
//     start: startOfMonth(currentMonth),
//     end: endOfMonth(currentMonth),
//   });

//   return (
//     <div className="p-4 max-w-lg mx-auto border rounded shadow">
//       <div className="flex justify-between items-center mb-4">
//         <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">← Prev</button>
//         <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
//         <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">Next →</button>
//       </div>

//       <div className="grid grid-cols-7 gap-2 text-center">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="font-bold">{day}</div>
//         ))}
//         {days.map((day) => (
//           <button
//             key={day}
//             className={`p-2 rounded ${selectedDate?.toDateString() === day.toDateString() ? "bg-blue-500 text-white" : "bg-gray-100"}`}
//             onClick={() => setSelectedDate(day)}
//           >
//             {format(day, "d")}
//           </button>
//         ))}
//       </div>

//       {selectedDate && (
//         <div className="mt-4 p-3 bg-blue-100 rounded">
//           <p>Selected Date (Gregorian): {format(selectedDate, "dd MMMM yyyy")}</p>
//           <p>{convertToKollavarsham(selectedDate)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calendar;






import React, { useState } from "react";
import { addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from "date-fns";
import { Kollavarsham } from "kollavarsham";

// Initialize Kollavarsham Converter with options
const options = {
  system: "SuryaSiddhanta",
  latitude: 10,
  longitude: 76.2,
};
const kollavarsham = new Kollavarsham(options);

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Convert Gregorian to Kollavarsham
  const convertToKollavarsham = (date) => {
    const kollavarshamDate = kollavarsham.fromGregorianDate(date);
    return `Kollavarsham Year: ${kollavarshamDate.year}, Month: ${kollavarshamDate.mlMasaName}, Day: ${kollavarshamDate.date} (${kollavarshamDate.mlNaksatraName})`;
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get the index of the first day in the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const startDayIndex = getDay(monthStart);

  return (
    <div className="p-4 max-w-lg mx-auto border rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">← Prev</button>
        <h2 className="text-lg font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="px-3 py-1 bg-gray-200 rounded">Next →</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold">{day}</div>
        ))}

        {/* Empty spaces for alignment */}
        {Array.from({ length: startDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div>
        ))}

        {/* Render actual days */}
        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`p-2 rounded ${selectedDate?.toDateString() === day.toDateString() ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, "d")}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4 p-3 bg-blue-100 rounded">
          <p>Selected Date (Gregorian): {format(selectedDate, "dd MMMM yyyy")}</p>
          <p>{convertToKollavarsham(selectedDate)}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;
