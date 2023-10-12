import React from 'react'

const page = () => {
  return (
    <div>

      <div className="px-20 py-10 grid grid-cols-2 gap-10">
        <div className="space-y-5 flex flex-col justify-center">
          <div className="text-xl font-semibold">Services</div>
          <div className="text-8xl font-semibold">Let’s Start
            a Project</div>
          <div className="text-lg pr-32">Contact our support to get quick assistance!</div>
          <div className="text-2xl pr-32">+1 617 275 4776</div>
          <div className="text-2xl pr-32">info@artimization.com</div>
        </div>
        <div className="flex flex-col gap-5 p-10 rounded-lg">
          <div className="grid grid-cols-2 gap-5">
            <input type="text" placeholder='Your Name*' className="p-3 rounded bg-gray-200" />
            <input type="text" placeholder='Phone*' className="p-3 rounded bg-gray-200" />
          </div>
          <div className="flex gap-5 flex-col">
            <input type="text" placeholder='Email*' className="p-3 rounded bg-gray-200" />
            <input type="text" placeholder='Website URL*' className="p-3 rounded bg-gray-200" />
            <textarea name="" id="" cols="30" rows="3" placeholder='Write your messsage here...*' className="p-3 rounded bg-gray-200" />
            <button className="rounded p-3 px-6 bg-red-500  w-full">SEND</button>
          </div>

        </div>
      </div>

      
      <div className="p-20 flex flex-col justify-center items-center">
        <div className="text-5xl font-semibold">
          Connect Us On Social Media          
        </div>


        <div className="grid grid-cols-4 py-10">
        
          <div className="flex flex-col justify-center items-center space-y-5 p-10 border-r">
            <div className="text-7xl font-semibold">f</div>
            <div className="text-lg  text-red-500">SATISFIED CLIENTS</div>
          </div>


          <div className="flex flex-col justify-center items-center space-y-5 p-10 border-r">
            <div className="text-7xl font-semibold">f</div>
            <div className="text-lg  text-red-500">SATISFIED CLIENTS</div>
          </div>


          <div className="flex flex-col justify-center items-center space-y-5 p-10 border-r">
            <div className="text-7xl font-semibold">f</div>
            <div className="text-lg  text-red-500">SATISFIED CLIENTS</div>
          </div>


          <div className="flex flex-col justify-center items-center space-y-5 p-10 border-r">
            <div className="text-7xl font-semibold">f</div>
            <div className="text-lg  text-red-500">SATISFIED CLIENTS</div>
          </div>


        </div>
      </div>

      

      <div className="w-full pt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.35017344667!2d67.03150397457047!3d24.851887077934872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33946cdddc7f7%3A0x1ff5b480db012bc0!2sCLIXSTA%20-%20Website%20Designing%20%26%20E-Commerce%20Web%20Development%20Company!5e0!3m2!1sen!2s!4v1697096193748!5m2!1sen!2s" className='w-full' height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default page