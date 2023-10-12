import React from 'react'

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-2 px-20 py-10">
        <div className="flex flex-col space-y-5 justify-center">
          <div className="text-4xl font-semibold">
            WordPress Website Design
            & Development Best Packages Plan & Pricing
          </div>
          <div className="text-2xl font-semibold">
            Custom WordPress Business Website Design
          </div>
          <div className="text-md">
            We offers the best WordPress website design & development Packages in affordable budget. The business website is now the backbone and the infrastructure around which you build your business.
          </div>
          <div className="grid grid-cols-2">

            <div className="">
              <div className="text-md font-semibold">Custom Website design</div>
              <div className="text-md font-semibold">Custom Website design</div>
              <div className="text-md font-semibold">Custom Website design</div>
            </div>

            <div className="">
              <div className="text-md font-semibold">Custom Website design</div>
              <div className="text-md font-semibold">Custom Website design</div>
              <div className="text-md font-semibold">Custom Website design</div>
            </div>
          </div>
          <ul className="flex gap-5">
            <button className="p-2 bg-red-500 px-5 rounded">ABOUT COMPANY</button>
            <button className="p-2 border-2 rounded">CONTACT US</button>
          </ul>

        </div>
        <div className="">
          <img src="https://www.artimization.com/wp-content/uploads/2020/04/Website-Design-Development.jpg.webp" alt="" className='rounded-2xl' />
        </div>
      </div> 
      
      <div className="p-20 flex gap-20">
        <div className="flex flex-col space-y-5">
          <div className="text-4xl font-semibold">
            Get your business noticed with
            Artimization Web Design Services
          </div>
          <div className="text-md">
            Website Development in view of your client. Modern website style is more required than making an appealing website. Thought of client experience, search engine optimization, usability, and specialized details are only a couple of components that are associated with building up a website that is intended to perform in the present focused market place.
          </div>
</div>
        <img src="https://www.artimization.com/wp-content/uploads/2020/05/100-satisfaction-1.png.webp" alt="" />
      </div>


      {/* <!-- Container for demo purpose --> */}
      <div className="container p-20 ">
        {/* <!-- Section: Design Block --> */}
        <section >
          <h2 className="mb-6 text-center text-3xl font-bold">Pricing</h2>

          <p className="mb-12 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            amet.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-black lg:grid-cols-3 xl:gap-x-12">


            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white bg-gray-800">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Basic</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 129</strong>
                    <small className="text-sm ">/year</small>
                  </h3>


                  <button type="button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                      updates
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                      repository
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                      installation
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full rounded-lg border border-primary bg-white bg-gray-800">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Advanced</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 299</strong>
                    <small className="text-sm ">/year</small>
                  </h3>

                  <button type="button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                      updates
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                      repository
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                      installation
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium
                      snippets
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white bg-gray-800">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Enterprise</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 499</strong>
                    <small className="text-sm ">/year</small>
                  </h3>

                  <button type="button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                      updates
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                      repository
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                      installation
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Code examples
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium
                      snippets
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Premium
                      support
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Drag&amp;Drop
                      builder
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
      


      <div className="p-10">
        <img src="/responsive.png" alt="" className='w-full' />
      </div>

      
      <div className="p-20 flex flex-col justify-center items-center">
        <div className="text-5xl font-semibold">
          We design foundations <br />
          with trust and sincerity
        </div>
        <div className="grid grid-cols-4 py-10">

          <div className="flex flex-col justify-center items-center space-y-5 p-14 border-r">
            <div className="text-5xl font-semibold">1000+</div>
            <div className="text-md font-semibold text-red-500">SATISFIED CLIENTS</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14 border-r">
            <div className="text-5xl font-semibold">1000+</div>
            <div className="text-md font-semibold text-red-500">SATISFIED CLIENTS</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14 border-r">
            <div className="text-5xl font-semibold">1000+</div>
            <div className="text-md font-semibold text-red-500">SATISFIED CLIENTS</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14">
            <div className="text-5xl font-semibold">1000+</div>
            <div className="text-md font-semibold text-red-500">SATISFIED CLIENTS</div>
          </div>

        </div>
      </div>


      <div className="p-20 flex flex-col justify-center items-center space-y-5">
        <div className="text-xl text-red-500">PORTFOLIO</div>
        <div className="text-5xl font-semibold">
          Our Latest Website Layout
        </div>
        <div className="grid grid-cols-4 py-10 gap-3">

          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 rounded"></div>
          
        </div>
        <button className="p-2 bg-white text-black px-5 rounded">ABOUT COMPANY</button>

      </div>

      

      <div className="p-20 flex flex-col justify-center items-center">
        <div className="text-xl text-red-500">WHAT NEED TO MAKE</div>
        <div className="text-5xl font-semibold">
          Website Successful
        </div>
        <div className="grid grid-cols-3 py-20">

          <div className="flex flex-col p-10 justify-center items-center space-y-5 border-r  border-b">
            <div className="text-3xl">Responsive Website</div>
            <div className="text-lg text-center">
              Everything begins with responsive website architecture. Quick loading time = happy visitors. Google has clarified that they lean toward sites that respond rapidly. We overview the majority of our customers, the consequences of which go directly to our CEO.
            </div>
          </div>



          <div className="flex flex-col p-10 justify-center items-center space-y-5  border-b border-r">
            <div className="text-3xl">Responsive Website</div>
            <div className="text-lg text-center">
              Everything begins with responsive website architecture. Quick loading time = happy visitors. Google has clarified that they lean toward sites that respond rapidly. We overview the majority of our customers, the consequences of which go directly to our CEO.
            </div>
          </div>

          

          <div className="flex flex-col p-10 justify-center items-center space-y-5 border-b">
            <div className="text-3xl">Responsive Website</div>
            <div className="text-lg text-center">
              Everything begins with responsive website architecture. Quick loading time = happy visitors. Google has clarified that they lean toward sites that respond rapidly. We overview the majority of our customers, the consequences of which go directly to our CEO.
            </div>
          </div>

          
        </div>
      </div>

      

      <div className="flex p-20 gap-20">
        <div className="w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">Finding Ecommerce <br />
            To Sell your Products?</div>
          <div className="text-md">
            Artimization offers a full-suite of Ecommerce business development service, including procedure, incorporations, migration and obviously the working of results driven online stores. We additionally give continuous 24×7 help and support to keep your website live for business and ready to generate income consistently.
          </div>
          <div className="flex gap-5 items-center">
            <button className="p-2 bg-white text-black px-5 rounded">ABOUT COMPANY</button>
            <div className="text-md"> Get Free Consultation </div>
          </div>
        </div>
        <div className="w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2018/09/online-shop-2.png.webp" alt="" className="w-full" />
        </div>
      </div>


      <div className="flex p-20 gap-20">
        <div className="w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2019/12/custom-website-design.png.webp" alt="" className="w-full" />
        </div>
        <div className="w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">
            Top rated custom website <br /> development services
          </div>
          <div className="text-md">
            At the point when the issue as a main priority is that of custom web development then we ensure that our customers get the space that they are looking for in the online world.
            <br />
            <br />
            Their dream of traveling places from the purpose of start to where they need to reach should be acknowledged with us.
          </div>
        </div>
      </div>

      

      <div className="flex p-20 gap-20 bg-white text-black">
        <div className="w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">Finding Ecommerce <br />
            To Sell your Products?</div>
          <div className="text-md">
            Artimization offers a full-suite of Ecommerce business development service, including procedure, incorporations, migration and obviously the working of results driven online stores. We additionally give continuous 24×7 help and support to keep your website live for business and ready to generate income consistently.
          </div>
          <div className="flex gap-5 items-center">
            <button className="p-2 text-white bg-black px-5 rounded">ABOUT COMPANY</button>
            <div className="text-md"> Get Free Consultation </div>
          </div>
        </div>
        <div className="w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2021/02/Web-Design-Packages.jpg" alt="" className="w-full" />
        </div>
      </div>


      <div className="grid grid-cols-2">
        <div className="pl-20 flex flex-col space-y-5">
          <div className="text-5xl font-semibold text-red-500">Small Business <br />
            Starter kit Package.</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col space-y-3">
              <div className="text-xl font-semibold">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-xl font-semibold">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
            </div>


            <div className="flex flex-col space-y-3">
              <div className="text-xl font-semibold">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-xl font-semibold">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
              <div className="text-sm">Logo Design</div>
            </div>
            <div className="text-xl font-semibold">View Full Package Details </div>

          </div>
        </div>
        <div className="">
          <img src="https://www.artimization.com/wp-content/uploads/2020/04/business-kit-package.jpg.webp" alt="" className="w-full" />
        </div>
      </div>

      <div className="p-20">

        <div className="text-5xl font-semibold ">
          Read more about <br />
          Web Design & Trends.
        </div>
        <div className="grid grid-cols-3 py-20 gap-7">

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
<div className="p-3 space-y-5 border">
              <div className="text-xl">
              Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
            </div>
            <div className="text-lg">
              In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
            </div>
            <div className="text-lg text-red-500">Read Full Story</div>
