import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import Image from 'next/image'
// import downArrow from 'assets/icons/downArrow.svg'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ActivitiesCard = ({
  className,
  guestVisits,
  userVisits,
}: {
  className?: string
  guestVisits: string[]
  userVisits: string[]
}) => {
  const downArrow = 'assets/icons/downArrow.svg'
  const data = {
    labels: ['0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Users',
        data: userVisits,
        fill: false,
        borderColor: '#9BDD7C',
        tension: 0.4,
      },
      {
        label: 'Guests',
        data: guestVisits,
        fill: false,
        borderColor: '#E9A0A0',
        tension: 0.4,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 100,
          font: { size: 14, family: 'Lato' },
          color: '#858585',
        },
        grid: {
          lineWidth: 1,
          color: '#EAEAEA',
        },
        beginAtZero: true,
      },
      x: {
        ticks: {
          stepSize: 100,
          font: { size: 14, family: 'Lato' },
          color: '#858585',
        },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div
      className={`w-[400px] md:h-[360px] md:w-full rounded-[20px] pt-[30px] px-10 bg-white ${className}`}
    >
      <div className='flex justify-between'>
        <div className='flex flex-col gap-[5px] justify-between pb-7'>
          <h3 className='font-montserrat font-bold text-base md:text-lg text-black'>
            Activities
          </h3>
          <button className='flex items-center gap-[6px] font-montserrat text-[10px] md:text-xs text-[#858585] leading-[15px]'>
            May-June 2021{' '}
            <span>
              <Image src={downArrow} alt='' width={8} height={5} />
            </span>
          </button>
        </div>
        <div className='flex gap-[35px] pr-[60px]'>
          <div className='flex gap-[10px] items-center'>
            <div className='badge badge-xs bg-[#E9A0A0]'></div>
            <span className='font-lato text-base md:text-sm text-black'>
              Guest
            </span>
          </div>
          <div className='flex gap-[10px] items-center'>
            <div className='badge badge-xs bg-green-400'></div>
            <span className='font-lato text-base md:text-sm text-black'>
              Users
            </span>
          </div>
        </div>
      </div>

      <div className='h-[212px] w-full overflow-x-auto flex justify-center items-center'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default ActivitiesCard
