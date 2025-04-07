import GalleryImage from "../../assets/Gallery/gallery.png";

function GalleryCard() {
    return (
        <div className="flex flex-col items-center">
            <img src={GalleryImage} alt="" className="rounded-2xl border-5 border-amber-500" />
            <h3 className="font-bold">INFO</h3>
        </div>
    );
}

export default GalleryCard;