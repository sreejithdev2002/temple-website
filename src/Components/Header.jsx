import headerLogo from "../assets/headerLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between bg-[rgba(252,148,30,0.5)] p-2">
      <div>
        <img src={headerLogo} className="h-auto w-[100px]" alt="" />
      </div>
      <div className="pr-10">
        <h1 className="text-4xl font-bold pr-20">
          PAZHUVIL THRETHAYUGA MOORTHI TEMPLE CHARTABLE TRUST.
        </h1>
        <div>
          <ul className="flex space-x-5 text-sm justify-end">
            {/* <li>HOME</li> */}
            <Link to="/">HOME</Link>
            <li>DONATIONS</li>
            <li>HISTORY</li>
            <li>RAMAYANA ASTROLOGY</li>
            <li>3D KSHETHRA</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
            <li>NOTIFY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
