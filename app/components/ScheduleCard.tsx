import React from 'react'
import Image from 'next/image'
// import { useDataContext } from '../context/dataContext'

type Task = {
  description: string
  time: string
  location: string
}

const ScheduleCard = ({ tasks }: { tasks: Task[] }) => {
  const rightArrow = '/assets/icons/rightArrow.svg'

  return (
    <div className='w-[300px] md:w-[480px] lg:w-1/2 rounded-[20px] h-[256px] px-10 py-[30px] bg-white'>
      <div className='flex justify-between pb-7'>
        <h3 className='font-montserrat font-bold text-base md:text-lg text-black'>
          Today's schedule
        </h3>
        <button className='flex items-center gap-[6px] font-montserrat text-[10px] md:text-xs text-[#858585] leading-[15px]'>
          See all{' '}
          <span>
            <Image src={rightArrow} alt='' width={5} height={8} />
          </span>
        </button>
      </div>

      <ScheduleItem
        description={tasks[0].description}
        time={tasks[0].time}
        location={tasks[0].location}
        key={tasks[0].description}
        className='border-borderGreen'
      />
      <ScheduleItem
        description={tasks[1].description}
        time={tasks[1].time}
        location={tasks[1].location}
        key={tasks[1].description}
        className='border-borderBlue'
      />
    </div>
  )
}

const ScheduleItem = ({
  description,
  time,
  location,
  className,
}: {
  description: string
  time: string
  location: string
  className: string
}) => {
  return (
    <div className={`border-l-[5px] mb-[13px] ${className}`}>
      <div className='flex flex-col gap-[5px] pl-[10px]'>
        <h4 className='font-lato font-bold text-[#666666] text-xs md:text-sm'>
          {description}
        </h4>
        <span className='text-[#999999] font-lato text-xs'>{time}</span>
        <span className='text-[#999999] font-lato text-xs'>{`at ${location}`}</span>
      </div>
    </div>
  )
}

export default ScheduleCard
