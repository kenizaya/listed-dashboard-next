import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

const Sidebar = () => {
  const dashboardSidebar = '/assets/icons/dashboardSidebar.svg'
  const transactionSidebar = '/assets/icons/transactionSidebar.svg'
  const scheduleSidebar = '/assets/icons/scheduleSidebar.svg'
  const userSidebar = '/assets/icons/userSidebar.svg'
  const settingSidebar = '/assets/icons/settingSidebar.svg'

  return (
    <aside className='w-[280px] bg-black hidden px-[50px] py-[60px] m-10 ml-0 rounded-[30px] min-h-[940px] md:flex flex-col justify-between'>
      <div>
        <Logo className='text-2xl lg:text-4xl' />
        <ul className='flex flex-col gap-10'>
          <SidebarItem
            icon={dashboardSidebar}
            text='Dashboard'
            className='font-bold'
          />
          <SidebarItem icon={transactionSidebar} text='Transactions' />
          <SidebarItem icon={scheduleSidebar} text='Schedules' />
          <SidebarItem icon={userSidebar} text='Users' />
          <SidebarItem icon={settingSidebar} text='Setting' />
        </ul>
      </div>

      <ul className='text-sm text-white font-montserrat'>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </aside>
  )
}

const SidebarItem = ({
  icon,
  text,
  className,
}: {
  icon: string
  text: string
  className?: string
}) => {
  return (
    <li className={`flex gap-5 cursor-pointer active:font-bold ${className}`}>
      <Image src={icon} alt='icon' width={18} height={18} />
      <span className='text-white font-montserrat sm:text-sm md:text-base lg:text-lg'>
        {text}
      </span>
    </li>
  )
}

export default Sidebar
