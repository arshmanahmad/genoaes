import React from 'react';
import {Union,Genoaes,Tesla,Microsoft,Meta,Sequia,Apple,Google,GeorgeUni,GenovaUni,RightHeadedArrow} from '../../assets/images/index';
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
                            <li><a href="" className='text-[#eeede7] text-sm'>Chi Siamo</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>II Master</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>II Nostro Network</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Perche sceglierci</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>Carriera</a></li>
                            <li><a href="" className='text-[#eeede7] text-sm'>IT</a></li>
                        </ul>
                        <Button text="Candidati" variant="primary" />
                    </div>
                </nav>
                <hr className='w-full mt-3 border-t border-gray-300' />
                <div className='w-full mt-[22rem] flex items-center justify-center flex-col'>
                    <h3 className='text-white text-[1.5rem] sm:text-[2rem] md:text-[3rem]  font-normal mt-20'>TRASFORMA LE TUE IDEE IN OPPORTUNITÀ</h3>
                    <p className=' text-[#cecfcc] text-[0.8rem] sm:text-[1rem]'>Impara sul campo come costruire una startup con il master più internazionale d’Italia,</p>
                    <p className='text-[#cecfcc]  text-[0.8rem] sm:text-[1rem]'>affiancato dai leader del settore negli Stati Uniti e in Europa.</p>
                   <div className='flex gap-4 mt-5 mb-[4rem]'>
                     <Button text="Scopri di più" variant="primary" />
                     <Button text="Scopri di più" variant="secondary" />
                   </div>
                </div>
            </header>
            <div className='w-full flex items-center justify-center bg-secondary '>
                <div className='w-[90%] flex flex-col bg-secondary justify-between py-10 mt-[-5rem] relative z-10'>
                    <div className='flex w-full justify-between flex-wrap'>
                        <div className='w-full md:w-1/3 text-center mb-4 md:mb-0'>
                            <h1 className='text-7xl font-light text-black'>$320k</h1>
                            <p className='text-black text-xs'>raccolta di capitali media dei nostri studenti</p>
                        </div>
                        <div className='w-full md:w-1/3 text-center mb-4 md:mb-0'>
                            <h1 className='text-7xl font-light text-black'>75%</h1>
                            <p className='text-black text-xs'>dei nostri studenti ha raccolto finanziamenti per la loro startup</p>
                        </div>
                        <div className='w-full md:w-1/3 text-center'>
                            <h1 className='text-7xl font-light text-black'>9.8/10</h1>
                            <p className='text-black text-xs'>soddisfazione dei nostri studenti</p>
                        </div>
                    </div>
                    <DescriptionText className='m-4 font-semibold text-[1.5rem] mt-[2rem]'>CCon la guida dei migliori mentori del settore</DescriptionText>
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
                        <DescriptionText>Cosa è Genoa Entrepreneurship School?</DescriptionText>
                        <hr className='w-full mt-3 border-t border-[#dee8de]' />
                    </div>
                    <div className='w-full  mt-11 flex-wrap md:flex justify-between '>
                            <p className='w-full text-3xl md:text-5xl md:w-1/2 pr-[9rem]'>
                              CONNETTIAMO ACCADEMIA E START UP
                            </p>

                            <p className='w-full mt-7 md:mt-0 md:w-1/2 text-[#3c3b3a]'>
                                Siamo un'iniziativa congiunta
                                tra l'Università di Genova, le 
                                aziende e le istituzioni. Siamo
                                convinti che il miglior momento 
                                di lanciare una startup sia quando si è 
                                all'università, come hanno fatto Mark Zuckerberg,
                                Bill Gates e Elon Musk e tanti altri. Il nostro
                                obiettivo è quello di formare i nuovi imprenditori attraverso esperienze di apprendimento dinamiche con esperti del settore, aziende e l'Università di Georgetown.
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
                </div>
            </div>


        </div>
    );
};

export default Home;