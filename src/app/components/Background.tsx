import React from "react";
import { cn } from "@/app/utils/cn";
import { Spotlight } from "../components/ui/spotlight";
import Image from "next/image";

export function Background() {
  return (
    <div className="h-[65rem] w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="full-title flex flex-row items-center">
          <h1 className="text-white text-2xl md:text-6xl sm:text-5xl font-bold text-center font-incompleeta gold-color h1-class">
            Black
          </h1>

          <Image
            className="logo-img" 
            src="/images/logo.png" 
            alt="Logo BlackPhone"
            title="Logo BlackPhone" 
            width={150}
            height={150}
          />
          <h1 className="text-white text-2xl md:text-6xl sm:text-5xl font-bold text-center font-incompleeta gold-color h1-class">
            Phone
          </h1>

      </div>
        <p className="slogan text-white text-sm md:text-2xl max-w-xl mt-6 text-center uppercase">
          Never Settle
        </p>

    </div>
  );
}
