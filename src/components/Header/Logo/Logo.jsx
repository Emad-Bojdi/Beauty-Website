import { PiFeatherLight } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";

const Logo = () => {
  return (
    <>
      <div className="w-5/12 h-auto flex p-7">
        <div className="w-3/5 h-auto flex flex-row justify-center">
          <div className="w-3/4 h-auto flex flex-row items-center">
            <PiFeatherLight className="text-color3 font-bold" />
            <p className="font-playfair font-bold w-7 pl-2">Beautyness</p>
          </div>
          <div className="w-full h-auto flex flex-row items-center">
            <FiPhoneCall className="text-color3" />
            <p className="text-[10px] font-manrope font-semibold leading-23.17 pl-2">
              Call Us - (+22) 123 456 7890
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
