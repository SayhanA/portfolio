import { BsDatabaseExclamation, BsPersonExclamation } from "react-icons/bs";
import { VscLiveShare } from "react-icons/vsc";

const Projects = () => {
    return (
        <section id="projects" className='my-10 overflow-hidden'>
            <p className='text-center text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 w-fit mx-auto' data-aos="zoom-in" data-aos-duration="1000">My Latest</p>
            <h3 className='text-3xl text-center font-bold' data-aos="zoom-in" data-aos-duration="1000">Projects & Applications</h3>
            <div className='flex gap-2 justify-center mt-4 pb-8' data-aos="zoom-in" data-aos-duration="1000">
                <hr className='border border-red-500 w-4' />
                <hr className='border border-red-500 w-16' />
            </div>

            <div className='md:grid grid-cols-2 mt-10'>
                <div data-aos="zoom-in-right" data-aos-duration="1000"><div className='w-full h-[350px] border-[10px] border-black rounded-xl bg-[url("/summer-sports.png")] bg-cover bg-right-top hover:bg-bottom transition-all duration-[5s]'></div></div>
                <div className='md:pl-10 flex md:mt-0 mt-5'>
                    <div className='h-full flex flex-col items-center gap-5 py-2 px-4' data-aos="zoom-in-right" data-aos-duration="1000">
                        <div className='border-[3px] border-red-400 w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                            <div className='border-4 border-red-500 w-3 h-3 rounded-full'></div>
                        </div>
                        <hr className='border-2 w-0 md:h-full h-screen border-red-500' />
                    </div>

                    <div className='mb-auto'>
                        <h3 className='text-2xl font-bold' data-aos="zoom-in-left" data-aos-duration="1000">Project Name: Summer Sports</h3>
                        <p className='pt-2 font-semibold ' data-aos="zoom-in-left" data-aos-duration="1000">Introduction Summer Sport is a Summer School vacation extra curriculum and activity web site for children</p>
                        <ul>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Dashboard:</span>  Included Admin, Instructor and Student/normal User dashboard panel.</p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Payment:</span> Using Stripe card payment system to get student payment and decrease available seat. </p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Data Collection:</span>For data collection I use MongoDB create, replace, update and delete operators.</p>
                            </li>
                        </ul>
                        <div className="lg:grid grid-cols-3">
                            <a href="https://summer-sports-e823d.web.app/" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1000">
                                <VscLiveShare className="text-2xl " />
                                <p>Live Link</p>
                            </a>
                            <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-SayhanA" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1400">
                                <BsPersonExclamation className="text-2xl " />
                                <p>Client Site</p>
                            </a>
                            <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-SayhanA" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1800">
                                <BsDatabaseExclamation className="text-2xl " />
                                <p>Server Site</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Project */}


            <div className='md:grid grid-cols-2 my-20'>
                <div className="order-2" data-aos="zoom-in-left" data-aos-duration="1000">
                    <div className='w-full h-[350px] border-[10px] border-black rounded-xl bg-[url("/toy-marketplace.png")] bg-cover bg-right-top hover:bg-bottom transition-all duration-[5s] order-2'></div>
                </div>
                <div className='pr-10 flex  md:mt-0 mt-5'>
                    <div className='md:ml-0 ml-5 h-full flex flex-col items-center gap-5 py-2 pr-4'>
                        <div className='border-[3px] border-red-400 w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                            <div className='border-4 border-red-500 w-3 h-3 rounded-full'></div>
                        </div>
                        <hr className='border-2 w-0 h-screen md:h-full border-red-500' />
                    </div>

                    <div className='mb-auto'>
                        <h3 className='text-2xl font-bold' data-aos="zoom-in-right" data-aos-duration="1000">Project Name: Summer Sports</h3>
                        <p className='pt-2 font-semibold ' data-aos="zoom-in-right" data-aos-duration="1000">Introduction Summer Sport is a Summer School vacation extra curriculum and activity web site for children</p>
                        <ul>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-right" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Dashboard:</span>  Included Admin, Instructor and Student/normal User dashboard panel.</p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-right" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Payment:</span> Using Stripe card payment system to get student payment and decrease available seat. </p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-right" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Data Collection:</span>For data collection I use MongoDB create, replace, update and delete operators.</p>
                            </li>
                        </ul>

                        <div className="lg:grid grid-cols-3">
                            <a href="https://toy-marketplace-a3965.web.app/" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-right" data-aos-duration="1000">
                                <VscLiveShare className="text-2xl " />
                                <p>Live Link</p>
                            </a>
                            <a href="https://github.com/SayhanA/car-marketplace-client" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-right" data-aos-duration="1000">
                                <BsPersonExclamation className="text-2xl " />
                                <p>Client Site</p>
                            </a>
                            <a href="https://github.com/SayhanA/car-marketplace-server" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-right" data-aos-duration="1000">
                                <BsDatabaseExclamation className="text-2xl " />
                                <p>Server Site</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Third Project */}

            <div className='md:grid grid-cols-2 mt-10'>
                <div data-aos="zoom-in-right" data-aos-duration="1000"><div className='w-full h-[350px] border-[10px] border-black rounded-xl bg-[url("/chife-website.png")] bg-cover bg-right-top hover:bg-bottom transition-all duration-[5s]'></div></div>
                <div className='md:pl-10 flex md:mt-0 mt-5'>
                    <div className='h-full flex flex-col items-center gap-5 py-2 px-4'>
                        <div className='border-[3px] border-red-400 w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                            <div className='border-4 border-red-500 w-3 h-3 rounded-full'></div>
                        </div>
                        <hr className='border-2 w-0 h-screen md:h-full border-red-500' />
                    </div>

                    <div className='mb-auto'>
                        <h3 className='text-2xl font-bold' data-aos="zoom-in-left" data-aos-duration="1000">Project Name: Summer Sports</h3>
                        <p className='pt-2 font-semibold ' data-aos="zoom-in-left" data-aos-duration="1000">Introduction The Food and Art:  sight showing chefs foods and their portfolio, work, experiance etc...</p>
                        <ul>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Landing Page: </span>Food&Art website has a view of chiefs recipes they make and there experience and recipe details.</p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Details Page:</span>Some pages are available for signed in user only like the Chef, Chefs Card, view Details page. </p>
                            </li>
                            <li className='flex gap-5 mt-5' data-aos="zoom-in-left" data-aos-duration="1000">
                                <p className='w-[27px] h-[12px] border-[4px] border-t-0 border-r-0 border-green-500 -rotate-45 mt-2'></p>
                                <p><span className='font-bold text-gray-600'>Main Pages: </span>There are Home, Chefs Card, Chef, Blog page for user to visit all chefs and review there foods.</p>
                            </li>
                        </ul>
                        <div className="lg:grid grid-cols-3">
                            <a href="https://b7a10-chef-recipe-hunter-466b2.web.app/" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1000">
                                <VscLiveShare className="text-2xl " />
                                <p>Live Link</p>
                            </a>
                            <a href="https://github.com/SayhanA/chief-recipe-hunter" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1400">
                                <BsPersonExclamation className="text-2xl " />
                                <p>Client Site</p>
                            </a>
                            <a href="https://github.com/SayhanA/chiefs-recipe-server" className="flex gap-2 text-xl font-bold py-4 mt-4 hover:bg-gradient-to-r from-red-500 via-green to-purple-500 items-center rounded-xl hover:text-gray-200 justify-center hover:text-lg" data-aos="zoom-in-left" data-aos-duration="1800">
                                <BsDatabaseExclamation className="text-2xl " />
                                <p>Server Site</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>



        </section>
    );
};

export default Projects;