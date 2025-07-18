
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <div className="pt-16 flex min-h-screen">
        {/* Left Panel - Dark with branding */}
        <div className="w-1/2 bg-black text-white flex flex-col px-12 relative overflow-hidden">
          {/* Main content - positioned at top */}
          <div className="z-10 text-left mt-16 mb-8 max-w-md">
            <h1 className="text-4xl font-bold leading-tight">
              Auto-Mate connects you to thousands of APIs
            </h1>
          </div>
          
          {/* Decorative geometric element - positioned below text */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative">
              {/* Flowing organic shapes */}
              <div className="absolute -top-20 -left-20">
                <div className="w-80 h-80 opacity-30">
                  <svg viewBox="0 0 320 320" className="w-full h-full">
                    <path
                      d="M80,160 Q160,40 240,160 Q160,280 80,160"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <path
                      d="M60,140 Q140,20 220,140 Q140,260 60,140"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="1.5"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Center square with gradient */}
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl shadow-2xl shadow-blue-500/30 relative z-10"></div>
              
              {/* Additional flowing elements */}
              <div className="absolute -bottom-16 -right-16 w-56 h-56 opacity-15">
                <div className="w-full h-full border-2 border-purple-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
              <div className="absolute -top-16 -right-16 w-40 h-40 opacity-20">
                <div className="w-full h-full border-2 border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center px-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Login</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700 block">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-4 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-base"
              >
                Create Account
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </a>
              </p>
            </div>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">or</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign up with Google
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Sign up with GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
