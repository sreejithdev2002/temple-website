// import image1 from "../../assets/Homepage/banner1.png";
// import image2 from "../../assets/Homepage/banner2.png";
// import image3 from "../../assets/Homepage/banner3.png";
// import image4 from "../../assets/Homepage/banner4.png";


// function HomeCarousel() {
//     return (
//         <div>
//             <img src={image1} alt="" className="w-full h-auto" />
//         </div>
//     );
// }

// export default HomeCarousel;



import { useState, useEffect } from "react";
import image1 from "../../assets/Homepage/banner1.png";
import image2 from "../../assets/Homepage/banner2.png";
import image3 from "../../assets/Homepage/banner3.png";
import image4 from "../../assets/Homepage/banner4.png";

const images = [image1, image2, image3, image4];

function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-auto overflow-hidden">
            <img src={images[currentIndex]} alt="banner" className="w-full h-auto transition-opacity duration-1000 ease-in-out" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#FF8600]' : 'bg-gray-400'} transition-all cursor-pointer`} 
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeCarousel;