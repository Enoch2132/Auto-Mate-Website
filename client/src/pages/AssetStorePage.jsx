import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export function AssetStorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main className="pt-10 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Asset Store</h1>
          <div className="text-center text-gray-400">
            <p>Browse and purchase digital assets here.</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}