import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Vazhipadu from "./Pages/Vazhipadu";
import Calender from "./Pages/calender";
import Abhishekangal from "./Pages/Abhishekangal";
function App() {
  return (
    // <>
    //   <Home />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vazhipadu" element={<Vazhipadu />} />
        <Route path="/abhishekangal" element={<Abhishekangal />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
