import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";

const Information = () => {
  return (
    <>
      <div className="w-4/5 mt-8">
        <form action="" className="w-full h-full flex flex-col items-center">
          <div className="w-full relative flex justify-center ">
            <IoPersonOutline className="absolute left-6 top-3 text-color1 " />
            <input
              type="text"
              className={`w-11/12 h-10 pl-10 border border-color1 placeholder:text-color5 placeholder:font-manrope placeholder:font-normal placeholder:text-[18px] placeholder:leading-28.6  focus:outline-none `}
              placeholder="Name"
            />
          </div>

          <div className="w-full relative flex justify-center mt-4">
            <input
              type="text"
              className={`w-11/12 h-10 pl-10 border border-color1 placeholder:text-color5 placeholder:font-manrope placeholder:font-normal placeholder:text-[18px] placeholder:leading-28.6  focus:outline-none `}
              placeholder="Email"
            />
            <AiOutlineMail className="absolute left-6 top-3 text-color1 " />
          </div>
          <div className="w-full relative flex justify-center mt-4">
            <input
              type="number"
              className={`w-11/12 h-10 pl-10 border border-color1 placeholder:text-color5 placeholder:font-manrope placeholder:font-normal placeholder:text-[18px] placeholder:leading-28.6  focus:outline-none `}
              placeholder="Phone"
            />
            <FiPhone className="absolute left-6 top-3 text-color1 " />
          </div>
          <div className="w-full relative flex justify-center mt-4 ">
            <input
              type="text"
              className={`w-11/12 h-10 pl-10 border border-color1 placeholder:text-color5 placeholder:font-manrope placeholder:font-normal placeholder:text-[18px] placeholder:leading-28.6  focus:outline-none `}
              placeholder="Service You Need"
            />
            <IoBookOutline className="absolute left-6 top-3 text-color1 " />
          </div>
          <div className="w-full  relative flex justify-center mt-4">
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              className={`w-11/12 h-32  pl-10 border border-color1 placeholder:text-color5 placeholder:font-manrope placeholder:font-normal placeholder:text-[18px] placeholder:leading-28.6 placeholder:pt-1  focus:outline-none `}
              placeholder="Any Note For Us"
            ></textarea>
            <PiNotePencil className="absolute left-6 top-3 text-color1 " />
          </div>
          <button className="w-11/12 h-10 mb-8 mt-5 bg-color1 text-white font-manrope font-extrabold text-[14px] leading-[17.5px]  " type="button">
            {" "}
            GET AN APPOINTMENT{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Information;
