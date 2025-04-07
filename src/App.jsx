import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Vazhipadu from "./Pages/Vazhipadu";
import Calender from "./Pages/calender";
import Abhishekangal from "./Pages/Abhishekangal";
import ParticularVazhipadu from "./Pages/ParticularVazhipadu";
import ScrollToTop from "./setup/ScrollToTop";
import UpcomingEvents from "./Pages/UpcomingEvents";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    // <>
    //   <Home />
    // </>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vazhipadu" element={<Vazhipadu />} />
        <Route path="/vazhipadu/:vazhipadu" element={<ParticularVazhipadu />} />
        <Route path="/abhishekangal" element={<Abhishekangal />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/calender" element={<Calender />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
