function GalleryCard({ data }) {
  const imageApiURL = import.meta.env.VITE_API_IMAGE_URL;
  return (
    <div className="flex flex-col items-center">
      <img
        src={`${imageApiURL}${data.imageUrl}`}
        alt={data.image_title}
        className="rounded-2xl border-5 border-amber-500 h-[50vh] w-[90vw] lg:w-[30vw] "
      />
      <h3 className="font-bold">
        {data.image_title.charAt(0).toUpperCase() + data.image_title.slice(1)}
      </h3>
    </div>
  );
}

export default GalleryCard;
