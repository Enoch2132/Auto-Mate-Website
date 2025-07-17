import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main className="pt-24 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Product</h1>
          <div className="text-center text-gray-400">
            <p>Product information and features will be displayed here.</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}