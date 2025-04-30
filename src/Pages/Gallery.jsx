import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import GalleryCard from "../Components/Gallery Components/GalleryCard";
import Header from "../Components/Header";
import axiosInstance from "../axios/axiosInstance";

function Gallery() {
  const [gallery, setGallery] = useState([]);

  const fetchGallery = async () => {
    try {
      const response = await axiosInstance.post("/gallery/showgallery");
      if (response.status === 200) {
        setGallery(response.data.gallery);
        console.log(response.data.gallery, " : Gallery Datas");
      }
    } catch (error) {
      console.error("Error fetching Gallery : ", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center m-10 gap-y-2">
        <h2 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold">
          GALLERY
        </h2>
        <p className="text-xs lg:text-sm text-gray-600">
          View all our existing photos of the temple and all its events{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-y-10 my-10 gap-x-2 mx-2 md:mx-5 md:gap-x-5">
        {gallery.map((data, index) => (
          <GalleryCard key={index} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;

// import Footer from "../Components/Footer";
// import GalleryCard from "../Components/Gallery Components/GalleryCard";
// import Header from "../Components/Header";

// function Gallery() {
//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col items-center m-10 gap-y-2">
//         <h2 className="text-5xl font-bold">UPCOMING EVENTS</h2>
//         <p className="text-sm text-gray-600">
//           Explore all the upcoming events so you can plan your next visit
//         </p>
//       </div>

//       {/* Cards at ends of the container */}
//       <div className="flex flex-col gap-y-16 px-10">
//         <div className="flex justify-between">
//           <div className="w-[45%]">
//             <GalleryCard />
//           </div>
//           <div className="w-[45%]">
//             <GalleryCard />
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <div className="w-[45%]">
//             <GalleryCard />
//           </div>
//           <div className="w-[45%]">
//             <GalleryCard />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Gallery;
