const Appointment = () => {
  return (
    <>
      <div className="w-full h-auto  flex flex-row justify-center pl-5 bg-color7">
        <div className="w-3/5 h-auto flex flex-col items-center my-20">
          <div className="w-full flex flex-col items-start">
            <div className="w-2/4">
              <p className="font-manrope font-semibold text-[15px] leading-23.17 text-color1">
                Flat Discount{" "}
              </p>
              <h1 className="font-playfair font-bold text-[45px] leading-58.5 text-[#141414]">
                Claim upto 50% offer on ‍the most popular services...
              </h1>
              <p className="font-manrope text-color5 font-normal text-[16px] leading-28.6 mt-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, buying
                to injected humour, or randomised words.
              </p>
            </div>
            <div className="w-4/5 flex flex-row justify-start items-center mt-8">
              <div className="w-2/5 flex flex-col items-center bg-[#fff] border border-color8 py-3">
                <div className="w-full h-1/2 flex flex-row justify-start">
                  <div className="w-1/4 flex flex-row justify-center mt-2">
                    <span className="w-1 h-1 bg-color1 rounded-full mr-1"></span>
                    <span className="w-1 h-1 bg-color1 rounded-full mr-1"></span>
                    <span className="w-1 h-1 bg-color1 rounded-full"></span>
                  </div>
                  <div className="">
                    <h1 className="font-manrope text-[14px] font-extrabold leading-[21px] text-[#141414]">
                      MAIL US:
                    </h1>
                    <p className="font-manrope text-[15px] leading-[22.5px] text-[#141414]">
                      info@beautyness.com
                    </p>
                  </div>
                </div>
                <div className="w-full h-1/2 flex flex-row justify-start mt-3">
                  <div className="w-1/4 flex flex-row justify-center mt-2">
                    <span className="w-1 h-1 bg-color1 rounded-full mr-1"></span>
                    <span className="w-1 h-1 bg-color1 rounded-full mr-1"></span>
                    <span className="w-1 h-1 bg-color1 rounded-full"></span>
                  </div>
                  <div className="">
                    <h1 className="font-manrope text-[14px] font-extrabold leading-[21px] text-[#141414]">
                      CALL US:
                    </h1>
                    <p className="font-manrope text-[15px] leading-[22.5px] text-[#141414]">
                      (+22) 123 4568 009
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 bg-color2 h-full flex justify-center">
                <div className="w-4/5 h-full flex flex-col justify-center items-center">
                  <p className=" font-manrope font-extrabold text-[15px] leading-[25.26px] text-white">
                    - GET FLAT -
                  </p>
                  <h1 className=" font-manrope text-5xl text-white">50%</h1>
                  <p className="font-manrope font-extrabold text-[18px] leading-[31.5px] text-white">
                    Discount
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex justify-center">
            <form action="" className="w-4/5 flex flex-col justify-center items-center ">
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
              <input type="text" className="" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
