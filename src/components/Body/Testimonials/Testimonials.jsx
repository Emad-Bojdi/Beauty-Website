import Comment from "./Comment";
import slider1 from "../../../assets/pictures/Home Page/slider1.png";
import slider2 from "../../../assets/pictures/Home Page/slider2.png";
const Testimonials = () => {
  return (
    <>
      <div className="w-full h-auto bg-color7 flex flex-row justify-center">
        <div className="w-3/5 h-auto flex flex-col items-center my-20">
          <div className="w-full h-auto flex flex-col items-center">
            <p className="w-full h-auto text-center font-manrope font-semibold text-color1 text-[15px] leading-23.17">TESTIMONIALS</p>
            <h1 className="font-playfair font-bold text-[35px] leading-58.5 "> What our Customers says...</h1>
          </div>
          <div className="w-full h-auto flex flex-row justify-center mx-5">
            <Comment src={slider1} name="James Williams" country="United States"/>
            <Comment src={slider2} name="Lieo Jessica" country="United Kingdom"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
