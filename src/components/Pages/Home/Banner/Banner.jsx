import './Banner.css'
import { BiSolidDownload } from "react-icons/bi";

const Banner = () => {
    return (
        <section id='home' className='lg:grid grid-cols-2'>
            <div className='w-[100%] md:h-[700px]'>
                <h1 className='welcome md:mt-[0%] mt-20 z-10 text-[70px] md:text-[170px]'>Welcome</h1>
                <div className='absolute pl-[30px] md:top-1/2 top-[40%] translate-y-[-20%]'>
                    <p className='font-bold lg:text-3xl'>Hi, This is</p>
                    <h3 className='z-10 text-2xl lg:text-6xl font-bold text-gray-700'>Sayhan Ahmed</h3>
                    {/* <h3 className='z-10 pt-8 border-b-4 w-fit border-yellow-400 font-semibold text-4xl'>Web Developer</h3> */}

                    <div className='wrapper z-10 md:pt-8 border-b-4 w-fit border-yellow-400 font-semibold text-xl md:text-3xl'>
                        <div className='static-text md:mt-0 mt-1'>I'm a</div>
                        <ul className='dynamic-texts' >
                            <li><span>UX/UI Designer</span></li>
                            <li><span>MERN Developer</span></li>
                            <li><span>Web Researcher</span></li>
                        </ul>

                    </div>

                    <a href='https://drive.google.com/file/d/1dGmCj47qmRHIi5CjgAktzVN9UFI3ZFzy/view?usp=sharing' className=' btn btn-warning pl-10 pr-8 h-[60px] text-xl normal-case mt-10 flex items-center'>My Resume <BiSolidDownload className=' text-2xl' /> </a>
                </div>
            </div>
            <div className=' h-full relative '>
                <div className='z-10 md:h-[520px] h-screen mt-[150px] md:bg-[url("./back.png")] bg-no-repeat bg-center'>
                    <img src="/photo.png" className='w-full absolute bottom-0 z-10 overflow-hidden' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;