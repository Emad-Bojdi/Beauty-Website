import Logo1 from "../../assets/icons/Logo1.svg";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-color2 flex flex-row justify-center">
        <div className="w-3/5 h-auto flex flex-col items-center my-20">
          <div className="w-full flex flex-row justify-start items-center">
            <div className="w-1/4 flex flex-row justify-start items-center">
              <img src={Logo1} alt="" className="" />
              <p className="font-playfair font-bold w-7 pl-2 text-white text-[40px] leading-[50px]">
                Beautyness
              </p>
            </div>
            <div className="w-3/4">
              <div className="w-full flex flex-row justify-end">
                <div className="w-8 h-8 border-2 border-color1 flex items-center justify-center mx-1">
                  <a href="">
                    {" "}
                    <AiFillInstagram className="text-white w-4 h-4 " />{" "}
                  </a>
                </div>
                <div className="w-8 h-8 border-2 border-color1 flex items-center justify-center mx-1">
                  <a href="">
                    {" "}
                    <FaTwitter className="text-white w-4 h-4 " />{" "}
                  </a>
                </div>
                <div className="w-8 h-8 border-2 border-color1 flex items-center justify-center mx-1">
                  <a href="" className="">
                    {" "}
                    <RiLinkedinFill className="text-white w-4 h-4 " />{" "}
                  </a>
                </div>
                <div className="w-8 h-8 border-2 border-color1 flex items-center justify-center mx-1">
                  <a href="" className="">
                    {" "}
                    <MdEmail className="text-white w-4 h-4 " />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-b-white border-opacity-45 my-10"></div>
          <div className="w-full h-auto flex flex-row justify-start">
            <div className="w-1/4 h-auto flex flex-col items-start">
              <div className="w-full h-12">
                <h1 className="font-playfair font-bold text-[22px] leading-[30.8px] text-white">
                  Explore
                </h1>
              </div>
              <div className="w-full h-auto flex flex-col">
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Home
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  About Us
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Services
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Appointments
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-1/4 h-auto flex flex-col items-start">
              <div className="w-full h-12">
                <h1 className="font-playfair font-bold text-[22px] leading-[30.8px] text-white">
                  Utility Pages
                </h1>
              </div>
              <div className="w-full h-auto flex flex-col">
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Start here
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Style guide
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  404 not found
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Password protected
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Licences
                </a>
                <a
                  href=""
                  className="font-manrope font-medium text-[17px] leading-[34px] text-white"
                >
                  Changeblog
                </a>
              </div>
            </div>
            <div className="w-1/3 h-auto flex flex-col items-start">
              <div className="w-full h-12">
                <h1 className="font-playfair font-bold text-[22px] leading-[30.8px] text-white">
                  Keep in Touch
                </h1>
              </div>
              <div className="w-full h-auto flex flex-col gap-5">
                <div className="w-full flex flex-row">
                  <h5 className=" font-bold text-[17px] font-manrope text-white">Address:</h5>
                  <p className="font-medium text-[16px] font-manrope text-white pl-2 ">24A Kingston St, Los Vegas,NC 28202, USA</p>
                </div>
                <div className="w-full flex flex-row">
                  <h5 className="font-bold text-[17px] font-manrope text-white">Mail:</h5>
                  <p className="font-medium text-[17px] font-manrope text-white pl-2 ">support@doctors.com</p>
                </div>
                <div className="w-full flex flex-row">
                  <h5 className="font-bold text-[17px] font-manrope text-white">Phone:</h5>
                  <p className="font-medium text-[17px] font-manrope text-white pl-2 ">(+22)123-4567-900</p>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-auto flex flex-col items-start justify-self-end pl-20">
              <div className="w-full h-12">
                <h1 className="font-playfair font-bold text-[22px] leading-[30.8px] text-white">
                  Working Hours
                </h1>
              </div>
              <div className="w-full h-auto flex flex-col gap-3">
                <h5 className="font-manrope text-white text-[17px]"> Mon to Fri : 7am-6pm</h5>
                <h5 className="font-manrope text-white text-[17px]"> Sat : 9am - 7pm</h5>
                <h5 className="font-manrope text-white text-[17px]"> Sun: 9am - 6pm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
