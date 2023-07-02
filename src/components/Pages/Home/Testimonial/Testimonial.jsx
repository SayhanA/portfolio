import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='md:h-[600px] mt-20'>
            <div className='h-auto flex md:flex-row flex-col-reverse'>
                <div className='md:w-[65%] flex justify-center flex-col ml-10 md:mb-0 mb-10'>
                    <h3 className='content' data-aos="zoom-in" data-aos-duration="1000">Testimonial</h3>
                    <div className='flex gap-4'>
                        <div className='flex flex-col items-center gap-1' data-aos="zoom-in" data-aos-duration="1000">
                            <div className='border-[3px] border-red-400 w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                                <div className='border-4 border-red-500 w-3 h-3 rounded-full'></div>
                            </div>
                            <hr className='border-2 w-0 h-full border-red-500' />
                        </div>
                        <div>
                            <h3 className='text-xl font-bold pb-2' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Md. Erfan Ahemd Emon</h3>
                            <h3 className='text-lg font-bold text-gray-500' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Full-stack Software Engineer at Therap(BD) Ltd.</h3>
                            <p className='mt-7 text-md text-gray-500 md:pr-14 pr-5' data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">I had the pleasure of working with a talented MERN Stack developer who truly impressed me. Their deep understanding of MongoDB, Express.js, React.js, and Node.js was evident in every aspect of the project. They consistently delivered high-quality code, paying meticulous attention to detail. Their problem-solving abilities and effective communication made the collaboration smooth and efficient. I highly recommend this MERN Stack developer for their exceptional skills and dedication to delivering exceptional results.</p>
                        </div>
                    </div>
                </div>
                <div className='h-full flex justify-center items-center md:w-[35%] md:mb-0'  data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className='blob2 relative overflow-hidden'>
                        <div className='blob absolute -bottom-5'>
                            <img src="./emon.png" className='md:w-[300px] absolute -bottom-20 left-1/2 md:translate-x-[-50%] -translate-x-[70%]' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;