import React from 'react'
import Dashboard from './dashboard/page'
import SignInPage from './signin/page'

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/api/handler')
  const data = await response.json()
  return data
}

const page = async () => {
  const data = await fetchData()

  return (
    <div className='max-w-[1440px] max-h-[1024px]'>
      <SignInPage />
      <Dashboard data={data} />
    </div>
  )
}

export default page
