import type { AppProps } from "next/app";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";
import { Services } from "./components/Services";
import { Brands } from "./components/Brands";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Brands />
      <SocialLinks />
      <Services />
    </main>
  );
}
