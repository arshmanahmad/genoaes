import React from 'react';
import Button from '../../components/common/Button/Button';
import Union from '../../assets/images/logos/Union.svg';
import Genoaes from '../../assets/images/background/Voss-Genoaes.png'

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
                <hr className='w-[100%] mt-3 border-t border-gray-300' />
                <div className='mt-[22rem] flex items-center justify-between flex-col'>
                    <h3 className='text-white text-4xl font-semibold mt-20'>TRASFORMA LE TUE IDEE IN OPPORTUNITÀ</h3>
                    <p className=' text-[#cecfcc] mt-5'>Impara sul campo come costruire una startup con il master più internazionale d’Italia,</p>
                    <p className='text-[#cecfcc]'>affiancato dai leader del settore negli Stati Uniti e in Europa.</p>
                   <div className='flex gap-4 mt-5'>
                     <Button text="Scopri di più" variant="primary" />
                     <Button text="Scopri di più" variant="secondary" />
                   </div>
                </div>
            </header>
            <div className='w-full flex items-center justify-center bg-secondary relative'>
                <div className='w-[90%] mb-[4rem] flex items-center bg-secondary justify-between mx-auto py-10 absolute'>
                    <div>
                        <h1>320k</h1>
                        <p>raccolta di capitali media dei nostri studenti</p>
                    </div>
                    <div>
                        <h1>75%</h1>
                        <p>dei nostri studenti ha raccolto finanziamenti per la loro startup</p>
                    </div>
                    <div>
                        <h1>9.8/10</h1>
                        <p>soddisfazione dei nostri studenti</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;