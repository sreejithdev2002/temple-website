import headerLogo from "../assets/headerLogo.png";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-[rgba(252,148,30,0.5)] p-2">
      <div>
        <img
          loading="lazy"
          src={headerLogo}
          className="h-auto w-[80px] lg:w-[100px]"
          alt=""
        />
      </div>
      <div className="pr-0 lg:pr-10">
        <h1 className="sm:text-xs text-sm md:text-lg lg:text-xl xl:text-2xl font-bold pr-0 lg:pr-20">
          PAZHUVIL THRETHAYUGA MOORTHI TEMPLE CHARTABLE TRUST.
        </h1>
        <div>
          <ul className="flex space-x-2 lg:space-x-5 text-[8px] md:text-[10px] lg:text-xs xl:text-sm lg:justify-end">
            {/* <li>HOME</li> */}
            <Link to="/">HOME</Link>
            <li>DONATIONS</li>
            <li>HISTORY</li>
            <li>RAMAYANA ASTROLOGY</li>
            <li>3D KSHETHRA</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
            <li>
              <IoIosNotificationsOutline size={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
