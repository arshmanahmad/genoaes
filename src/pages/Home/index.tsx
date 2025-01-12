import React from 'react';
import {Union,Genoaes,Tesla,Microsoft,Meta,Sequia,Apple,Google,GeorgeUni,GenovaUni,RightHeadedArrow,ProfessorVideo,Random,RightHeadedCurveWhite,RightHeadedWhite} from '../../assets/images/index';
import Button from '../../components/common/Button/Button';
import DescriptionText from '../../components/common/DescriptionText/DescriptionText';

const Home: React.FC = () => {
    return (
<div className='w-full' >
            <header className='relative w-full h-screen flex bg-cover flex-col   px-6 py-4' style={{ backgroundImage: `url(${Genoaes})` }}>
                <nav className='w-full  flex items-center justify-between'>
                    <img src={Union} alt="" />
                    <div className='flex gap-4 items-center justify-between'>
                        <ul className='flex gap-5'>
                            <li><a href="" className='text-[#eeede7] text-sm'>Home</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Our Program</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Our Network</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Why Choose Us?</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Career</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>EN</a></li>
                        </ul>
                        <Button text="Apply" icon={RightHeadedWhite} variant="primary" />
                    </div>
                </nav>
                <hr className='w-full mt-3 border-t border-gray-300' />
                <div className='w-full mt-[22rem] flex items-center justify-center flex-col'>
                    <h3 className='text-white text-[1.5rem] sm:text-[2rem] md:text-[3rem]  font-normal mt-20'>LAUNCH YOUR STARTUP </h3>
                    <h3 className='text-white text-[1.5rem] sm:text-[2rem] md:text-[3rem]  font-normal '>WHILE EARNING A MASTER'S DEGREE </h3>
                    <p className=' text-[#cecfcc] text-[0.8rem] sm:text-[1rem]'>Go from zero to fundraising with personalized guidance and a strong network while obtaining a Master's degree.</p>
                   <div className='flex gap-4 mt-5 mb-[4rem]'>
                     <Button text="DISCOVER OUR DIFFERENCE" variant="secondary" />
                     <Button text="LEARN MORE ABOUT OUR PROGRAM" icon={RightHeadedWhite} variant="primary" />
                   </div>
                </div>
            </header>
            <div className='w-full flex items-center justify-center bg-secondary '>
                <div className='w-[90%] flex flex-col bg-secondary justify-between py-10 mt-[-5rem] relative z-10'>
                    <div className='flex w-full justify-between flex-wrap'>
                        <div className='w-full md:w-1/3 text-center mb-4 md:mb-0'>
                            <h1 className='text-7xl font-light text-black'>$320k</h1>
                            <p className='text-black text-xs'>average raised by our students</p>
                        </div>
                        <div className='w-full md:w-1/3 text-center mb-4 md:mb-0'>
                            <h1 className='text-7xl font-light text-black'>75%</h1>
                            <p className='text-black text-xs'>of our students closed a funding round</p>
                        </div>
                        <div className='w-full md:w-1/3 text-center'>
                            <h1 className='text-7xl font-light text-black'>9.8/10</h1>
                            <p className='text-black text-xs'>is our students' likelihood of recommending us</p>
                        </div>
                    </div>
                    <DescriptionText className='m-4 font-semibold text-[1.5rem] mt-[2rem]'>Joined by experts with experience in:</DescriptionText>
                    <div className='w-full md:w-auto justify-center flex md:justify-end'>
                        <div className='flex flex-wrap gap-4 items-center justify-center md:justify-end'>
                            <img src={Sequia} alt='Icon 1' className='w-24 h-28' />
                            <img src={Apple} alt='Icon 2' className='w-24 h-10' />
                            <img src={Microsoft} alt='Icon 3' className='w-24 h-8' />
                            <img src={Meta} alt='Icon 4' className='w-24 h-32' />
                            <img src={Google} alt='Icon 5' className='w-24 h-32' />
                            <img src={Tesla} alt='Icon 6' className='w-24 h-36' />
                        </div>
                    </div>
                    <div>
                        <DescriptionText>What is Genoa Entrepreneurship School?</DescriptionText>
                        <div className='flex flex-col mt-3'>
                             <hr className='w-[18%]  border-t border-[#8b9c8f]' />
                             <hr className='w-full  border-t border-[#dee8de]' />
                        </div>
                    </div>
                    <div className='w-full  mt-11 flex-wrap md:flex justify-between '>
                            <p className='w-full text-3xl md:text-5xl md:w-1/2 pr-[9rem]'>
                            BRIDGING THE
                            ACADEMIA AND
                            STARTUP WORLDS
                            </p>

                            <p className='w-full mt-7 md:mt-0 md:w-1/2 text-[#3c3b3a]'>
                                We are a joint initiative between the University of Genoa, companies, and institutions.
                                We strongly believe that the best time to launch a startup is during university, as Mark Zuckerberg, Bill Gates, Elon Musk, and others have done.
                                Our goal is to empower entrepreneurs through dynamic learning experiences with industry experts, companies, and the University of Georgetown.
                            </p>

                     </div>
                     <p className='text-[#6b6b68] text-sm mt-[3.5rem]'>Academic partners</p>
                    <div className='w-[60%] flex flex-wrap md:flex-nowrap items-center'>
                        <div className='w-full md:w-1/4 mb-4 md:mb-0'>
                            <img src={GeorgeUni} alt='Icon 1' className='w-24 h-28' /> 
                        </div>
                        <div className='w-full md:w-1/4 mb-4 md:mb-0 flex flex-col'>
                            <p className='text-red-500 text-xs'>Bloomberg MBA Ranking</p>
                            <p className='text-black text-xs'>#1 World's most innovative & creative graduates</p>
                        </div>
                        <div className='w-full md:w-1/4 mb-4 md:mb-0 lg:pl-6'>
                            <img src={GenovaUni} alt='Icon 1' className='w-24 h-28' /> 
                        </div>
                        <div className='w-full md:w-1/4 mb-4 md:mb-0 flex flex-col'>
                            <p className='text-red-500 text-xs'>Censis ranking of Italian universities</p>
                            <p className='text-black text-xs'>#1 Engineering in Italy</p>
                        </div>
                    </div>
                    <div className='flex justify-end mt-5'>
                        <Button text="READ MORE ABOUT US" outlined icon={RightHeadedArrow} />
                    </div>
                    <div className='flex flex-col md:flex-row mt-[4rem] bg-[#faf5e2]'>
                        <div className='w-full md:w-[35%] p-[2rem] order-2 md:order-1'>
                            <p className='font-light text-[2rem] mb-[5rem]'>Meet your professor</p>
                          <div className='flex'>
                            <div className='border-l-[1px] border-primary h-auto mr-2'></div>
                            <div>
                            <p className='font-light'>
                                At Georgetown, we believe in 
                                entrepreneurship for the common 
                                good. 
                                <span className='font-semibold'>
                                    Our partnership with Genoa
                                    Entrepreneurship School aligns our
                                    values perfectly, supporting emergin 
                                    entrepreneurs worldwide.
                                </span>
                            </p>
                            <div className='flex items-center gap-4 mt-4 '>
                                <img className='h-5' src={GeorgeUni}  alt="" />
                                <div>
                                    <p className='font-normal text-[1.2rem]'>Shye Gilad</p>
                                    <p className='text-[1srem] text-gray-500'>Professor at Georgetown University</p>
                                </div>
                            </div>
                            </div>

                          </div>
                        </div>
                        <div className='w-full md:w-[65%] bg-[#000] order-1 md:order-2'>
                        <video controls controlsList="nodownload</div>" className='w-full h-full'>
                            {/* <iframe
                                width="100%"
                                height="100%"
                                src="https://youtu.be/kCgGesbxq30?si=73PauUpoIAdCqkjH"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}
                            <source src={ProfessorVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
                    <div className='mb-[3rem] mt-[1rem]'>
                        <DescriptionText>What do we offer?</DescriptionText>
                        <div className='flex flex-col mt-3'>
                             <hr className='w-[18%]  border-t border-[#8b9c8f]' />
                             <hr className='w-full  border-t border-[#dee8de]' />
                        </div>
                    </div>
                    <div className='lg:flex flex-wrap '>
                        <div className='lg:w-1/2 w-full h-full'>
                            <img src={Random} alt="" className='w-full bg-cover' />
                        </div>
                        <div className='min-h-[65.2vh] bg-[#193e2c] lg:w-1/2 w-full h-full p-3 '>
                        <div className='w-full  flex flex-col justify-between  p-[2rem] order-2 md:order-1'>
                                <div>
                                    <p className='font-light text-[2rem] text-primary mb-[1rem] leading leading-tight'>Master in <br/>International <br/> Business Creation</p>
                                    <div className='md:flex flex-wrap gap-4'>
                                        <div className='flex'>
                                            <p className='text-[#6e8476] '>Duration: <span className='text-[#e0e3da]'> 8 months</span> </p>
                                        </div>
                                        <div className='flex'>
                                            <p className='text-[#6e8476]'>Idea stage: <span className='text-[#e0e3da]'> from no idea to pre seed</span> </p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <p className='text-[#6e8476]'>Locations: <span className='text-[#e0e3da]'> Washington D.C., New York, San Francisco, Genoa</span> </p>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-[15rem]'>
                                    <div className='flex '>
                                        <div className='border-l-[1px] border-primary h-auto mr-2'></div>
                                        <div>
                                        <p className='text-[#fff]'>
                                          "In a word, this course is life-changing. 
                                          Experiencing Silicon Valley in such depth 
                                          is something I couldn't even imagine."
                                        </p>
                                        <p className='text-[1rem] text-[#99a89c]'>Juan Lopez Van Dam, Student founder 2023</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end mt-7'>
                                        <Button text="EXPLORE THE PROGRAM" variant='primary' icon={RightHeadedCurveWhite} />
                                    </div>
                                </div>
                        </div>
                        </div>

                    </div>
                    <div className='mb-[3rem] mt-[1rem]'>
                        <DescriptionText>Why Genoa Entrepreneurship School?</DescriptionText>
                        <div className='flex flex-col mt-3'>
                             <hr className='w-[18%]  border-t border-[#8b9c8f]' />
                             <hr className='w-full  border-t border-[#dee8de]' />
                        </div>
                    </div>
                    <div className='w-full mb-[3rem] flex flex-col items-center justify-between'>
                        <div className='w-full flex items-center justify-center text-center'>
                            <p className='text-[2.3rem] font-light'>
                                <span className='text-primary'>Learn and grow</span> with personalized expert 
                                guidance<br/> in the world's most stimulating 
                                cities while<br/> studying
                            </p>
                        </div>
                        <div className='w-full md:flex md:flex-nowrap flex-wrap '>
                            <div className='flex mt-[1rem]'>
                                <div className='flex flex-col items-center mr-4'>
                                    <div className='h-full w-[1px] bg-primary' style={{ height: '50%', fontWeight: 'bold' }}></div>
                                    <div className='h-full w-[1px] bg-gray-300' style={{ height: '50%' }}></div>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-primary text-[1.5rem]'>01</p>
                                    <p className='text-[1.4rem] font-normal mt-[0.7rem]'>
                                       Personalized guidance from the best
                                       startup experts for life, even if
                                        you don't launch.
                                    </p>
                                    <li className='mt-[1rem]'><a href="" className='text-[#646462] '>1:1 meetings at any time with field-specific experts and founders.</a></li>
                                    <li><a href="" className='text-[#646462]'>A personal mentor will follow you throughout the year, every week.</a></li>
                                    <li><a href="" className='text-[#646462]'>Daily workshops provide industry tips and adapt to your full-time startup commitments.</a></li>
                                </div>
                            </div>
                            <div className='flex  mt-[1rem]'>
                                <div className='flex flex-col items-center mr-4'>
                                    <div className='h-full w-[1px] bg-primary' style={{ height: '50%', fontWeight: 'bold' }}></div>
                                    <div className='h-full w-[1px] bg-gray-300' style={{ height: '50%' }}></div>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-primary text-[1.5rem]'>02</p>
                                    <p className='text-[1.4rem] font-normal mt-[0.7rem]'>
                                       Personalized guidance from the best
                                       startup experts for life, even if
                                        you don't launch.
                                    </p>
                                    <li className='mt-[1rem]'><a href="" className='text-[#646462] '>1:1 meetings at any time with field-specific experts and founders.</a></li>
                                    <li><a href="" className='text-[#646462]'>A personal mentor will follow you throughout the year, every week.</a></li>
                                    <li><a href="" className='text-[#646462]'>Daily workshops provide industry tips and adapt to your full-time startup commitments.</a></li>
                                </div>
                            </div>
                            <div className='flex  mt-[1rem] '>
                                <div className='flex flex-col items-center mr-4'>
                                    <div className='h-full w-[1px] bg-primary' style={{ height: '50%', fontWeight: 'bold' }}></div>
                                    <div className='h-full w-[1px] bg-gray-300' style={{ height: '50%' }}></div>
                                </div>
                                <div className='flex flex-col '>
                                    <p className='text-primary text-[1.5rem]'>03</p>
                                    <p className='text-[1.4rem] font-normal mt-[0.7rem]'>
                                       Personalized guidance from the best
                                       startup experts for life, even if
                                        you don't launch.
                                    </p>
                                    <li className='mt-[1rem]'><a href="" className='text-[#646462] '>1:1 meetings at any time with field-specific experts and founders.</a></li>
                                    <li><a href="" className='text-[#646462]'>A personal mentor will follow you throughout the year, every week.</a></li>
                                    <li><a href="" className='text-[#646462]'>Daily workshops provide industry tips and adapt to your full-time startup commitments.</a></li>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                    <div className='mb-[3rem] mt-[1rem]'>
                        <DescriptionText>What is in our network</DescriptionText>
                        <div className='flex flex-col mt-3'>
                             <hr className='w-[18%]  border-t border-[#8b9c8f]' />
                             <hr className='w-full  border-t border-[#dee8de]' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;