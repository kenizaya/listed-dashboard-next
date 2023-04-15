import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`text-white md:w-[246px] md:h-[88px] font-montserrat font-bold ${className}`}
    >
      Board.
    </div>
  )
}

export default Logo
