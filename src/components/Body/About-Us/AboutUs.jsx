import SubContent from "./SubContent";
import Icon from "../../../assets/icons/Icon.png";
import Icon1 from "../../../assets/icons/Icon1.png";
import Icon2 from "../../../assets/icons/Icon2.png";
import about from "../../../assets/pictures/Home Page/about.png";
import Background from "../../../assets/pictures/Home Page/Background.png";
const AboutUs = () => {
  return (
    <>
      <div className="w-full h-auto flex bg-color4 ">
        <div className="w-full h-auto flex flex-row justify-center">
          <div className="w-1/3 my-20 ">
            <div className="w-full h-auto flex flex-col items-start">
              <p className="font-manrope text-sm leading-23.17 text-color3">
                ABOUT US
              </p>
              <h1 className="w-3/5 font-playfair font-bold text-2xl py-4">
                The Beauty is about being Comfortable in your own skin!
              </h1>
              <p className="font-manrope font-normal leading-28.6 text-color5 text-sm">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, buying
                to injected humour, or randomised words which dont look even
                many desktop publishing packages.
              </p>
            </div>
            <div className="w-full h-auto flex flex-row justify-start">
              <SubContent src={Icon} title="Beauty Experts" style={"w-1/4"} />
              <SubContent src={Icon1} title="Great Services" style={"w-1/3"} />
              <SubContent src={Icon2} title="100% Genuine" style={"w-1/3"} />
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-center ml-4">
            <div className="w-7/12 h-auto relative">
              <img src={Background} alt="" className="" />
              <div className="absolute top-10 right-10 w-full h-auto">
                <img src={about} alt="" className="" />
              </div>
            </div>
            {/* <img src={about} alt="" className="absolute top-5 right-5"/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
