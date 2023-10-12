import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    < nav className="p-5 shadow-lg lg:px-20 flex justify-between items-center fixed left-0 right-0 top-0 bg-gray-900 text-white" >
      <Link href="/">
        <img src="https://www.artimization.com/wp-content/themes/Artimization/assets/images/logo.svg" alt="" className='h-10' />
      </Link>
      
      <ul className="lg:flex lg:gap-3 hidden lg:block">
        <Link href="/About" className="text-sm font-bold">ABOUT</Link>
        <Link href="/Services" className="text-sm font-bold">SERVICES</Link>
        <Link href="/Pricing" className="text-sm font-bold">PRICING</Link>
        <Link href="/Portfolio" className="text-sm font-bold">PORTFOLIO</Link>
        <Link href="/Contact" className="text-sm font-bold">CONTACT</Link>
      </ul>

      <ul className="lg:flex lg:gap-3 hidden lg:block">
        <button className="p-2 border-2 rounded flex justify-center items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          +12344567890</button>
        <Link href="/Quot">
          <button className="p-2 bg-red-500 px-5 rounded">QUOTE</button>
        </Link>
      </ul>

      <ul className=" lg:hidden block">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </ul>
    </nav >

  )
}

export default Navbar