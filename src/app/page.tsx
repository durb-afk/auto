import Image from "next/image";
import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { CardContainer } from "@/components/global/3d-card";
import { CardItem } from "@/components/global/3d-card";
import { CardBody } from "@/components/global/3d-card";
import { CheckIcon } from "lucide-react";
import { GoogleGeminiEffectDemo } from "@/components/global/google-effect";
import { BackgroundGradientAnimationDemo } from "@/components/global/gradient-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MeteorsDemo } from "@/components/global/meteor";
export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Autom8 Automations
                </h1>
              </div>
            }
          />
        </div>
          
      </section> */}
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
