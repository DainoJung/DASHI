'use client';

import { PortfolioItemType } from '@/hooks/usePortfolioModal';
import { PortfolioDetailHeader } from './PortfolioDetailHeader';
import { ProjectOverview } from './ProjectOverview';
import { ProjectProcessStep } from './ProjectProcessStep';
import { ProjectScreenshots } from './ProjectScreenshots';
import { ProjectTestimonial } from './ProjectTestimonial';

interface PortfolioDetailContentProps {
  item: PortfolioItemType;
}

export function PortfolioDetailContent({ item }: PortfolioDetailContentProps) {
  return (
    <div className="py-8 px-4 md:px-8">
      <PortfolioDetailHeader item={item} />
      <ProjectOverview item={item} />
      <ProjectProcessStep item={item} />
      <ProjectScreenshots item={item} />
      <ProjectTestimonial item={item} />
    </div>
  );
} 