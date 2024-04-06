import Image from "next/image";
import Navbar from "../components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients,products } from '@/lib/constants'
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { CardContainer } from "@/components/global/3d-card";
import { CardItem } from "@/components/global/3d-card";
import { CardBody } from "@/components/global/3d-card";
import { CheckIcon } from "lucide-react";
import { useEffect } from "react";
import { GoogleGeminiEffectDemo } from "@/components/global/google-effect";
import { MeteorsDemo } from "@/components/global/meteor";

export default function Home() {

  return (
    <main>
      <Navbar/>
      <section>
        <GoogleGeminiEffectDemo />
      </section>

      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <MeteorsDemo name="Chen" phone="4265363" email="gydeheduhi" linkedin="https://cissa.org.au/"/>
          <MeteorsDemo name="Dhruv" phone="4265363" email="gydeheduhi" linkedin="https://cissa.org.au/"/>
          <MeteorsDemo name="Sharan" phone="4265363" email="gydeheduhi" linkedin="https://cissa.org.au/"/>
          <MeteorsDemo name="Ryan" phone="4265363" email="gydeheduhi" linkedin="https://cissa.org.au/"/>
          <MeteorsDemo name="Simon" phone="4265363" email="gydeheduhi" linkedin="https://cissa.org.au/"/>
        </div>
      </section>
    </main>    
  );
}
