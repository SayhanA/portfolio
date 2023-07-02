import { Outlet } from "react-router-dom";
import './Main.css'
// import './cursor'
import NavBar from "../components/NavBar/NavBar";
import SideLinks from "../components/SideLinks/SideLinks";
import Footer from "../components/Pages/Home/Footer/Footer";



const Main = () => {

    return (
        <div className="bg-gradient-to-r from-[#FDF1C1] to-[#EFFDFE] min-h-screen">
            <div className="pointer">asdfasdfadsf</div>
            <div className="lg:w-[1300px] lg:px-10 mx-auto ">
                <NavBar />
                <div className='fixed left-0 top-[50%] translate-y-[-50%] bg-[#ffffff80] z-10 md:visible hidden'>
                    <SideLinks />
                </div>

                <Outlet />
                
            </div>
            <Footer />
        </div>
    );
};

export default Main;