import React from 'react'

const About = () => {
    return (
        <>
            <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
                <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className=' flex gap-10 w-full border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-6xl'>Our Approach:</h1>
                    <button className=' flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-2 h-2  rounded-full bg-zinc-100'>
                        </div>

                    </button>

                </div>
                <div className='w-1/2 h-[35vw] bg-[#919f60] rounded-3xl'>
                <img  className = "w-full h-full object-cover rounded-3xl"src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>

                </div>
             </div>
            </div>
        </>
    )
}

export default About
