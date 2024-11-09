'use client'
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const heroImages = [
  {src:'/assets/images/i.jpg', alt:'iphone', title: 'iphone', description: ''},
  {src:'/assets/images/ear.jpg', alt:'ear', title: 'ear', description: ''},
    {src:'/assets/images/smar.jpg', alt:'smart', title: 'smart', description: ''},
    {src:'/assets/images/mac.jpg', alt:'Bag', title: 'MAC', description: ''},
    
    
]

export const HeroCarousel = () => {
  return (
    <div className='hero-carousel card-flip'>
        <Carousel
        
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={false}
          showStatus={false}
          swipeable={true}
        >
          {heroImages.map((item) => (
            <div key={item.alt} className="card-flip-slide">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      height={400}
                      width={400}
                      className="card-flip-image mt-5"
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </Carousel>
    </div>
  )
}
