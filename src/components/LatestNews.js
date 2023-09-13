import React from 'react';

const LatestNews = () => {
    return (
        <section className="bg-[#ECE8E1] z-10 py-16 relative pb-[120px] overflow-hidden">
            <p className='text-[260px] absolute valo-text z-[10] -bottom-[100px] '><pre>WE ARE</pre> <pre className=''>    VALORANT</pre> </p>
            <div className="container mx-auto relative flex justify-center items-center z-[20]">
                <span className=" bottom-[270px] z-10 left-4 text-[90px] text-[#ED4252] tracking-tighter  absolute text uppercase">latest news</span>
                <span className='absolute -top-6  right-10'>
                    <a href="/" className='group'>
                    <div className='flex gap-3 '>
                    <p className='text-[#ED4252] text-sm font-semibold font-tungsten uppercase'>go to news page </p>
                    <svg className='w-[30px] transition-transform group-hover:translate-x-3 duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15"><path d="M16.2.5 19.9 4m4.6 3.5-8.3 7" fill="none" stroke="#ff4655"></path><path fill="none" stroke="#ff4655" stroke-miterlimit="10" d="M16 7.5H0"></path></svg>
                    </div>
                    </a>
                </span>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[97%] items-center ">
                    {/* News Card 1 */}
                    <div className="bg-transparent overflow-hidden group relative">
                        <img src={"/news1.webp"} alt="News 1" className="group overflow-hidden w-full h-[250px] object-cover" />
                        <div className="flex gap-12 mt-3 items-center mb-4 ">
                            <h3 className="text-xs text-zinc-500 font-semibold ">12/12/23</h3>
                            <p className="text-sm text-red-600 font-semibold uppercase">game updates</p>
                        </div>
                        <a href="#" className="text-zinc-600 text-[19px]  font-bold tracking-wider ">VALORANT PATCH NOTES</a>
                        <div className=" absolute -left-[500px]  top-0 w-[100%] h-[77%] bg-[#fd3a4a] opacity-0 -skew-x-12 transf group-hover:opacity-50 group-hover:left-[10px] transition-all duration-300 ease-in-out"></div>

                    </div>
                    {/* News Card 2 */}
                    <div className="bg-transparent overflow-hidden  ">
                        <img src={"/news2.webp"} alt="News 1" className="w-full h-[250px] object-cover" />
                        <div className="flex gap-12 mt-3 items-center mb-4 ">
                            <h3 className="text-xs text-zinc-500 font-semibold ">12/12/23</h3>
                            <p className="text-sm text-red-600 font-semibold ">COMMUNITY</p>
                        </div>
                        <a href="#" className="text-zinc-600 text-[19px]  font-bold tracking-wider ">VALORANT PATCH NOTES</a>
                    </div>
                    {/* News Card 3 */}
                    <div className="bg-transparent overflow-hidden ">
                        <img src={"/news3.webp"} alt="News 1" className="w-full h-[250px] object-cover" />
                        <div className="flex gap-12 mt-3 items-center mb-4 ">
                            <h3 className="text-xs text-zinc-500 font-semibold ">12/12/23</h3>
                            <p className="text-sm text-red-600 font-semibold ">DEV</p>
                        </div>
                        <a href="#" className="text-zinc-600 text-[19px]  font-bold tracking-wider ">VALORANT PATCH NOTES</a>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default LatestNews;
