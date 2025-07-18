import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, KeyIcon, LinkIcon, MessageSquareIcon } from "lucide-react";

export function Homepage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <HeaderSection />
      
      {/* Hero Section */}
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

      {/* Features Section */}
      <div className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Keychain Storage */}
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <KeyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Keychain Storage</h3>
              <p className="text-gray-300 leading-relaxed">
                Securely store authentication details for seamless API integration across sessions.
              </p>
            </div>

            {/* API Connection */}
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">API Connection</h3>
              <p className="text-gray-300 leading-relaxed">
                Type @ to search and select from thousands of APIs to integrate with your request.
              </p>
            </div>

            {/* Natural Language */}
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquareIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Natural Language</h3>
              <p className="text-gray-300 leading-relaxed">
                Simply describe what you want to do in plain English - our AI understands your intent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to revolutionize your workflow?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Discover how Auto-Mate can transform your operations, so you can focus on what matters.
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-lg font-semibold">
            Get Started Free
          </Button>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}