import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#fff] flex flex-row justify-center">
        <div className="w-3/5 h-auto flex flex-col items-center my-20">
          <div className="w-full h-auto flex flex-col items-center">
            <p className="w-full h-auto text-center font-manrope font-semibold text-color1 text-[15px] leading-23.17">
              OUR AWESOME BENEFITS
            </p>
            <h1 className="font-playfair font-bold text-[35px] leading-58.5 ">
              {" "}
              Actually what you&apos;ll get from
            </h1>
          </div>
          <div className="w-full h-auto flex flex-col items-center mt-5 ml-3 gap-8">
            <div className="w-full flex flex-row justify-center">
              <Benefit title="Optimised Energy Efficiency" />
              <Benefit title="Multi-faceted Water Filtration"/>
              <Benefit title="Uncompromising Quality and Durability"/>
            </div>
            <div className="w-full flex flex-row justify-center">
              <Benefit title="An Ultra-Pampering Spa Experience"/>
              <Benefit title="Easy Care for Unparalleled Enjoyment"/>
              <Benefit title="Optimised Energy Efficiency"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