</div>
          </div>

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
<div className="p-3 space-y-5 border">
              <div className="text-xl">
              Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
            </div>
            <div className="text-lg">
              In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
            </div>
            <div className="text-lg text-red-500">Read Full Story</div>
</div>
          </div>

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
<div className="p-3 space-y-5 border">
              <div className="text-xl">
              Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
            </div>
            <div className="text-lg">
              In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
            </div>
            <div className="text-lg text-red-500">Read Full Story</div>
</div>
          </div>


        </div>
</div>


      <div className="p-20 flex flex-col space-y-3">
        <div className="text-2xl">WEBSITE DESIGN</div>
        <div className="text-5xl font-semibold">Frequently asked questions.</div>
        

        <details className='p-2 text-xl border-b cursor-pointer transition '>
          <summary>Hello</summary>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam, accusamus eius neque voluptatum expedita enim voluptate nostrum fuga repellat repudiandae rem quo ex magnam voluptatem illum excepturi quisquam dolorum!</span>
        </details>


        <details className='p-2 text-xl border-b cursor-pointer transition '>
          <summary>Hello</summary>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam, accusamus eius neque voluptatum expedita enim voluptate nostrum fuga repellat repudiandae rem quo ex magnam voluptatem illum excepturi quisquam dolorum!</span>
        </details>


        <details className='p-2 text-xl border-b cursor-pointer transition '>
          <summary>Hello</summary>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam, accusamus eius neque voluptatum expedita enim voluptate nostrum fuga repellat repudiandae rem quo ex magnam voluptatem illum excepturi quisquam dolorum!</span>
        </details>

      </div>
      

      <div className="px-20 py-10 grid grid-cols-3 gap-10">
        <div className="space-y-3">
          <div className="text-4xl font-semibold">Our Services</div>
          <div className="text-lg">
            Either you are a startup business or running a multi million company. You always need change, innovation and creativity. Our digital capabilities knows what makes you great in untouched Space!
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
            </div>


        <div className="space-y-3">
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
          <div className="text-2xl">Our Services</div>
        </div>

</div>


      
      {/* section */}
      <section className="p-10 bg-red-500 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <button className="p-3 px-6 rounded bg-white text-black">CONTACT US</button>
          <button className="p-3 px-6 rounded border-2">BUSINESS PROFILE</button>
        </span>
      </section>
      {/* section */}

      
    </div>
  )
}

export default page