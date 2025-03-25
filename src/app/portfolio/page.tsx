import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">
            포트폴리오
          </h1>
          <p className="text-gray-mid text-lg">
            DASHI가 작업한 프로젝트들을 소개합니다.
            각 프로젝트에는 고객의 요구사항을 반영한 맞춤형 솔루션이 담겨있습니다.
          </p>
        </div>
        <PortfolioGrid />
        <div className="mt-20">
          <PortfolioCTA />
        </div>
      </div>
    </div>
  );
} 