import Service from "./Service";
import Services1 from "../../../assets/pictures/Home Page/Services1.png"
import services2 from "../../../assets/pictures/Home Page/services2.png"
import Service2 from "./Service2";
const Services = () => {
  return (
    <>
      <div className="w-full h-auto ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-3/5 h-auto flex flex-col items-center justify-center mt-20">
            <p className=" font-manrope text-center text-sm font-semibold leading-23.17 text-color1">OUR SERVICES</p>
            <h1 className="w-2/5 text-center font-playfair font-bold text-2xl leading-32.4 ">We are Experienced in making you very beautiful</h1>
          </div>
          <div className="w-4/5 h-full flex flex-col items-center mt-8 mb-20">
            <Service src={Services1}/>
            <Service2 src={services2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
