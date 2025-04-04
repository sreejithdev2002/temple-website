import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#F8F9FA] flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between p-10">
      <div className="space-y-5">
        <h3 className="text-[#FC931E] text-xl font-bold">
          ത്രേതായുഗ മൂർത്തി ക്ഷേത്രം
        </h3>
        <p className="text-[#77808B] text-sm w-[400px] leading-5">
          ശ്രീരാമനും ശ്രീഹനുമാനുമാണ് പ്രധാന ദേവതകൾ. രാമായണ ജ്യോതിഷവും, പ്രത്യേക
          പൂജകളായ പൗർണമി ശക്തിപൂജയും ഈ ക്ഷേത്രത്തിന്റെ പ്രധാന സവിശേഷതകളാണ്.
          ആത്മീയ ശാന്തിയും ദൈവാനുഗ്രഹവും തേടുന്നവർക്ക് അനുഗ്രഹീതമായ ദർശനം.
        </p>
        <p className="text-[#283646]">
          Copyright Threthayuga Moorthi Kshethram
        </p>
      </div>
      <div className="space-y-5">
        <h3 className="text-[#FC931E] text-xl font-bold">Get in Touch</h3>
        <div className="flex items-start">
          <span>
            <IoLocationOutline color="#FC931E" size={20} />
          </span>
          <p className="text-[#77808B] text-sm ml-3 w-[300px]">
            Velumman Padi Pazhuvil Rd, Chazhoor, Kerala 680571
          </p>
        </div>
        <div className="flex items-start">
          <span>
            <FiPhone color="#FC931E" size={20} />
          </span>
          <p className="text-[#77808B] text-sm ml-3">+91 9495063241</p>
        </div>
      </div>
      <div className="flex h-full space-x-3">
        <div className="p-3 bg-[#FC931E] rounded-full text-white">
          <FaFacebook size={20} />
        </div>
        <div className="p-3 bg-[#FC931E] rounded-full text-white">
          <FaInstagram size={20} />
        </div>
        <div className="p-3 bg-[#FC931E] rounded-full text-white">
          <FaXTwitter size={20} />
        </div>
        <div className="p-3 bg-[#FC931E] rounded-full text-white">
          <FaWhatsapp size={20} />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-[#FC931E] text-xl font-bold">Join a Newsletter</h3>
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
