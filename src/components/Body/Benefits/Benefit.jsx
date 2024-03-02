import Icon4 from "../../../assets/icons/Icon4.svg";

const Benefit = ({title}) => {
  return (
    <>
      <div className="w-1/3 flex flex-col items-start mx-5">
        <div className="w-auto">
            <img src={Icon4} alt="picture!!" className="w-4/5"/>
        </div>
        <div className="">
          <h1 className="w-full font-playfair font-bold text-[22px] leading-32.4 my-4">{title}</h1>
          <p className="font-manrope text-color5 font-normal text-[14px] leading-27.9">The point of using Lorem Ipsum is that  using making it look like readable.</p>
        </div>
      </div>
    </>
  );
};

export default Benefit;
