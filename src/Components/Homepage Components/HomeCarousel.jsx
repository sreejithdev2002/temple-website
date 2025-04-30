import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../assets/Homepage/banner1.png";
import image2 from "../../assets/Homepage/banner2.png";
import image3 from "../../assets/Homepage/banner3.png";
import image4 from "../../assets/Homepage/banner4.png";

const images = [image1, image2, image3, image4];

function HomeCarousel() {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        swipeable
        emulateTouch
        stopOnHover
        transitionTime={700} // Smooth sliding duration
        axis="horizontal" // Ensures horizontal transition
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[20vh] sm:h-[30vh md:h-[40vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[60vh]" // Ensures full width and covers area
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
