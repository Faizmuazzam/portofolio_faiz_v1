import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';


const Header = () => {
  return (
    <header className="relative z-10 max-w-[1320px] mx-auto py-6">
      <div className="grid grid-cols-2 items-center">
        <div className="logo max-w-[110px]">
          <Image
            src={"/assets/img/logo_main.png"}
            height={114}
            width={199}
            alt="Logo"
            className='cursor-target'
          />
        </div>
        <div className="flex justify-end items-center gap-x-5">
          <div className="cursor-target">
            <p className='text-2xl font-semibold'><Icon icon="twemoji:flag-indonesia" width="36" height="36" className='inline-block mr-1.5' /> Indonesia</p>
          </div>
          <div className="">
            <p className='text-2xl'>|</p>
          </div>
          <Link
            href={"#"}
            className="flex justify-center items-center gap-x-2 px-5 py-4 bg-amber-500 text-neutral-900 font-semibold text-xl rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-white hover:border-white transition-all cursor-target"
          >
            HIRE ME
            <Icon icon="pepicons-print:paper-plane" width="24" height="24" />
          </Link>
          <button type='button' className='cursor-pointer cursor-target'>
            <Icon icon="heroicons-outline:menu-alt-2" width="40" height="40" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header