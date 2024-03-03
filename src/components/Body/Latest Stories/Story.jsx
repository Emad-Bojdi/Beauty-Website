const Story = ({src,title,style}) => {
  return (
    <>
      <div className={`w-1/3 h-auto flex flex-col bg-color7 ${style}`}>
        <div className="w-full h-full ">
            <img src={src} alt="" className="object-cover" />
        </div>
        <div className="m-4 ">
          <div className="w-full flex flex-row justify-center items-center">
            <p className="font-manrope text-[11px] font-bold leading-[16.25px] text-color1 pr-2"> 11TH AUGUST 2021</p>
            <span className="w-4 h-1 rounded-lg bg-color9"> </span>
             <p className="font-manrope text-[11px] font-bold leading-[16.25px] text-color1 pl-2">BY PETER BEROSON </p>
          </div>
          <div className="w-full h-auto flex flex-col items-center ">
            <h1 className="font-playfair font-bold text-[22px] leading-28.6 text-[#141414] py-3">
                {title}
            </h1>
            <p className="font-manrope font-normal text-[15px] leading-[27.9px] text-color5">
                The point of using Lorem lpsum hiter that using making it look like others readable will get end 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
