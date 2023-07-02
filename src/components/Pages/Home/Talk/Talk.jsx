import { HiOutlineLocationMarker, HiOutlineMailOpen, HiOutlinePhoneIncoming } from "react-icons/hi";
import { useForm } from 'react-hook-form';

const Talk = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <section id="contact" className="overflow-hidden">
            <h1 className='uppercase lg:text-[1500%] font-bold text-[#a8cff41a] mt-20 absolute right-0'>CONTACT</h1>
            <div className='lg:flex w-full md:h-screen  py-16'  data-aos="fade-up-right" data-aos-duration="3000">
                <div className='bg-[#ffffff65] mx-5 md:mx-0 md:w-[60%] rounded-2xl md:p-20 p-4 flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 w-fit'>Let's talk?</h3>
                    <p className='text-gray-500'>It's all about the humans behind a brand and those experiencing it, <br /> we're right there. In the middle performance quick.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 z-20'>
                        <div className='md:flex gap-5'>
                            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className='py-4 px-4 w-full rounded-lg' />
                            <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} className='py-4 px-4 w-full rounded-lg md:mt-0 mt-5' />
                        </div>
                        <input type="text" placeholder="name" {...register("name", {})} className='py-4 px-4 w-full rounded-lg' />

                        <textarea placeholder='Your message' {...register("Discription", {})} className='h-[120px] py-4 px-4 w-full rounded-lg' />

                        <input type="submit" value="Send Message" className='btn h-[60px] bg-[#ff2a2ad1] text-white text-lg normal-case' />
                    </form>

                </div>
                <div className="md:w-[40%] h-full flex justify-end items-center">
                    <div className='md:mt-0 mt-10 z-20'>
                        <div className="flex gap-5 mb-10" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className='h-[60px] md:h-[80px] w-[60px] md:w-[80px] flex justify-center items-center rounded-xl bg-blue-500'><HiOutlineMailOpen className="text-white text-4xl" /></div>
                            <div>
                                <h4 className="uppercase md:text-xl font-bold text-gray-400 pb-3">our email</h4>
                                <p className="md:text-xl font-bold">sayhanahmed5@gmail.com</p>
                                <p className="md:text-xl font-bold">sayhanahmed05@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-10" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className='h-[60px] md:h-[80px] w-[60px] md:w-[80px] flex justify-center items-center rounded-xl bg-red-500'><HiOutlineLocationMarker className="text-white text-4xl" /></div>
                            <div>
                                <h4 className="uppercase md:text-xl font-bold text-gray-400 pb-3">address</h4>
                                <p className="md:text-xl font-bold">62/2 East Brahmondi, <br /> Narsingdi, Dhaka, <br /> Bangladesh</p>
                                <p className="md:text-xl font-bold">Post Code: 1600</p>
                            </div>
                        </div>
                        <div className="flex gap-5" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className='h-[60px] md:h-[80px] w-[60px] md:w-[80px] flex justify-center items-center rounded-xl bg-yellow-500'><HiOutlinePhoneIncoming className="text-white text-4xl" /></div>
                            <div>
                                <h4 className="uppercase md:text-xl font-bold text-gray-400 pb-3">Phone</h4>
                                <p className="md:text-xl font-bold">+8801782135001</p>
                                <p className="md:text-xl font-bold">+8801952381156</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Talk;