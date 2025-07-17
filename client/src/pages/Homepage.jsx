import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

export function Homepage() {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      title: "Keychain Storage",
      description:
        "Securely store authentication details for seamless API integration across sessions.",
      iconSrc: "/figmaAssets/screenshot-2025-06-18-112943-1.png",
      iconAlt: "Screenshot",
      position: "left-[90px]",
    },
    {
      id: 2,
      title: "API Connection",
      description:
        "Type @ to search and select from thousands of APIs to integrate with your request.",
      iconSrc: "/figmaAssets/screenshot-2025-06-18-111506-1.png",
      iconAlt: "Screenshot",
      position: "left-[408px]",
    },
    {
      id: 3,
      title: "Natural Language",
      description:
        "Simply describe what you want to do in plain English - our AI understands your intent.",
      iconSrc: "/figmaAssets/untitled--2--1.png",
      iconAlt: "Untitled",
      position: "left-[726px]",
    },
  ];

  return (
    <div className="bg-zinc-950 flex flex-row justify-center w-full">
      <div className="bg-zinc-950 overflow-hidden w-full max-w-[1440px] relative">
        <HeaderSection />
        <HeroSection />
        <FooterSection />
      </div>
    </div>
  );
}