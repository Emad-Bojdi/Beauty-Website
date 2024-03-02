const Service = ({ src }) => {
  return (
    <>
      <div className="w-full h-auto ">
        <div className={`w-full h-auto flex flex-row-reverse justify-center relative"`}>
          <div className="w-2/5 h-full flex flex-col items-end">
            <div className="w-4/5 flex flex-col items-start border-b border-b-color5 border-opacity-30 mt-6">
              <div className="w-full h-auto flex flex-row justify-start ">
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  Face masks ...............................{" "}
                </h1>
                <p className="font-manrope font-normal text-[18px] leading-28.6">
                  {" "}
                  {"  "}from
                </p>
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  $48.00
                </h1>
              </div>
              <p className="text-sm leading-28.6 text-color5 mb-3">
                The versions have evolved over the sometimes by accident.
              </p>
            </div>
            <div className="w-4/5 flex flex-col item-center border-b border-b-color5 border-opacity-30 mt-3">
              <div className="w-full h-auto flex flex-row justify-start">
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  Full body massage .....................{" "}
                </h1>
                <p className="font-manrope font-normal text-[18px] leading-28.6">
                  {" "}
                  from
                </p>
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  $54.00
                </h1>
              </div>
              <p className="text-sm leading-28.6 text-color5 mb-3">
                The versions have evolved over the sometimes by accident.
              </p>
            </div>
            <div className="w-4/5 flex flex-col item-center border-b border-b-color5 border-opacity-30 mt-3">
              <div className="w-full h-auto flex flex-row justify-start">
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  Geothermal spa .......................
                </h1>
                <p className="font-manrope font-normal text-[18px] leading-28.6">
                  {" "}
                  from
                </p>
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  $54.00
                </h1>
              </div>
              <p className="text-sm leading-28.6 text-color5 mb-3">
                The versions have evolved over the sometimes by accident.
              </p>
            </div>
            <div className="w-4/5 flex flex-col item-center border-b border-b-color5 border-opacity-30 mt-3">
              <div className="w-full h-auto flex flex-row justify-start">
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  Sauna relax ...............................
                </h1>
                <p className="font-manrope font-normal text-[18px] leading-28.6">
                  from
                </p>
                <h1 className="text-[20px] leading-27.9 font-normal font-playfair">
                  $73.00
                </h1>
              </div>
              <p className="text-sm leading-28.6 text-color5 mb-3">
                The versions have evolved over the sometimes by accident.
              </p>
            </div>
            <div className="w-4/5 h-auto mt-5 ">
              <button
                type="button"
                className="font-manrope text-sm font-extrabold p-3 border-2 border-color1"
              >
                GET AN APPOINTMENT
              </button>
            </div>
          </div>
          <div className="absolute w-full h-full">
              <div className="w-12 h-12 absolute left-[733px] bottom-[223px] bg-color2"></div>
            </div>
          <div className="w-2/5 h-auto ">
            <img src={src} alt="" className="w-full h-auto shadow-[8px_8px_30px_10px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
