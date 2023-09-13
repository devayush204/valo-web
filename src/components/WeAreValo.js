import React from 'react'

const WeAreValo = () => {
    return (
        <div className='flex flex-col h-[870px] bg-[#ECE8E1] ' >
            <div className='relative'>
            <span className='absolute w-[0.5px] h-[870px]  left-[97px] bg-zinc-400 z-[10]'></span>

            <div className='mt-16 ml-[190px] w-[80%] h-[1px] bg-zinc-400 '></div>
            <div className='flex ml-[190px]  '>
                <p className=' font-bold text-[110px] text-[#0F1923] text'>WE ARE VALORANT</p>

            </div>
            <div className='mt-5'>
            </div>
            <div className='flex relative justify-between mt-14'>
                <div className='flex flex-col gap-5 ml-[280px] '>
                    <span className='text-[20px] uppercase text-black text'>
                        defy the limits
                    </span>
                    <span className='text-md leading-6 text-zinc-500 font-tungsten w-[320px] '>
                        Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                    </span>
                    <div className='relative'>
                        <div className='play-btn3-div absolute z-[20]   flex group transition p-1 '>
                            <button className='play-btn3 md:w-auto  bg-[#ED4252] text-white text-base font-semibold'>
                                <span className='span-btn3 px-[85px] uppercase font-semibold py-[18px]'>
                                learn the game
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-[10px] w-[10px] bg-[#ED4252] absolute -top-[10px] right-[705px] ' ></div>
                <div className='h-[10px] w-[10px] bg-[#ED4252] absolute -top-[10px] right-[660px] ' ></div>
                <div className='py-1 text-center px-10 bg-[#ED4252] absolute top-20 right-[610px] text-white  text-sm  ' >GAMEPLAY</div>
                <video className=' mt-[40px]  w-[50%] h-[400px] ' src={"/video2.mp4"} autoPlay muted loop  ></video>
            </div>
            <div className='w-[10px] h-[10px] bg-[#ED4252] absolute top-5 z-[20] left-[97px] '></div>
            <div className='w-[10px] h-[10px] bg-[#ED4252] absolute bottom-10 z-[100] left-[97px] '></div>
            <div className='w-[10px] h-[10px] bg-[#ED4252] absolute -bottom-15 z-[100] left-[190px] '></div>
            </div>
        </div>
    )
}

export default WeAreValo