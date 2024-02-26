import { PiSealWarningFill } from "react-icons/pi";
import pic1 from "../../../assets/pictures/Home Page/pic1.png"
const Banner = () => {
  return (
    <>
      <div className="w-full h-auto flex">
        <div className="w-full h-auto flex flex-row">
          <div className="w-7/12 h-auto bg-color4 flex flex-col items-end">
            <div className="w-2/4 h-auto flex flex-col items-start justify-start my-40 mr-20">
              <div className="w-full flex flex-row items-center">
                <PiSealWarningFill className="text-color1"/>
                <p className="w-full text-left text-[10px] font-manrope leading-23.17 text-color1">WELCOME TO BEAUTYNESS!! </p>
              </div>
              <h1 className="w-3/5 font-playfair font-bold text-4xl leading-80">Beauty is power a smile is its word.</h1>
              <p className="w-full font-manrope text-[14px] leading-32.4">
                There are many variation of passages are Ipsum available,
                majority have suffered alteration in some form.
              </p>
              <button className="bg-color1 w-1/3 text-center p-2 text-[10px] font-manrope leading-17.5 text-[#fff] tracking-wider mt-4" type="button">MAKE A RESERVATION</button>
            </div>
          </div>
          <div className="w-5/12 h-auto bg-[#2F4449] flex flex-col items-start justify-center">
              <div className="w-2/4 h-3/4 border-[8px] border-[#fff] border-l-0 relative">
                <img src={pic1} className="w-full h-4/5 shadow-[8px_8px_30px_10px_rgba(0,0,0,0.3)] absolute left-[-50px] top-10 bottom-10"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
