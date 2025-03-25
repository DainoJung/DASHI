'use client';

import { motion } from 'framer-motion';
import { PortfolioItemType } from '@/hooks/usePortfolioModal';

interface ProjectProcessStepProps {
  item: PortfolioItemType;
}

export function ProjectProcessStep({ item }: ProjectProcessStepProps) {
  // 기본 프로세스 단계 (데이터가 없는 경우 사용)
  const defaultProcessSteps = [
    {
      title: '리서치 및 분석',
      description: '사용자 요구와 경쟁사 분석을 통해 프로젝트 방향성을 설정했습니다.'
    },
    {
      title: '와이어프레임',
      description: '사용자 흐름과 정보 구조를 고려한 와이어프레임을 제작했습니다.'
    },
    {
      title: '시각적 디자인',
      description: '브랜드 아이덴티티를 반영한 디자인 시스템을 개발했습니다.'
    },
    {
      title: '프로토타입 및 테스트',
      description: '인터랙티브 프로토타입을 제작하고 사용자 테스트를 진행했습니다.'
    }
  ];

  const processSteps = item.processSteps || defaultProcessSteps;

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-dark mb-6">프로젝트 진행 과정</h2>
      
      <div className="space-y-8">
        {processSteps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
          >
            <div className="md:w-32 flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block h-full w-0.5 bg-gray-line ml-5 -mb-8"></div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-gray-mid">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 