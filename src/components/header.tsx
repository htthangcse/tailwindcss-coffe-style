import React from 'react';
//import slider from '../../public/slider.jpg';

export default function header() {
  return (
    <div id="root">
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
        <header className="py-6 mx-10">
          <nav className="flex flex-row justify-between items-center">
            <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
              CoffeeStyle.
            </div>
            <ul id="top-menu" className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
              <li className="top-menu-item">
                <a href="#"> Home</a>
              </li>
              <li className="top-menu-item">
                <a href="#">Products</a>
                </li>
              <li className="top-menu-item">
                <a href="#">Blog</a>
              </li>
              <li className="top-menu-item">
                <a href="#">About</a>
              </li>
              <li className="top-menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="top-menu-item">
                <a href="#">StyleGuide</a>
              </li>
              <li className="top-menu-item top-menu-item-active">
                <a href="#">Tienthangdev</a>
              </li>
            </ul>
            <ul className="basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
              <li className="top-menu-item">
                <a href="# flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="mx-2">Cart</span>
                  <span className="badge-circle bg-orange-400 text-white">10</span>
                </a>
              </li>
            </ul>
            <div id="toggle-top-menu" className="basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </nav>
        </header>
        <main>
          {/* <div className="h-[700px] w-full bg-[url('/img/meo.jpg')] bg-no-repeat ">
            <div className="w-full h-full flex justify-between items-center px-5">
              mát à???????????
            </div>
          </div> */}
          <div className="slider h-[530px] bg-[url('/img/slider.jpg')] bg-cover bg-no-repeat bg-bottom">
            <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
              <div className="mx-16 text-white text-center">
                <div className="uppercase mb-6">Best place to buy coffe</div>
                <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
                <div className="font-medium text-lg mb-8">The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                <div className="flex justify-center">
                  <div className="uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-8 text-sm font-semibold cursor-pointer hover:bg-opacity-95">
                    Explore Our Products
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="story flex justify-center items-center">
            <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
                <div className="text-3xl leading-10 mb-6 font-normal">Even the all-powerful Pointing has no control about the blind texts.</div>
                <div className="text-gray-500 leading-7 mb-6">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br />Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                <div>
                  <a href="#" className="text-orange-300 hover:text-orange-500 relative after:absolute after:-bottom-2 after:left-0 after:bg-orange-300 hover:after:bg-orange-500
                    after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400">Read the full story</a>
                </div>
            </div>  
          </div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Featured Mugs</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="featured-mugs w-[95%] xl:w-[65%] mx-auto mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
              <div className="product-card">
                <div className="h-[400px] sm:h-[540px] bg-[url('/img/featured_mugs_1.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Pink Premium Ceramic
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$99.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[400px] sm:h-[540px] bg-[url('/img/featured_mugs_2.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center text-semibold text-orange-950">On Sale.</div>
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Golden Designers Mug
                    </div>
                  </a>
                  <div className="">
                    <span className="text-xl text-orange-800">$50.00</span>
                    <span className="ml-2 text-gray-400 line-through">$69.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">More Products</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="more-products w-[95%] xl:w-[65%] mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-4">
            <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_1.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center text-semibold text-orange-950">On Sale.</div>
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Red Love Cup
                    </div>
                  </a>
                  <div className="">
                    <span className="text-xl text-orange-800">$25.00</span>
                    <span className="ml-2 text-gray-400 line-through">$37.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_2.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center text-semibold text-orange-950">On Sale.</div>
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Black Tea Cup
                    </div>
                  </a>
                  <div className="">
                    <span className="text-xl text-orange-800">$15.00</span>
                    <span className="ml-2 text-gray-400 line-through">$29.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_3.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">B&W Essentials Mug
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$19.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_4.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Winter Style Mug
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$25.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_5.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Ceramic Tea
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$46.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_6.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">No Handle Bar Cup
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$34.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_7.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Espresso Cup by Mugs.co
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$25.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_8.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Pink Premium Ceramic
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$99.00 USD</span>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="h-[380px] bg-[url('/img/product_coffee_9.jpg')] bg-cover bg-no-repeat bg-center">
                  <a href="#">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block 
                      group-hover:animate-fadeIn ">Explore Mug</div>
                    </div>
                  </a>
                </div>
                <div className="text-center my-8">
                  <a href="#">
                    <div className="text-xl mb-3 hover:text-orange-800">Summer Design Cup
                    </div>
                  </a>
                  <div className="">
                    <span className=" text-gray-500">$29.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Buy 2 mugs and get a coffee magazine free</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-24">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="magazine-image basis-1/2 md:flex md:flex-row gap-5 w-full h-full mb-5 md:mb-0">
                <div className="magazine-big-image h-[280px] basis-2/3 mb-2 xs:mb-5 md:mb-0 bg-[url('/img/magazine_1.jpg')] bg-cover bg-no-repeat bg-center"></div>
                <div className="magazine-small-images basis-1/3 flex flex-row md:flex-col gap xs:gap-5">
                  <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('/img/magazine_2.jpg')] bg-cover bg-no-repeat bg-center"></div>
                  <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('/img/magazine_3.jpg')] bg-cover bg-no-repeat bg-center"></div>
                </div>
              </div>
              <div className="magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left">
                <div className="uppercase tracking-widest text-gray-500 font-medium text-xs mb-4">Premium Offer</div>
                <div className="text-4xl mb-4">Get our Coffee Magazine</div>
                <div className="text-gray-500 leading-7 mb-4">The most versatile furniture system ever created. Designed to fit your life.</div>
                <div className="button bg-gray-900 text-white w-max mx-auto md:mx-0">Start Shopping</div>
              </div>
            </div>
          </div>
          <div className="parallax-section bg-[url('/img/parallax.jpg')] bg-cover bg-no-repeat bg-center h-[400px] mb-24 
            bg-fixed w-[100vw] relative left-[calc(-50vw_+_50%)]">
          </div>
          {/* end parallax section */}
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Behind the mugs, lifestyle stories</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="lifestyle-stories">life-style-stories</div>
          <div className="subscribe-us">subscribe-us</div>
        </main>
        <footer>
          footer
        </footer>
      </div>
    </div>
  )
}
