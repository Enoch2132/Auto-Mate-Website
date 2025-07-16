import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Feature cards data
  const features = [
    {
      title: "Keychain Storage",
      description:
        "Securely store authentication details for seamless API integration across sessions.",
      icon: "🔑",
    },
    {
      title: "API Connection",
      description:
        "Type @ to search and select from thousands of APIs to integrate with your request.",
      icon: "🔗",
    },
    {
      title: "Natural Language",
      description:
        "Simply describe what you want to do in plain English - our AI understands your intent.",
      icon: "💬",
    },
  ];

  return (
    <section className="relative w-full mx-auto max-w-6xl py-8">
      <div className="relative">
        {/* Blur effect */}
        <div className="absolute w-[282px] h-[245px] top-[34px] right-[20%] bg-white rounded-[141px/122.5px] blur-[409.6px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-white">
              <span className="text-[#00c8ff]">AI-Driven</span> Seamless API
              Integration, No Code Needed
            </h1>

            <p className="font-medium text-white text-base tracking-[-0.32px] max-w-[340px]">
              Effortlessly connect with thousands of APIs using natural
              language. Just type your request, link up, and run—it's that
              simple.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-11 px-6 font-semibold text-white rounded-[15px] bg-gradient-to-r from-[rgba(0,200,255,1)] to-[rgba(138,56,245,1)]">
                Get Started Free
              </Button>

              <Button
                variant="outline"
                className="h-11 px-6 font-semibold text-white rounded-[15px] bg-black border-[#00c8ff]"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right column - Screenshot */}
          <div className="relative">
            <img
              className="w-full max-w-[616px] h-auto object-cover"
              alt="Screenshot"
              src="/figmaAssets/screenshot-2025-06-18-090918-1.png"
            />
          </div>
        </div>

        {/* Features section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#111] border-none">
                <CardContent className="p-6">
                  <div className="mb-4 text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to revolutionize your workflow?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Discover how Auto-Mate can transform your operations, so you can
            focus on what matters.
          </p>
          <Button className="h-11 px-6 font-semibold text-white rounded-[15px] bg-gradient-to-r from-[rgba(0,200,255,1)] to-[rgba(138,56,245,1)]">
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};
