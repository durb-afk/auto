import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { GoogleGeminiEffectDemo } from "./google-effect";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-7xl text-center md:text-7xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          FREE
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
