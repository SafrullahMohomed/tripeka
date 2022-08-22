import React,{useEffect} from 'react'
import pop1 from '../assets/dalada.jpg';
import pop2 from '../assets/jaffna.jpg';
import pop3 from '../assets/arugam.jpg';
import pop4 from '../assets/nuwera.jpg';
import pop5 from '../assets/trinco.jpg';
import pop6 from '../assets/colombo.jpg';
import Navbar from './Navbar';
// import Aos from 'aos'
// import "aos/dist/aos.css"

const Popular = () => {
    // useEffect(() => {
    //     Aos.init({duration:2000});
    // },[]);
  return (
    <div name='Places'>
        <Navbar/>
        {/* data-aos="slide-right" data-aos-delay="100" */}
        <section className="text-gray-600 body-font" >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Most Popular Places in Island</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={pop1}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Heritage City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Kandy</h1>
                                <p className="leading-relaxed">Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pop2}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Cultural City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Jaffna</h1>
                                <p className="leading-relaxed">Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pop3}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Fun City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Jaffna</h1>
                                <p className="leading-relaxed">Arugam Bay, known locally as "Arugam Kudah", is situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pop4}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Cold City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Nuwera Eliya</h1>
                                <p className="leading-relaxed">Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pop5}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Fish City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Trincolmalee</h1>
                                <p className="leading-relaxed">Trincomalee is a port city on the northeast coast of Sri Lanka. Set on a peninsula, Fort Frederick was built by the Portuguese in the 17th century</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                        <div className="flex relative">
                            <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pop6}/>
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-500 mb-1">Commercial City</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Colombo</h1>
                                <p className="leading-relaxed">Colombo is the commercial capital and largest city of Sri Lanka by population. Colombo is the gateway to Sri Lanka for most travelers</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Popular