import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home1 from "../Components/Homepage Components/Home1";
import Home2 from "../Components/Homepage Components/Home2";
import Home3 from "../Components/Homepage Components/Home3";
import Home4 from "../Components/Homepage Components/Home4";
import Home5 from "../Components/Homepage Components/Home5";
import Home6 from "../Components/Homepage Components/Home6";
import Home7 from "../Components/Homepage Components/Home7";
import HomeCarousel from "../Components/Homepage Components/HomeCarousel";

function Home() {
  return (
    <div>
      <Header />
      <Home1/>
      <Home2/>
      <Home3/>
      <HomeCarousel/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Home7/>
      <Footer/>
    </div>
  );
}

export default Home;
