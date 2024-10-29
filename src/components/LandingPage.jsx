import React from 'react'


const LandingPage = () => {
  return (
  <>
  <div className='w-full h-screen bg-zinc-900 pt-1'>
    <div className="textstructure mt-36 px-20">
      {["We Create" , "Eye-Opening" , "Presentation"].map((item,index)=>{
       return <div className="masker">
        <div className='w-fit flex items-center'>
          {index === 1 && (<div className='w-[7vw] h-[4vw] bg-red-500 mt-2 mr-3'></div>)}
            <div className="uppercase text-[5.5vw] leading-[5vw] tracking-tighter font-extrabold">{item}</div>
            </div>
        </div>

      }
      )}
        
    </div>
    <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 '>
      {["For public and private companies","From the first pitch to IPO"].map((item , index)=>(
        <p className='text-md font-light tracking-tight leading-none '>{item}</p>

      ))}

      <div className='start flex items-center gap-5'>
      <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md capitalize rounded-full'>Start the project
        
      </div>
      </div>

    </div>

  </div>
  
  </>
  )
}

export default LandingPage
