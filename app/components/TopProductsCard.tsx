import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import Image from 'next/image'
// import { useDatContext } from '../context/dataContext'

ChartJS.register(ArcElement, Tooltip, Legend)

const TopProductsCard = ({ topProducts }) => {
  const downArrow = '/assets/icons/downArrow.svg'
  // const { topProducts } = useDataContext()

  const data = {
    labels: topProducts.map((product) => product.name),
    datasets: [
      {
        data: topProducts.map((product) => product.sold),
        backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
        rotation: 4 * Math.PI,
      },
    ],
  }

  const legendLabels = data.labels.map((label, index) => ({
    text: `${label} - ${data.datasets[0].data[index]}%`,
    fillStyle: data.datasets[0].backgroundColor[index],
    strokeStyle: data.datasets[0].backgroundColor[index],
  }))

  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        reverse: false,
        labels: {
          usePointStyle: true,
          font: {
            weight: 'bold',
            size: 12,
            family: 'Montserrat',
          },
          padding: 20,
          color: 'black',
          generateLabels: function (chart) {
            return legendLabels
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <div className='w-[400px] md:w-[480px] lg:w-1/2 rounded-[20px] h-[256px] px-10 py-[30px] bg-white'>
      <div className='flex justify-between pb-7'>
        <h3 className='font-montserrat font-bold text-base md:text-lg text-black'>
          Top Products
        </h3>
        <button className='flex items-center gap-[6px] font-montserrat text-[10px] md:text-xs text-[#858585] leading-[15px]'>
          May-June 2021{' '}
          <span>
            <Image src={downArrow} alt='' height={5} width={8} />
          </span>
        </button>
      </div>
      <div className='text-left'>
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default TopProductsCard
