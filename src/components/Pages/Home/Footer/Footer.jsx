import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#040836]'>
            <div className="flex flex-wrap justify-between px-10 py-20 lg:w-10/12 mx-auto text-white gap-10 text-3xl">
                <div className="flex gap-10"><FaFacebookF />
                    <FaLinkedinIn />
                    <FaWhatsapp />
                </div>
                <div> <p className="text-xl text-gray-500">© 2023 Ambrox. All Rights Reserved</p> </div>
            </div>

        </div>
    );
};

export default Footer;