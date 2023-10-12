import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 text-center flex flex-col space-y-5 justify-center items-center">
      <img src="logo.png" alt="" className='h-44'/>
      <div className="text-3xl lg:text-5xl text-center font-semibold">Let's Get Started</div>
      <div className="text-sm lg:text-lg lg:w-4/6">
        Artimization along with its team is scoring its winning goal in the world of Digital Marketing.
        The professionals of Artimization are recognized as one of the most experienced and skilled creatives,
        around the world. Our professionals have high commands over online branding, SEO,
        Web designing and offering excellent customer services.
      </div>
      <span className="border-2 p-3 rounded gap-3 lg:gap-20 px-5 lg:px-20 flex  justify-between items-center">
        <div className="text-xs lg:text-md font-semibold">W H A T S A P P</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
        <div className="text-xs lg:text-md font-semibold flex ">
          C H A T O N          
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
        <div className="text-xs lg:text-md font-semibold">M E S S E N G E R</div>
      </span>
      <div className="grid grid-cols-2 border-b">
        <div className="flex flex-col justify-center items-center border-r">
          <div className="text-xs lg:text-sm">CALL US</div>
          <div className="grid grid-cols-2 p-5 gap-10">
            <div className="text-xs lg:text-md">+1234567890</div>
            <div className="text-xs lg:text-md">+1234567890</div>
          </div>
        </div>
        <div className="">
          <div className="text-xs lg:text-sm">CALL US</div>
          <div className="grid grid-cols-5 p-5 gap-10 px-20">
            <div className="text-xs lg:text-md">Facebook</div>
            <div className="text-xs lg:text-md">Twitter</div>
            <div className="text-xs lg:text-md">Instagram</div>
            <div className="text-xs lg:text-md">Pinterest</div>
            <div className="text-xs lg:text-md">Linkedin</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex justfy-start items-center gap-3 text-start">
          <img src="https://images.dmca.com/Badges/dmca_protected_1_120.png?ID=2eb945cf-5b7a-458d-8f57-28a9d478dd11" alt="" className="h-6" />
          <div className="text-xs lg:text-sm">© Copyright 2023 by Artimization. All Rights Reserved</div>
        </div>
        <div className="flex justify-end items-start">
          <div className="text-sm text-end">
            Email us: info@artimization.com  |  Terms Of UseRefund Policy
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer