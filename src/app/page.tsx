import { HeroSection } from '@/components/home/HeroSection';
import { WhyDashiSection } from '@/components/home/WhyDashiSection';
import { MiniCaseStudySection } from '@/components/home/MiniCaseStudySection';
import { ClientTrustSection } from '@/components/home/ClientTrustSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyDashiSection />
      <MiniCaseStudySection />
      <ClientTrustSection />
    </main>
  );
} 