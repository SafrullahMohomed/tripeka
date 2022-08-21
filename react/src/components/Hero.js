import React, {useEffect} from 'react'
import beachVid from '../assets/herovideo.mp4'
import img from '../assets/coverpage1.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"


const Hero = () => {
    
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);

    return (
        <div name='home' className='w-full h-screen bg-cover bg-center flex flex-col justify-between'>
            {/*<video
                className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted
            />*/}
            
            <img class="w-full h-full object-cover" src={img} alt="content"/>

            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto absolute mt-20' data-aos="fade-up">
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <h1 className='py-2 text-5xl md:text-7xl font-bold'>Find Perfect Places</h1>
                    <h1 className='py-5 text-5xl md:text-7xl font-bold text-emerald-400'>anywhere you go</h1>
                    <p className='text-xl text-white'>We have been in trip organizing between business for last 3 years now. And you will enjoy your valuable trip with us</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4 bg-emerald-400'>Get Started</button>
                </div>
                
            </div>
        </div>
    )
}

export default Hero