import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://picsum.photos/id/19/600/400" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://picsum.photos/id/61/600/400" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://picsum.photos/id/78/600/400" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://picsum.photos/id/79/600/400" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://picsum.photos/id/20/600/400" alt="" />
        </div>
     <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestiae!</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto?</p>
     </div>
     <div>
        <button className='border-black mr-4 hover:shasow-xl'>Loren More</button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
     </div>

    </div>
  )
}

export default Plan