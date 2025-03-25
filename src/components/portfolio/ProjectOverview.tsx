'use client';

import { motion } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';

interface ProjectOverviewProps {
  item: PortfolioItemType;
}

export function ProjectOverview({ item }: ProjectOverviewProps) {
  const problem = item.problem || '이 프로젝트에서는 사용자 경험을 개선하고 브랜드 가치를 높이는 디자인 솔루션이 필요했습니다. 기존 디자인은 사용성과 시각적 매력도가 낮아 개선이 필요한 상황이었습니다.';
  const solution = item.solution || 'DASHI는 사용자 중심의 접근 방식으로 직관적이고 시각적으로 매력적인 디자인을 제공했습니다. 모든 디자인 요소는 브랜드의 핵심 가치를 강화하고 사용자 경험을 향상시키는 데 초점을 맞추었습니다.';

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-dark mb-6">프로젝트 개요</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-dark mb-3">문제 상황</h3>
          <p className="text-gray-mid">{problem}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-dark mb-3">솔루션</h3>
          <p className="text-gray-mid">{solution}</p>
        </div>
      </div>
    </motion.div>
  );
} 