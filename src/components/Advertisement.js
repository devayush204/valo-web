import React from 'react'

const Advertisement = () => {
    return (
        <div className='relative bg-pink-500'>
        <div className='overflow-hidden relative'>
            <p className='absolute text-[25px] font-semibold tracking-widest text-white top-[450px] left-[160px] z-[10] '>EPISODE_07 // ACT I / YR 3</p>
            <p className='absolute text-[100px] font-semibold  text-white top-[500px] left-[160px]  z-[10] '>EVOLUTION</p>
            <div className='play-btn-div absolute z-[20] top-[650px] left-[170px] flex group transition p-1 '>
                <button className='play-btn md:w-auto  bg-[#ED4252] text-white text-base font-semibold'>
                    <span className='span-btn px-[85px] font-semibold py-[18px]'>
                        ACT 1 OVERVIEW
                    </span>
                </button>
            </div>
            <div className='w-[10px] h-[10px] bg-[#ED4252] absolute bottom-4 z-[20] left-[120px] '></div>
            <div className='w-[20px] h-[20px] bg-[#ED4252] absolute bottom-4 z-[20] right-[120px] '></div>
            <div className='w-[120px] h-[3px] bg-[#ED4252] absolute bottom-10 z-[20] right-[680px] '></div>
            <img className=' h-[60vw] scale-x-150' src={"/ad1.jpeg"} alt="" />
        </div>
            <div className='w-[20px] h-[20px] bg-[#ED4252] absolute -bottom-24 z-[20] right-[220px] '></div>
        </div>
    )
}

export default Advertisement