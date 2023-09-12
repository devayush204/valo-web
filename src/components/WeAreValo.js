import React from 'react'

const WeAreValo = () => {
  return (
    <div className='flex flex-col h-[700px] bg-[#ECE8E1] ' >
        <div className='mt-16 ml-[190px] w-[80%] h-[1px] bg-zinc-400 '></div>
        <div className='flex ml-[190px]  '>
        <p className=' font-bold text-[110px] text-[#0F1923] '>WE ARE VALORANT</p>

        </div>
        <div className='mt-5'>
        </div>
        <div className='flex relative justify-between mt-14'>
            <div className='flex flex-col gap-5 ml-[200px] '>
                <span className='text-[20px] text-blzck '>
                DEFY THE LIMITS
                </span>
                <span className='text-md leading-6 text-zinc-500 font-tungsten w-[320px] '>
                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                </span>
            </div>
            <div className='h-[10px] w-[10px] bg-[#ED4252] absolute -top-[40px] right-[705px] ' ></div>
            <div className='h-[10px] w-[10px] bg-[#ED4252] absolute -top-[40px] right-[660px] ' ></div>
            <div className='py-1.5 text-center px-10 bg-[#ED4252] absolute top-5 right-[600px] text-white  text-sm  ' >GAMEPLAY</div>
        <video className=' bottom-20  w-[50%] h-[400px] ' src={"/video2.mp4"} autoPlay muted loop  ></video>
        </div>
        <div className='w-[10px] h-[10px] bg-[#ED4252] absolute bottom-4 z-[20] left-[50px] '></div>

    </div>
  )
}

export default WeAreValo