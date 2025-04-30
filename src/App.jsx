import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Vazhipadu from "./Pages/Vazhipadu";
// import Calender from "./Pages/calender";
import Abhishekangal from "./Pages/Abhishekangal";
import ParticularVazhipadu from "./Pages/ParticularVazhipadu";
import ScrollToTop from "./setup/ScrollToTop";
import UpcomingEvents from "./Pages/UpcomingEvents";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";
import Donation from "./Pages/Donation";
import ParticularDonation from "./Pages/ParticularDonation";
import RamayanaAstrology from "./Pages/RamayanaAstrology";
import { useEffect } from "react";
import { getOrCreateUniqueUserId } from "./Utils/UniqueUserId";
import axios from "axios";
import History from "./Pages/History";
import ParticularVazhipadBookingResultPage from "./Pages/ParticularVazhipadBookingResultPage";
import ContactPage from "./Pages/ContactPage";
import TempleHistoryPage from "./Pages/TempleHistoryPage";
function App() {
  useEffect(() => {
    const initSession = async () => {
      const userId = getOrCreateUniqueUserId();

      const existingToken = sessionStorage.getItem("session_token");

      if (!existingToken) {
        try {
          const apiURL = import.meta.env.VITE_API_URL;

          const response = await axios.post(`${apiURL}/userregistration`, {
            user_unique_id: userId,
          });

          const { session_token } = response.data;

          sessionStorage.setItem("session_token", session_token);

          console.log("Session token stored:", session_token);
        } catch (error) {
          console.error("Error during registration:", error);
        }
      }
    };

    initSession();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/vazhipadu" element={<Vazhipadu />} />
        <Route path="/vazhipadu/:vazhipadu" element={<ParticularVazhipadu />} />
        <Route
          path="/vazhipadu/result/:vazhipadu"
          element={<ParticularVazhipadBookingResultPage />}
        />

        <Route path="/abhishekangal" element={<Abhishekangal />} />

        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/donations" element={<Donation />} />
        {/* <Route path="/donations/id" element={<ParticularDonation />} /> */}

        <Route path="/ramayana-astrology" element={<RamayanaAstrology />} />

        <Route path="/history" element={<TempleHistoryPage/>} />

        <Route path="/booking-history" element={<History />} />

        <Route path="/contact" element={<ContactPage/>} />

        {/* <Route path="/calender" element={<Calender />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
