import { SiAntdesign } from "react-icons/si";
import { BiChevronsRight } from "react-icons/bi";

const Services = () => {
    return (
        <div className='pb-10'>
            <p className='text-center text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 w-fit mx-auto' data-aos="zoom-in">Here is</p>
            <h3 className='text-3xl text-center font-bold' data-aos="zoom-in">My Services</h3>
            <div className='flex gap-2 justify-center mt-4' data-aos="zoom-in">
                <hr className='border border-red-500 w-4' />
                <hr className='border border-red-500 w-16' />
            </div>

            <div className='lg:grid grid-cols-3 mt-10 md:mx-0 mx-5 gap-10' data-aos="zoom-out-up">
                <div className='flex flex-col gap-7 bg-[#ffffff65] rounded-xl p-14'>
                    <div className="p-1 w-fit relative">
                        <div className="absolute p-1 border-purple-400 top-0 left-0 border-0 border-t-4 border-l-4"></div>
                        <div className="absolute p-1 border-purple-400 top-0 right-0 border-0 border-t-4 border-r-4"></div>
                        <div className="absolute p-1 border-purple-400 bottom-0 left-0 border-0 border-b-4 border-l-4"></div>
                        <div className="absolute p-1 border-purple-400 bottom-0 right-0 border-0 border-b-4 border-r-4"></div>
                        <SiAntdesign className="text-5xl text-[#f83e00]" />
                    </div>
                    <h3 className="text-2xl font-bold">Custom Web <br /> Design & Development</h3>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />  Landing Page</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />User Flow</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Good Looking</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Wireframing</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Web application</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-7 bg-[#ffffff65] rounded-xl p-14 md:my-0 my-5'>
                    <div className="p-1 w-fit relative">
                        <img src="https://www.kindpng.com/picc/m/20-200067_mavidea-web-design-responsive-icon-responsive-web-design.png" className="w-20" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">Responsive Web Design</h3>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />  Fluid Grids</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Flexible Images</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Media Queries</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Mobile-First Approach</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" /> Cross-Device Compatibility</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-7 bg-[#ffffff65] rounded-xl p-14'>
                    <div className="p-1 w-fit relative">
                        <img src="./database.png" className="h-16" alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">Database Integration</h3>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Data Mapping and Synchronization</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />API Connectors</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />ETL Processes</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Security and Access Controls</li>
                        <li className="flex items-center font-bold gap-2"><BiChevronsRight className="text-2xl" />Error Handling and Logging</li>
                    </ul>
                </div>
                

            </div>

        </div>
    );
};

export default Services;