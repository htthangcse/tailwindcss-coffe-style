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
          <div className="story">
            <div className="w-full h-full flex justify-center items-center">
              <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
                <div className="text-3xl leading-10 mb-6 font-normal">Even the all-powerful Pointing has no control about the blind texts.</div>
                <div className="text-gray-500 leading-7 mb-6">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br />Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                <div>
                  <a href="#" className="text-orange-300 hover:text-orange-500 relative after:absolute after:-bottom-2 after:left-0 after:bg-orange-300 hover:after:bg-orange-500
                    after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400">Read the full story</a>
                </div>
              </div>
            </div>
          </div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Featured Mugs</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="more-products">more-products</div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">More Products</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="coffee-magazine">coffee-magazine</div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Buy 2 mugs and get a coffee magazine free</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="lifestyle-stories">life-style-stories</div>
          <div className="subheadline flex justify-center items-center mb-24">
            <div className="subheadline-deco-line"></div>
            <div className="subheadline-label uppercase mx-4">Behind the mugs, lifestyle stories</div>
            <div className="subheadline-deco-line"></div>
          </div>
          <div className="subscribe-us">subscribe-us</div>
        </main>
        <footer>
          footer
        </footer>
      </div>
    </div>
  )
}
