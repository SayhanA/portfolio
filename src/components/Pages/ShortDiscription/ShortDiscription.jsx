import { useState } from 'react';
import './ShortDiscription.css'

const ShortDiscription = () => {
    const [btn, setBtn] = useState('biography')

    return (
        <div className='py-20 mx-auto relative'  data-aos="fade-up">
            <div className='grid grid-cols-3 md:gap-5 absolute left-1/2 translate-x-[-50%] w-full md:w-10/12 text-center font-bold md:md:text-xl border p-3 md:rounded-full bg-[#ffffff] z-20'>
                <div onClick={() => { setBtn("biography") }} className={`p-3 hover:bg-black hover:text-white z-20 md:rounded-full transition-all ${btn === 'biography' && "bg-black text-white"}`}>Biography - 01</div>
                <div onClick={() => { setBtn("skills") }} className={`p-3 hover:bg-black hover:text-white z-20 md:rounded-full transition-all ${btn === 'skills' && "bg-black text-white"}`}>Skills - 02</div>
                <div onClick={() => { setBtn("education") }} className={`p-3 hover:bg-black hover:text-white z-20 md:rounded-full transition-all ${btn === 'education' && "bg-black text-white"}`}>Education - 03</div>
            </div>

            {
                btn === 'biography' && <div className='bg-[#ffffff62] top-1/2 pt-[100px] p-10 mt-[40px] rounded-xl transition-all'>
                    <div className='md:grid grid-cols-2 md:px-5 pb-14'>
                        <div className='md:min-h-[200px] md:px-10 '>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Full name</div>
                                <div className='md:text-lg font-semibold text-gray-500'>Sayhan Ahmed Tonmoy</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Age</div>
                                <div className='md:text-lg font-semibold text-gray-500'>25</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Email</div>
                                <div className='md:text-lg font-semibold text-gray-500 '>sayhanahmed5@gmail.com</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Skype</div>
                                <div className='md:text-lg font-semibold text-gray-500'>cd98398798</div>
                            </div>
                        </div>
                        <div className='min-h-[200px] md:px-10'>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Birthday</div>
                                <div className='md:text-lg font-semibold text-gray-500'>02 February, 1998</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Address</div>
                                <div className='md:text-lg font-semibold text-gray-500'>Dhaka, Bangladesh</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Phone</div>
                                <div className='md:text-lg font-semibold text-gray-500'>+8801782132001</div>
                            </div>
                            <div className='flex justify-between border-0 border-b-2 py-3 pt-5' data-aos="zoom-in-up">
                                <div className='md:text-xl font-bold'>Gender</div>
                                <div className='md:text-lg font-semibold text-gray-500'>Male</div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                btn === 'skills' && <div className='bg-[#ffffff62] top-1/2 pt-[100px] p-10 px-28 pb-20 mt-[40px] rounded-xl'>
                    <div className='flex flex-wrap md:text-2xl font-bold items-center justify-around'>
                        <img src="./color-card.png" className='w-16' alt="" />
                        <h3 className='ml-10'>UX/UI Designer</h3>
                        <div className='ml-auto flex flex-wrap items-center'>
                            <p className='mr-5'>80%</p>
                            <progress className="progress progress-error w-80" value="80" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:text-2xl mt-10 font-bold items-center justify-around'>
                        <img src="./html-tag.png" className='w-16' alt="" />
                        <h3 className='ml-10'>HTML Developer</h3>
                        <div className='ml-auto flex flex-wrap items-center'>
                            <p className='mr-5'>90%</p>
                            <progress className="progress progress-error w-80" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:text-2xl mt-10 font-bold items-center justify-around'>
                        <img src="./Pencil-scale.png" className='w-16' alt="" />
                        <h3 className='ml-10'>MERN Stack Developer</h3>
                        <div className='ml-auto flex flex-wrap items-center'>
                            <p className='mr-5'>75%</p>
                            <progress className="progress progress-error w-80" value="75" max="100"></progress>
                        </div>
                    </div>
                </div>
            }
            {
                btn === 'education' && <div className='bg-[#ffffff62] md:top-1/2 pt-[100px] p-10 mt-[40px] rounded-xl'>
                    <div className="lg:grid grid-cols-2 md:gap-16 px-10">
                        <div className="my-education">
                            <ul>
                                <li>
                                    <h3>My Education</h3>
                                    <ul className="sesume-ser">
                                        <li>
                                            <h4>Honours in Zoology</h4>
                                        </li>
                                        <li className="resume-year">National University</li>
                                        <li className='bg-red-500 text-white font-bold px-5 py-2 w-fit mb-3'> 2018 - 2023</li>
                                        <li>
                                            List skill/technologies here. You can change the icon above
                                            to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.
                                        </li>
                                        <hr />
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div className="my-education">
                            <ul>
                                <li>
                                    <h3>My Experience</h3>
                                    <ul className="sesume-ser">
                                        <li>
                                            <h4>Sr. Mern Stuck Developer</h4>
                                        </li>
                                        <li className="resume-year">Apple Inc </li>
                                        <li className='bg-red-500 text-white font-bold px-5 py-2 w-fit mb-3'> 2022 - Current</li>

                                        <li>
                                            As a beginner MERN stack developer, I faced numerous instances where I found myself stuck. However, each roadblock became an opportunity for growth and learning.
                                        </li>
                                        <hr />
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default ShortDiscription;