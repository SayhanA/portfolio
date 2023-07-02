import './Plane.css'

const Plane = () => {
    return (
        <div className='mt-20'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 w-fit mx-auto mb-2' data-aos="zoom-in" data-aos-duration="1000">My New</p>
            <section className="plan">
                <h3 className='text-3xl font-bold text-center' data-aos="zoom-in" data-aos-duration="1000">Plans & Goals</h3>
                <div className='flex gap-2 justify-center mt-4 mb-10' data-aos="zoom-in" data-aos-duration="1000">
                    <hr className='border border-red-500 w-4' />
                    <hr className='border border-red-500 w-16' />
                </div>

                <div className="plan-list flex md:justify-between flex-wrap gap-5 justify-center pb-12">
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <img src="./Full-stuck.png" className='w-52' alt="" />
                        <b>Full Stuck</b>
                        <p>I want to start</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://pngimg.com/d/php_PNG29.png" className='w-40' alt="" />
                        <b>PHP</b>
                        <p>I want to learn</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://w7.pngwing.com/pngs/580/809/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo.png" className='w-40 rounded-full' alt="" />
                        <b>Data Structure</b>
                        <p>I want to know</p>
                    </div >
                    {/* <div>
                        <img src="https://seeklogo.com/images/E/English_First-logo-A77C273353-seeklogo.com.png" className='w-40 rounded-full' alt="" />
                            <b>Spoken English</b>
                            <p>I want to end</p>
                    </div> */}
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <img src="./ecom.png" alt="" />
                        <b>Ecommerce</b>
                        <p>I want to develop</p>
                    </div>
                </div>
                <div className=" plan-list flex md:justify-between flex-wrap gap-5 justify-center pb-12">
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-regular fa-clock text-6xl text-yellow-400"></i>
                        <b className='mt-9'>Use Time</b>
                        <p>I will never waste time</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-solid fa-gamepad text-6xl text-yellow-400"></i>
                        <b className='mt-9'>Use Device</b>
                        <p>No playing games</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-solid fa-mug-saucer text-6xl text-yellow-400"></i>
                        <b className='mt-9'>Good Habit</b>
                        <p>Wake up early</p>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-solid fa-moon text-6xl text-yellow-400"></i>
                        <b className='mt-9'>Productivity</b>
                        <p>Go bed early</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Plane;