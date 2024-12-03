import React from 'react'

const Cards = ({ path, tittle, year, description, medium }) => {
  return (
    <div className='w-[100%] flex items-center flex-col md:flex-row justify-center gap-4 rounded-3xl bg-secondary-color backdrop-blur-2xl p-3 md:p-6 mt-3 md:mt-6'>

      <div className='w-[100%] md:w-[30%] rounded-xl md:rounded-3xl object-cover p-2'>
        <img src={path} alt={tittle} className='rounded-xl' />
      </div>


      <div className='w-[100%] md:w-[50%] flex flex-col-reverse lg:flex-col justify-start h-[100%] p-2 '>
        <div className='w-[100%] text-sm md:text-lg text-white font-light flex items-center justify-start my-2 gap-2 md:gap-4'>
          <p className='rounded-2xl  md:rounded-3xl bg-[#383838] px-3 py-1 text-center font-normal text-sm'>{medium}</p>
          <p className='bg-primary-color px-3 py-1 text-center font-normal text-sm rounded-2xl md:rounded-3xl'>{year}</p>
        </div>

        <div className='w-[100%]'>
          <h2 className='font-bold text-3xl my-3  uppercase'>{tittle}</h2>
          <p className='text-sm md:text-xl lg:text-2xl my-2 text-[#BDBDBD] font-normal '>{description}</p>

        </div>
      </div>
    </div>
  )
}

export default Cards