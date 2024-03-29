import Banner from "./Banner/Banner";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";


const Header = () => {
    return(
        <>
        <div className="w-full h-auto flex flex-row">
            <Logo/>
            <Navbar/>
        </div>
        <Banner/>
        </>
    )
}

export default Header;