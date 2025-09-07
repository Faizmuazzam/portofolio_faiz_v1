import ElectricBorder from '@/components/ElectricBorder'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar fixed left-0 top-0 z-20">
      <div className="hide md:flex items-center w-[360px] h-screen">
        <div className="w-[60px]">
        </div>
        <div className="flex-1">  
          <ElectricBorder
            color="#fdbb2e"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className='w-full py-12 px-6 flex flex-col items-center eb-demo-card'>
              <Image
                src={'/assets/img/me.jpg'}
                alt='Faiz Muazzam'
                width={80}
                height={80}
                className='rounded-full cursor-target'
              />

              <p className="text-2xl mt-2 font-semibold text-[#d9d4c5]">
                Faiz Muazzam
              </p>
              <p className='text-sm text-[#a9a8a1]'>
                Front End Developer
              </p>

            </div>
          </ElectricBorder>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
