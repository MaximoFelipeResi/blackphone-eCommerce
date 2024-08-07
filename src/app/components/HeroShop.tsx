"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";

export default function HeroShop() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Productos <br />
        <div className="flex">
        <p className="title-shop font-incompleeta gold-color">
          BLACK 
        </p>
        <Image
            className="logo-shop mt-4" 
            src="/images/logo.png" 
            alt="LOGO" 
            width={80}
            height={80}
          />
        <p className="title-shop font-incompleeta gold-color">
          PHONE
        </p>
        </div>
        
      </motion.h1>
        <div className="mt-auto">
          <p className="text-slate-400">Explora más abajo todo lo que ofrecemos ↓</p>
        </div>
    </LampContainer>
  );
}
