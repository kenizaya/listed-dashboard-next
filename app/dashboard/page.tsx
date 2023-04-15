'use client'

import React from 'react'
import Sidebar from '../components/Sidebar'
import TotalCard from '../components/TotalCard'
import Header from '../components/Header'
import ScheduleCard from '../components/ScheduleCard'
import TopProductsCard from '../components/TopProductsCard'
import ActivitiesCard from '../components/ActivitiesCard'

const fetchData = async () => {
  const response = await fetch(
    'https://listed-dashboard-next.vercel.app/api/handler'
  )
  const data = await response.json()
  return data
}

const page = async () => {
  const {
    revenue: totalRevenue,
    transactions,
    likes,
    users,
    topProducts,
    guestVisits,
    userVisits,
    tasks,
  } = await fetchData()

  const revenue = '/assets/icons/revenue.svg'
  const transaction = '/assets/icons/transaction.svg'
  const like = '/assets/icons/like.svg'
  const user = '/assets/icons/user.svg'

  return (
    <div className='flex bg-[#f5f5f5] w-full pl-[20px] md:pl-[40px]'>
      <Sidebar />
      <div className='w-full bg-[#f5f5f5] py-[20px] pr-[20px] md:py-[60px] md:pr-[60px]'>
        <Header />
        <div className='flex justify-center sm:justify-between items-center w-full gap-5 flex-wrap'>
          <TotalCard
            icon={revenue}
            text='Total Revenues'
            className='bg-revenueColor'
            amount={totalRevenue}
          />
          <TotalCard
            icon={transaction}
            text='Total Transactions'
            className='bg-transactionColor'
            amount={transactions}
          />
          <TotalCard
            icon={like}
            text='Total Likes'
            className='bg-likeColor'
            amount={likes}
          />
          <TotalCard
            icon={user}
            text='Total Users'
            className='bg-userColor'
            amount={users}
          />
        </div>
        <ActivitiesCard
          className='my-10'
          guestVisits={guestVisits}
          userVisits={userVisits}
        />
        <div className='flex gap-10 flex-col lg:flex-row'>
          <TopProductsCard topProducts={topProducts} />
          <ScheduleCard tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default page
