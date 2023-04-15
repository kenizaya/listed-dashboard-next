import React from 'react'
import Image from 'next/image'

const Button = ({
  icon,
  text,
  className,
  onClick,
}: {
  icon?: string
  text: string
  className?: string
  onClick?: () => void
}) => {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`}>
      <div className='flex align-center justify-center gap-[10px]'>
        {icon && <Image src={icon} alt='icon' width={14} height={14} />}
        {text}
      </div>
    </button>
  )
}

export default Button
