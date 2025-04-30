import Footer from "../Components/Footer";
import Header from "../Components/Header";

function ContactPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col p-10 items-center ">
        <h2 className="font-bold text-4xl">CONTACT PAGE</h2>
        <p className="text-gray-500 text-xs">
          Reach us through our several contact lines
        </p>
        <div className="flex mt-20 mb-5 self-start px-20">
          <div>
            <h3 className="text-xl font-bold px-5 w-[20vw]">
              PHONE NUMBERS :{" "}
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold px-5">+91 9895163969</h3>
            <h3 className="text-xl font-bold px-5">+91 9526413882</h3>
          </div>
        </div>
        <div className="flex my-5 space-y-10 self-start px-20">
          <div>
            <h3 className="text-xl font-bold px-5 w-[20vw]">EMAIL ID : </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold px-5">
              threthayugamoorthikshethram@gmail.com
            </h3>
            {/* <h3 className="text-xl font-bold px-5">templexyz@gmail.com</h3> */}
          </div>
        </div>
        <div className="flex my-5 space-y-10 self-start px-20">
          <div>
            <h3 className="text-xl font-bold px-5 w-[20vw]">LOCATION : </h3>
          </div>
          <div>
            <p className="text-xl font-bold px-5 w-[60vw]">
              THRETHAYUGAMOORTHI KSHETHRAM, CHARITABLE TRUST, Pazhuvil,
              Thrissur, Kerala - 680564
            </p>
          </div>
        </div>
        <div className="flex my-5 space-y-10 px-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.7965985121825!2d76.1496536!3d10.431737799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f3bea6e97d87%3A0x17ce143ac0fcfe7d!2sThrethayuga%20Moorthi%20Kshethram!5e1!3m2!1sen!2sin!4v1745917797258!5m2!1sen!2sin"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="border-3 border-gray-600 w-[80vw]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
