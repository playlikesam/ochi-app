import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker'>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (
                                    <motion.div 
                                    initial={{ width: 0 }} 
                                    animate={{ width: "9vw" }} 
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }} 
                                    className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw]'>
                                        <img className='w-full h-full rounded-xl' src="https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                    </motion.div>
                                )}
                                <h1 className="uppercase h-full text-[7.5vw] leading-[7.5vw] tracking-tighter font-['Neue Montreal'] font-bold">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })
                }
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className=' text-md font-light tracking-tight leading-none'>{item}</p>
                )}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage