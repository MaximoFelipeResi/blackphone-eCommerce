'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Background } from './Background';
import Image from 'next/image';


const HeroSection = () => {

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero">
          <Background />
        </section>
      </div>
      <div className="image-container relative">

        <div className="absolute inset-0 flex items-start justify-center">
          <p className="text-white-600 text-md md:text-lg font-bold pt-24">Haz scroll para ver más información</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
