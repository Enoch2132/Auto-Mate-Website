
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, StarIcon, DownloadIcon, HeartIcon } from "lucide-react";
import { useState } from "react";

export function AssetStorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "math", label: "Math" },
    { id: "finance", label: "Finance" },
    { id: "government", label: "Government" },
    { id: "education", label: "Education" }
  ];

  const featuredAssets = [
    {
      id: 1,
      name: "API Analytics Widget",
      description: "Real-time API performance monitoring",
      gradient: "from-purple-600 to-blue-600",
      rating: 4.8,
      downloads: "12.5k",
      price: "Free"
    },
    {
      id: 2,
      name: "Data Visualization Kit",
      description: "Beautiful charts and graphs for your data",
      gradient: "from-cyan-500 to-teal-600",
      rating: 4.9,
      downloads: "8.2k",
      price: "$19"
    },
    {
      id: 3,
      name: "Authentication Flow",
      description: "Complete OAuth integration solution",
      gradient: "from-emerald-500 to-green-600",
      rating: 4.7,
      downloads: "15.1k",
      price: "$29"
    }
  ];

  const topAssets = [
    { id: 1, name: "Weather API Widget", category: "utility", rating: 4.6, downloads: "5.2k" },
    { id: 2, name: "Payment Gateway", category: "finance", rating: 4.8, downloads: "9.8k" },
    { id: 3, name: "Social Media Kit", category: "social", rating: 4.5, downloads: "7.3k" },
    { id: 4, name: "Email Templates", category: "communication", rating: 4.7, downloads: "11.2k" },
    { id: 5, name: "Calendar Widget", category: "productivity", rating: 4.4, downloads: "3.9k" }
  ];

  const educationAssets = [
    { id: 1, name: "Quiz Generator", category: "education", rating: 4.9, downloads: "6.1k" },
    { id: 2, name: "Grade Calculator", category: "education", rating: 4.6, downloads: "4.5k" },
    { id: 3, name: "Study Timer", category: "education", rating: 4.8, downloads: "8.7k" },
    { id: 4, name: "Flashcard System", category: "education", rating: 4.7, downloads: "5.9k" },
    { id: 5, name: "Assignment Tracker", category: "education", rating: 4.5, downloads: "3.2k" }
  ];

  const AssetCard = ({ asset, isLarge = false }) => (
    <div className={`bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer ${isLarge ? 'p-6' : 'p-4'}`}>
      <div className={`bg-gradient-to-br ${asset.gradient || 'from-gray-700 to-gray-600'} rounded-lg ${isLarge ? 'h-32 mb-4' : 'h-20 mb-3'} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-white font-bold text-xl opacity-80">
          {asset.name.split(' ')[0]}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className={`text-white font-semibold group-hover:text-cyan-400 transition-colors ${isLarge ? 'text-lg' : 'text-sm'}`}>
          {asset.name}
        </h3>
        
        {asset.description && (
          <p className="text-gray-400 text-sm leading-relaxed">
            {asset.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">{asset.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <DownloadIcon className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{asset.downloads}</span>
            </div>
          </div>
          
          {asset.price && (
            <span className="text-cyan-400 font-semibold text-sm">
              {asset.price}
            </span>
          )}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">
            Install
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <HeartIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      
      <main className="pt-24 px-4 pb-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-cyan-400">Asset</span> Store
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover and integrate powerful widgets, APIs, and tools to supercharge your Auto-Mate workflows
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
              <div className="relative max-w-md w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search assets..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-cyan-500"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className={
                    activeFilter === filter.id
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Assets */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Assets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} isLarge={true} />
              ))}
            </div>
          </section>

          {/* Top Assets */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Top Assets</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {topAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </section>

          {/* Education Assets */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Education Assets</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {educationAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Request a custom asset or contribute your own to help the Auto-Mate community grow
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                Request Asset
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
                Submit Your Asset
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}
