import HeroSection from '@/components/features/home/HeroSection';
import QuickAccessGrid from '@/components/features/home/QuickAccessGrid';
import FounderSection from '@/components/features/home/FounderSection';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-gray-50">
      <HeroSection />
      <QuickAccessGrid />
      <FounderSection />
    </main>
  );
}
