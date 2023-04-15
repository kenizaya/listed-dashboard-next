import React from 'react'
import Image from 'next/image'

interface TotalCardProps {
  icon: string
  text: string
  amount: string
  className: string
}

const TotalCard = ({ icon, text, amount, className }: TotalCardProps) => {
  return (
    <div
      className={`py-2 lg:py-5 px-[15px] lg:px-[25px] w-[140px] h-[80px] sm:w-[160px] sm:h-[80px] lg:w-[221.05px] lg:h-[120px] rounded-[20px] text-black ${className}`}
    >
      <div className='flex justify-end'>
        <Image
          src={icon}
          alt='icon'
          width={16}
          height={16}
          className='w-[16px] h-[16px] lg:h-[24px] lg:max-w-[25px] lg:w-full'
        />
      </div>
      <div className='flex flex-col'>
        <span className='text-xs lg:text-sm font-lato leading-[16.8px]'>
          {text}
        </span>
        <span className='text-lg md:text-xl lg:text-2xl font-openSans font-bold leading-[32.68px]'>
          {amount}
        </span>
      </div>
    </div>
  )
}

export default TotalCard
