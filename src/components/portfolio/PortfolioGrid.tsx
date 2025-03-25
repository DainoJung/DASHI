'use client';

import { motion } from 'framer-motion';
import { usePortfolioModal, PortfolioItemType } from '@/hooks/usePortfolioModal';
import { PortfolioModal } from './PortfolioModal';

// 임시 포트폴리오 데이터
const portfolioItems: PortfolioItemType[] = [
  {
    id: '1',
    title: '어드민 대시보드 디자인',
    description: '데이터 시각화와 사용성을 고려한 어드민 시스템',
    category: '웹 디자인',
    bgColor: 'bg-[#3449FF]',
    slug: 'admin-dashboard',
    problem: '복잡한 데이터를 효과적으로 시각화하고 관리자가 쉽게 사용할 수 있는 인터페이스가 필요했습니다.',
    solution: '핵심 데이터를 강조하는 직관적인 대시보드를 설계하고, 사용자 테스트를 통해 최적화된 워크플로우를 구현했습니다.',
    processSteps: [
      {
        title: '사용자 인터뷰',
        description: '관리자의 실제 업무 패턴과 필요한 기능을 파악했습니다.'
      },
      {
        title: '정보 아키텍처 설계',
        description: '데이터 계층 구조와 핵심 기능에 대한 접근성을 고려한 구조를 설계했습니다.'
      },
      {
        title: '프로토타입 개발',
        description: '인터랙티브 프로토타입을 제작하여 실제 사용성을 테스트했습니다.'
      },
      {
        title: '시각적 디자인 완성',
        description: '브랜드 아이덴티티를 반영한 UI 컴포넌트 시스템을 개발했습니다.'
      }
    ],
    testimonial: {
      quote: "DASHI의 디자인은 우리 관리자들의 작업 효율성을 크게 향상시켰습니다. 이전에는 여러 화면을 오가며 작업했지만, 이제는 한 화면에서 모든 것을 관리할 수 있게 되었습니다.",
      author: "김민준",
      role: "CTO",
      company: "테크스타트"
    }
  },
  {
    id: '2',
    title: '이커머스 모바일 앱',
    description: '사용자 중심의 쇼핑 경험 디자인',
    category: '앱 디자인',
    bgColor: 'bg-[#FF6B6B]',
    slug: 'ecommerce-app',
  },
  {
    id: '3',
    title: '브랜드 아이덴티티',
    description: '현대적이고 미니멀한 브랜드 디자인',
    category: '브랜딩',
    bgColor: 'bg-[#4CAF50]',
    slug: 'brand-identity',
  },
  {
    id: '4',
    title: '금융 서비스 웹사이트',
    description: '신뢰감을 주는 금융 플랫폼 디자인',
    category: '웹 디자인',
    bgColor: 'bg-[#9C27B0]',
    slug: 'finance-website',
  },
  {
    id: '5',
    title: '헬스케어 플랫폼',
    description: '직관적인 건강 관리 서비스 디자인',
    category: '웹 디자인',
    bgColor: 'bg-[#2196F3]',
    slug: 'healthcare-platform',
  },
  {
    id: '6',
    title: '푸드 딜리버리 앱',
    description: '심플하고 효율적인 배달 서비스 디자인',
    category: '앱 디자인',
    bgColor: 'bg-[#FF9800]',
    slug: 'food-delivery',
  },
];

export function PortfolioGrid() {
  const { isOpen, selectedItem, openModal, closeModal } = usePortfolioModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioItems.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <button
              onClick={() => openModal(item)}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl ${item.bgColor} transition-transform duration-300 hover:scale-[1.02] block w-full`}
            >
              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-white/80 mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 카드 패턴 */}
              <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}></div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* 포트폴리오 상세 모달 */}
      <PortfolioModal 
        isOpen={isOpen}
        onClose={closeModal}
        item={selectedItem}
      />
    </>
  );
} 