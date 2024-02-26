import Feature from "./Feature";
import feature1 from "../../../assets/pictures/Home Page/feature1.png";
import feature2 from "../../../assets/pictures/Home Page/feature2.png";
import feature3 from "../../../assets/pictures/Home Page/feature3.png";

const Features = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#fff] flex justify-center py-32">
        <div className="w-3/5 h-auto flex flex-row justify-center items-center">
            <Feature src={feature1} title="Spa & Massage"/>
            <Feature src={feature2} title="Hair & Beauty"/>
            <Feature src={feature3} title="Body Treatments"/>
        </div>
      </div>
    </>
  );
};
export default Features;
