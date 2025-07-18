
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { CheckIcon, KeyIcon, MessageSquareIcon, LinkIcon } from "lucide-react";

export function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M200 400 Q400 200, 600 400 Q800 600, 1000 400"
              stroke="url(#heroGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M150 350 Q350 150, 550 350 Q750 550, 950 350"
              stroke="url(#heroGradient2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
            The Future of API Integration
          </h1>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Auto-Mate is revolutionizing how developers and businesses 
            interact with APIs, eliminating technical barriers and enabling 
            seamless integration through natural language.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Keychain Storage Section */}
          <div className="space-y-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
              <KeyIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Keychain Storage</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Store authentication details and common API requirements securely in your personal keychain for seamless access.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
              </div>
            </div>
          </div>

          {/* Keychain Demo */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="space-y-4">
              <div className="bg-cyan-500 text-black px-4 py-2 rounded-lg max-w-fit">
                <p className="text-sm font-medium">Send a Slack message to our dev team about the API update</p>
              </div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg max-w-fit">
                <p className="text-sm">I'll use your keychain to authenticate and send that message:</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Auto-filled from Keychain</span>
                </div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Slack Workspace: tech-team.slack.com</p>
                  <p>Channel: #dev-updates</p>
                  <p>Bot Token: xoxb-****-****-secure</p>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                Send Message via Keychain
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Language Section */}
      <div className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Natural Language Demo */}
          <div className="bg-black rounded-xl p-6 border border-gray-700">
            <div className="space-y-4">
              <div className="bg-cyan-500 text-black px-4 py-2 rounded-lg max-w-fit">
                <p className="text-sm font-medium">I need to check the weather and send alerts to a Slack channel</p>
              </div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg max-w-fit">
                <p className="text-sm">I'll search for the right API to help with that:</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-sm text-gray-300">Search APIs</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-white">Gmail API</span>
                    <span className="text-gray-400">- Send and manage emails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-white">Slack API</span>
                    <span className="text-gray-400">- Team communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-white">Weather API</span>
                    <span className="text-gray-400">- Weather data and forecasts</span>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                Connect Weather API
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6">
              <MessageSquareIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Natural Language</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Simply type "to" to search and select from thousands of available APIs, all within a natural conversation flow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Connection Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <LinkIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">API Connection</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our system references an extensive collection of OpenAPI schemas, enabling instant access to thousands of services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Features bullet point</span>
                </div>
              </div>
            </div>
          </div>

          {/* API Connection Demo */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div className="bg-gray-800 rounded-lg p-3 flex-1">
                    <p className="text-white text-sm">I need to analyze sentiment in customer feedback from our latest product launch.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="bg-gray-800 rounded-lg p-3 flex-1">
                    <p className="text-white text-sm">I can help with sentiment analysis. Which data source has your customer feedback?</p>
                    <p className="text-cyan-400 text-xs mt-1">
                      Try typing <span className="text-cyan-300">@typeform</span>, sentiment analysis model.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div className="bg-gray-800 rounded-lg p-3 flex-1">
                    <p className="text-white text-sm">Great! I'll use Google Sheets API to access our app. Let me analyze the sentiment using <span className="text-cyan-400">@typeform</span> sentiment analysis model.</p>
                    <p className="text-gray-400 text-xs mt-1">
                      I need permission to access your Google Sheets document. Would you like to authenticate now?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to revolutionize your workflow?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Experience the future of API integration with Auto-Mate's natural language processing.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-lg font-semibold">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
