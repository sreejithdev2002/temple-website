import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#F8F9FA] flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 space-x-0 justify-between p-10">
      <div className="flex flex-col justify-between space-y-5">
        <h3 className="text-[#FC931E] lg:text-lg xl:text-xl font-bold">
          പഴുവിൽ ത്രേതായുഗ മൂർത്തി ക്ഷേത്രം
        </h3>
        <p className="text-[#77808B] text-xs xl:text-sm md:w-full lg:w-[200px] xl:w-[400px] leading-5">
          ശ്രീരാമനും ശ്രീഹനുമാനുമാണ് പ്രധാന ദേവതകൾ. രാമായണ ജ്യോതിഷവും, പ്രത്യേക
          പൂജകളായ പൗർണമി ശക്തിപൂജയും ഈ ക്ഷേത്രത്തിന്റെ പ്രധാന സവിശേഷതകളാണ്.
          ആത്മീയ ശാന്തിയും ദൈവാനുഗ്രഹവും തേടുന്നവർക്ക് അനുഗ്രഹീതമായ ദർശനം.
        </p>
        <p className="text-[#283646]">
          Copyright Threthayuga Moorthi Kshethram
        </p>
      </div>
      <div className="space-y-5">
        <h3 className="text-[#FC931E] lg:text-lg xl:text-xl font-bold">
          Get in Touch
        </h3>
        <div className="flex items-start">
          <span>
            <IoLocationOutline color="#FC931E" size={20} />
          </span>
          <a
            href="https://maps.app.goo.gl/TUigpvZrsu6MMGJw8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#77808B] text-sm ml-3 w-[300px] hover:underline"
          >
            Velumman Padi Pazhuvil Rd, Chazhoor, Kerala 680571
          </a>
        </div>
        <div className="flex items-start">
          <span>
            <FiPhone color="#FC931E" size={20} />
          </span>
          <a
            className="text-[#77808B] text-sm ml-3 hover:underline"
            href="https://wa.me/919895163969"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 9895163969
          </a>
        </div>
      </div>
      {/* <div className="flex h-full space-x-3 lg:space-x-1 ">
        <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
          <FaFacebook size={20} />
        </div>
        <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
          <FaInstagram size={20} />
        </div>
        <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
          <FaWhatsapp size={20} />
        </div>
      </div> */}
      <div className="flex h-full space-x-3 lg:space-x-1">
        <a
          href="https://www.facebook.com/profile.php?id=100064611558165"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
            <FaFacebook size={20} />
          </div>
        </a>

        <a
          href="https://www.instagram.com/threthaayuga_moortheekshethram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
            <FaInstagram size={20} />
          </div>
        </a>

        <a
          href="https://wa.me/919895163969"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-2 xl:p-3 bg-[#FC931E] rounded-full text-white">
            <FaWhatsapp size={20} />
          </div>
        </a>
      </div>

      <div className="space-y-5">
        <h3 className="text-[#FC931E] lg:text-lg xl:text-xl font-bold">
          Join a Newsletter
        </h3>
        <div className="flex flex-col">
          <label className="text-[#77808B] mb-2">Your Email</label>
          <input
            className="bg-white text-[#929BA4] placeholder:text-[#929BA4] p-2 border outline-none border-[#76AEFF]"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <button className="bg-[#FC931E] text-white text-sm font-medium px-10 py-3 rounded-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Footer;
