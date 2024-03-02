import { Rating } from "@material-tailwind/react";
import Icon3 from "../../../assets/icons/Icon3.png";
const Comment = ({src,name,country}) => {
  return (
    <>
      <div className="w-2/4 h-auto flex flex-col items-center mx-5 mt-5">
        <div className="w-full h-auto bg-[#fff] p-8">
          “ It is a long established fact that a reader will be tracked
          distracted by the readable content of a page is when looking at its
          layout. The point of using Lorem of distribution it look like readable
          English “
        </div>
        <div className="w-full h-auto flex bg-color2 flex-row justify-center ">
          <div className="w-4/5 h-auto flex flex-row justify-center items-center">
            <div className="w-1/5 flex flex-col item-center ">
              <img src={src} alt="" className="w-full h-auto my-3 border-2 border-[#fff]" />
            </div>
            <div className="w-3/5  flex flex-col items-start pl-3">
              <Rating className="" value={4} readonly unratedColor="white" ratedColor="white"/>
              <h1 className="font-playfair font-bold text-[#fff] text-[18px] leading-17.5">{name}</h1>
              <p className="font-manrope font-semibold text-[14px] leading-23.17 text-[#fff]">{country}</p>
            </div>
            <div className="w-1/5">
              <img src={Icon3} alt="" className="w-4/5 h-4/5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
