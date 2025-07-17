import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <main className="pt-24 px-4">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
          <div className="text-center text-gray-400">
            <p>User dashboard and analytics will be displayed here.</p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}