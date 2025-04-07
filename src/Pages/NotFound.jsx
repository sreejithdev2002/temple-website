import Footer from "../Components/Footer";
import Header from "../Components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-orange-200 h-[47.5vh] justify-center items-center">
        <h2 className="text-3xl">Website Not Found</h2>
        <h3 className="text-8xl font-semibold text-red-600">404</h3>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
