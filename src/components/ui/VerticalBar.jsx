import React from 'react'

const VerticalBar = ({ name, role, children }) => {
  return (
    <div className='w-max h-max p-2 flex flex-col gap-4'>
        <div className='w-max h-max flex gap-2 items-center justify-between'>
            <div className='w-max h-max'>{children}</div>
            <div className='w-max h-[5rem] flex flex-col justify-center items-start'>
              <p className='capitalize text-white text-lg font-semibold'>{name}</p>
              <span className='capitalize text-md text-white'>{role}</span>
            </div>
        </div>
    </div>
  )
}

export default VerticalBar