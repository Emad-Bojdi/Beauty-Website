import MenuItems from "./Menuitems";
// import {MdKeyboardArrowDown} from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {IoCalendarClearOutline} from "react-icons/io5"
const Navbar = () => {
  return (
    <>
      <div className="w-7/12 h-auto flex p-7">
        <div className="w-full h-auto flex flex-row justify-end items-center mr-5">
          {MenuItems.map((item, index) => (
            <ul className="" key={index}>
              <li className="px-4 text-sm font-manrope leading-23.17" key={index}>
                {item.title} {item.icon}
              </li>
            </ul>
          ))}
          <ul className="px-4 text-sm">
            {" "}
            <MdOutlineMailOutline />
          </ul>
          <ul className="px-4 text-sm">
            <FaLinkedinIn />
          </ul>
          <ul className="px-4 text-sm">
            <FaTwitter />
          </ul>
          <button className="w-40 h-10 flex flex-row items-center justify-center bg-color3 " type="button">
              <IoCalendarClearOutline className="text-[#fff]"/>
              <p className="ml-2 text-[12px] text-[#fff] font-manrope leading-23.17">
              RESERVATION
              </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
