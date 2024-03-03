import AboutUs from "./About-Us/AboutUs";
import Appointment from "./Appointment/Appointment";
import Benefits from "./Benefits/Benefits";
import Features from "./Faetures/Features";
import LatestUpdates from "./Latest Stories/LatestUpdates";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Body = () => {
    return (
        <>
            <Features/>
            <AboutUs/>
            <Services/>
            <Testimonials/>
            <Benefits/>
            <Appointment/>
            <LatestUpdates/>
        </>
    )
}

export default Body;