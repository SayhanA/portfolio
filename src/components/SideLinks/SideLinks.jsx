import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const SideLinks = () => {
    return (
        <div className="z-10 px-2 flex flex-col">
            <a target='_blank' rel="noreferrer" href='mailto:sayhanahmed5@gmail.com' className='hover:border-yellow-500 hover:scale-125 transition-all hover:text-yellow-500 border-0 border-b-2 p-4 text-[27px] mt-2' ><MdEmail /></a>
            <a target='_blank' rel="noreferrer" href='https://twitter.com/SayhanAhme99567' className='hover:border-blue-400 hover:scale-125 transition-all hover:text-blue-500 border-0 border-b-2 p-4 text-[27px] mt-2' ><FaTwitter /></a>
            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/sayhan.ahmed.94' className='hover:border-blue-700 hover:scale-125 transition-all hover:text-blue-700 border-0 border-b-2 p-4 text-[27px] mt-2' ><FaFacebookF /></a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sayhan-ahmed-863338279/' className='hover:border-green-500 hover:scale-125 transition-all hover:text-green-500 border-0 border-b-2 p-4 text-[27px]' ><FaLinkedinIn /></a>
            <a target='_blank' rel="noreferrer" href='https://github.com/SayhanA' className='hover:border-gray-400 hover:scale-125 transition-all hover:text-gray-600 border-0 border-b-2 p-4 text-[27px] ' ><FaGithub /></a>
            <a target='_blank' rel="noreferrer" href='https://studio.youtube.com/channel/UCygabYWLx9Z543fZqTmJErg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D' className='hover:border-blue-400 hover:scale-125 transition-all hover:text-red-500 p-4 text-[27px] mb-2' ><FaYoutube /></a>

            
        </div>
    );
};

export default SideLinks;