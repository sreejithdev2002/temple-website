import headerLogo from "../assets/headerLogo1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "DONATIONS", path: "/donations" },
    { name: "HISTORY", path: "/history" },
    { name: "RAMAYANA ASTROLOGY", path: "/ramayana-astrology" },
    // { name: "3D KSHETHRA", path: "/3d" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-[#fc941e80] p-2">
      <div className="lg:ml-10">
        <img
          loading="lazy"
          src={headerLogo}
          className="h-auto w-[80px]"
          alt=""
        />
      </div>
      <div className="pr-0 lg:pr-10 text-center">
        <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold pr-0 lg:pr-20">
          PAZHUVIL THRETHAYUGA MOORTHI TEMPLE CHARTABLE TRUST.
        </h1>
        <div>
          <ul className="flex flex-wrap justify-center items-center lg:justify-end space-x-2 lg:space-x-5 text-[8px] sm:text-[10px] md:text-xs">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={` ${
                    currentPath === item.path ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              onClick={() => {
                navigate("/booking-history");
              }}
            >
              <IoIosNotificationsOutline className="w-auto h-3 md:h-4 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
