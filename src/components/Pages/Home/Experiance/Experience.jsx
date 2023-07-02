

const Experience = () => {
    return (
        <div className='relative pb-20 overflow-hidden' data-aos="zoom-out-up">
            <img src="https://ambrox-light.netlify.app/static/media/2.554835e385066c2211b9.png" className="absolute w-72 h-72 -bottom-20 right-0" alt="" data-aos="zoom-in" data-aos-duration="2000" />
            <div className='absolute w-[400px] h-auto border border-red-400 right-0 rounded-full blur-3xl bg-[#f0406c30] shadow-2xl'></div>
            <div className='bg-[#ffffff65] w-full h-auto rounded-xl py-16'>
                <div data-aos="zoom-out-up">
                    <h4 className='font-bold text-xl text-center pt-10 pb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 w-fit mx-auto'>Ready to</h4>
                    <h2 className='font-bold text-3xl text-center'>Get Hired</h2>
                    <div className='flex gap-2 justify-center mt-4'>
                        <hr className='border border-red-500 w-4'/>
                        <hr className='border border-red-500 w-16'/>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 pt-16 md:px-10'>
                    <div className='border-0 h-auto mb-20 px-10' data-aos="fade-up">
                        <img src="./color-card.png" className='w-24' alt="" />
                        <h3 className='text-xl font-bold py-2 pt-10'>UX/UI Designer</h3>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus, debitis dolorum iure numquam architecto et laboriosam, non totam, perspiciatis consequuntur dolor earum aspernatur est dolores deserunt tempore id ratione.</p>
                    </div>
                    <div className='border-0 border-l-2 border-r-2 h-auto mb-20 px-10'  data-aos="fade-up">
                        <img src="./html-tag.png" className='w-24 mt-1' alt="" />
                        <h3 className='text-xl font-bold py-2 pt-10'>HTML Developer</h3>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus, debitis dolorum iure numquam architecto et laboriosam, non totam, perspiciatis consequuntur dolor earum aspernatur est dolores deserunt tempore id ratione.</p>
                    </div>
                    <div className='border-0 h-auto mb-20 px-10'  data-aos="fade-up">
                        <img src="./Pencil-scale.png" className='w-24' alt="" />
                        <h3 className='text-xl font-bold py-2 pt-10'>MERN Stack Developer</h3>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa temporibus, debitis dolorum iure numquam architecto et laboriosam, non totam, perspiciatis consequuntur dolor earum aspernatur est dolores deserunt tempore id ratione.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Experience;