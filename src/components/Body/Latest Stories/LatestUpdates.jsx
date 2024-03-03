import latest from "../../../assets/pictures/Home Page/latest.png.jfif";
import latest2 from "../../../assets/pictures/Home Page/latest2.png";
import latest3 from "../../../assets/pictures/Home Page/latest3.png";
import Story from "./Story";

const LatestUpdates = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#fff] flex flex-row justify-center">
        <div className="w-3/5 h-auto flex flex-col items-center my-20">
          <div className="w-full h-auto flex flex-col items-center">
            <p className="w-full h-auto text-center font-manrope font-semibold text-color1 text-[15px] leading-23.17">
              OUR BLOG
            </p>
            <h1 className="font-playfair font-bold text-[35px] leading-58.5 ">
              {" "}
              Latest Updates
            </h1>
          </div>
          <div className="w-full h-auto flex flex-col items-center ">
            <div className="w-full h-auto flex flex-row justify-around items-start mt-8">
              <Story
                src={latest}
                title="The energy efficiency of the hydrotherapy"
              />
              <Story
                src={latest2}
                title="Tips to improve your body via cleaning"
                style={"mx-8"}
              />
              <Story
                src={latest3}
                title="Experience the beauty at our beauty spa "
              />
            </div>
            <div className="w-1/4 h-14 flex flex-row justify-center border-2 border-color1 mt-10">
              <button className="w-full font-manrope font-extrabold text-[#141414] text-[14px] leading-[17.5px]" type="button"> VIEW MORE STORIES </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestUpdates;
