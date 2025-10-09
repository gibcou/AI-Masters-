'use client'

import React from 'react'

const HeroSection = () => {
  const handleStartLearning = () => {
    // Redirect to quiz page for course recommendation
    window.location.href = '/quiz'
  }

  const profileImages = [
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.530e15cd.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c9e01515.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.b716e41c.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.9d17d9c3.png&w=96&q=75",
    "https://coursiv.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a418b884.png&w=96&q=75"
  ]

  return (
    <section id="hero" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Become the<br />
              Master of AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Learn how AI can increase your income and improve your life
            </p>
            
            <button 
              onClick={handleStartLearning}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
            >
              Start Now →
            </button>
            
            {/* Profile images and count */}
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Learner ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                More than 1,181,062+ people joined
              </span>
            </div>
          </div>
          
          {/* Right side - Video/Content area */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-gray-100 rounded-2xl p-8 w-full max-w-md">
              {/* Video placeholder */}
              <div className="bg-blue-600 rounded-xl p-6 mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="absolute inset-0 w-full h-full" viewBox="0 0 1200 1400" preserveAspectRatio="none">
                  <defs>
                    <clipPath id="__lottie_element_7">
                      <rect x="0" y="0" width="1200" height="1400"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_7)" transform="matrix(0.956849992275238,0,0,0.9415299892425537,25.8900146484375,35.08203125)" opacity="1" style={{display: 'block'}}>
                    <g transform="matrix(1,0,0,1,0,4)" opacity="1" style={{display: 'block'}}>
                      <g opacity="1" transform="matrix(1,0,0,1,599.9390258789062,637.541015625)">
                        <path fill="rgb(248,248,255)" fillOpacity="1" d=" M-551.0599975585938,-513.8070068359375 C-551.0599975585938,-513.8070068359375 551.0599975585938,-513.8070068359375 551.0599975585938,-513.8070068359375 C551.0599975585938,-513.8070068359375 551.0599975585938,497.8070068359375 551.0599975585938,497.8070068359375 C551.0599975585938,506.6440124511719 543.89697265625,513.8070068359375 535.0599975585938,513.8070068359375 C535.0599975585938,513.8070068359375 -535.0599975585938,513.8070068359375 -535.0599975585938,513.8070068359375 C-543.89697265625,513.8070068359375 -551.0599975585938,506.6440124511719 -551.0599975585938,497.8070068359375 C-551.0599975585938,497.8070068359375 -551.0599975585938,-513.8070068359375 -551.0599975585938,-513.8070068359375z"></path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{display: 'block'}}>
                      <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke="rgb(230,230,239)" strokeOpacity="1" strokeWidth="6" d=" M147.28,217.92 C147.28,208.6 154.84,201.05 164.15,201.05 C164.15,201.05 1037.13,201.05 1037.13,201.05 C1046.45,201.05 1054,208.6 1054,217.92 C1054,217.92 1054,1151.35 1054,1151.35 C1054,1151.35 147.28,1151.35 147.28,1151.35 C147.28,1151.35 147.28,217.92 147.28,217.92z"></path>
                      <g opacity="1" transform="matrix(1,0,0,1,600.6420288085938,676.2000122070312)">
                        <path fill="rgb(255,255,255)" fillOpacity="1" d=" M-453.3599853515625,-458.2799987792969 C-453.3599853515625,-467.59600830078125 -445.8070068359375,-475.14898681640625 -436.4909973144531,-475.14898681640625 C-436.4909973144531,-475.14898681640625 436.489990234375,-475.14898681640625 436.489990234375,-475.14898681640625 C445.8059997558594,-475.14898681640625 453.3599853515625,-467.59600830078125 453.3599853515625,-458.2799987792969 C453.3599853515625,-458.2799987792969 453.3599853515625,475.14898681640625 453.3599853515625,475.14898681640625 C453.3599853515625,475.14898681640625 -453.3599853515625,475.14898681640625 -453.3599853515625,475.14898681640625 C-453.3599853515625,475.14898681640625 -453.3599853515625,-458.2799987792969 -453.3599853515625,-458.2799987792969z"></path>
                      </g>
                    </g>
                    <g style={{display: 'block'}} transform="matrix(1,0,0,1,0,0)" opacity="0.3755833333712878">
                      <g opacity="1" transform="matrix(1,0,0,1,597.1279907226562,910.72900390625)">
                        <path fill="rgb(245,247,248)" fillOpacity="1" d=" M-386.58599853515625,-181.11000061035156 C-386.58599853515625,-181.11000061035156 386.58599853515625,-181.11000061035156 386.58599853515625,-181.11000061035156 C392.7969970703125,-181.11000061035156 397.8320007324219,-176.0760040283203 397.8320007324219,-169.86500549316406 C397.8320007324219,-169.86500549316406 397.8320007324219,169.86399841308594 397.8320007324219,169.86399841308594 C397.8320007324219,176.0760040283203 392.7969970703125,181.11000061035156 386.58599853515625,181.11000061035156 C386.58599853515625,181.11000061035156 -386.58599853515625,181.11000061035156 -386.58599853515625,181.11000061035156 C-392.7969970703125,181.11000061035156 -397.8320007324219,176.0760040283203 -397.8320007324219,169.86399841308594 C-397.8320007324219,169.86399841308594 -397.8320007324219,-169.86500549316406 -397.8320007324219,-169.86500549316406 C-397.8320007324219,-176.0760040283203 -392.7969970703125,-181.11000061035156 -386.58599853515625,-181.11000061035156z"></path>
                      </g>
                    </g>
                    <g style={{display: 'block'}} transform="matrix(1,0,0,1,0,0)" opacity="0.7953529412568447">
                      <g opacity="1" transform="matrix(1,0,0,1,597.1279907226562,514.5369873046875)">
                        <path fill="rgb(245,247,248)" fillOpacity="1" d=" M-380.9630126953125,-174.31500244140625 C-380.9630126953125,-174.31500244140625 380.9630126953125,-174.31500244140625 380.9630126953125,-174.31500244140625 C390.27899169921875,-174.31500244140625 397.8320007324219,-166.76199340820312 397.8320007324219,-157.4459991455078 C397.8320007324219,-157.4459991455078 397.8320007324219,157.4459991455078 397.8320007324219,157.4459991455078 C397.8320007324219,166.76300048828125 390.27899169921875,174.31500244140625 380.9630126953125,174.31500244140625 C380.9630126953125,174.31500244140625 -380.9630126953125,174.31500244140625 -380.9630126953125,174.31500244140625 C-390.2799987792969,174.31500244140625 -397.8320007324219,166.76300048828125 -397.8320007324219,157.4459991455078 C-397.8320007324219,157.4459991455078 -397.8320007324219,-157.4459991455078 -397.8320007324219,-157.4459991455078 C-397.8320007324219,-166.76199340820312 -390.2799987792969,-174.31500244140625 -380.9630126953125,-174.31500244140625z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="flex items-center justify-center h-48 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="#2563eb"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-1 z-10">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Input field */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Generate"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection