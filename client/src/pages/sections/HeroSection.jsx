import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Main Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyan-400">AI-Driven</span> Seamless<br />
              API Integration, No<br />
              Code Needed
            </h1>
            <p className="text-gray-300 text-lg mt-6 leading-relaxed">
              Effortlessly connect with thousands of APIs using natural language. Just type your request, link to your preferred APIs and watch the magic happen.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side - Chat Examples */}
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-white">I need to send an email to all customers who purchased our product last month.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-white">I can help with that. Which email service would you like to use?</p>
                <p className="text-gray-400 text-sm mt-1">
                  Try typing <span className="text-cyan-400">@gmail</span> or <span className="text-cyan-400">@mailchimp</span> to select an API.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-white">I want to use <span className="text-cyan-400">@gmail</span> to create a campaign for these customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}