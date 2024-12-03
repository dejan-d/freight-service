'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

interface HeroSlide {
  image: string;
  headline: string;
  subheadline: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: '/images/image1.jpg',
    headline: 'Global Freight Solutions',
    subheadline: 'Connecting Businesses Across Continents'
  },
  {
    image: '/images/image2.jpg',
    headline: 'Efficient Logistics',
    subheadline: 'Streamlining Your Supply Chain'
  },
  {
    image: '/images/image3.jpg',
    headline: 'Seamless Shipping',
    subheadline: 'From Point A to Point B, Perfectly'
  },
  {
    image: '/images/hero-4.jpg',
    headline: 'Reliable Transportation',
    subheadline: 'Your Cargo, Our Commitment'
  }
];

const HeroSlider: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {({ isActive }) => (
              <>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ 
                    backgroundImage: `url('${slide.image}')`,
                    filter: 'brightness(0.6)' 
                  }}
                />
                
                {/* Content Overlay */}
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                  <div 
                    className={`transform transition-all duration-1000 ${
                      isActive 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                      {slide.headline}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                      {slide.subheadline}
                    </p>
                    <button className="bg-container_red hover:bg-container_light text-white font-bold py-3 px-6 rounded-full transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;