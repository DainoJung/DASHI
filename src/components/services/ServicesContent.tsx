'use client';

import { ServiceCardLarge } from '@/components/services/ServiceCardLarge';
import { WorkflowSteps } from '@/components/services/WorkflowSteps';
import { PrimaryButton } from '@/components/common/buttons/PrimaryButton';
import { Layers, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'UI/UX 디자인',
    description: '사용자 중심의 직관적이고 매력적인 인터페이스를 설계합니다.',
    features: [
      '사용자 플로우 설계',
      '와이어프레임 제작',
      '프로토타입 제작',
      '반응형 디자인',
      '디자인 시스템 구축',
    ],
  },
  {
    icon: Smartphone,
    title: '앱 디자인',
    description: '모바일 환경에 최적화된 사용자 경험을 제공합니다.',
    features: [
      '네이티브 앱 디자인',
      '크로스 플랫폼 대응',
      '제스처 인터랙션',
      '앱 스토어 디자인',
      '프로토타입 테스트',
    ],
  },
  {
    icon: PenTool,
    title: '브랜드 디자인',
    description: '브랜드의 가치를 시각적으로 표현하고 일관된 아이덴티티를 구축합니다.',
    features: [
      '로고 디자인',
      '브랜드 가이드라인',
      '마케팅 디자인',
      '프로모션 디자인',
      '브랜드 스토리텔링',
    ],
  },
];

export function ServicesContent() {
  return (
    <div className="py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-bold text-dark mb-4">
            서비스
          </h1>
          <p className="text-gray-mid text-lg">
            DASHI는 디자인을 통해 브랜드의 가치를 높이고, 사용자에게 최적의 경험을 제공합니다.
            각 서비스는 고객의 니즈에 맞춰 맞춤형으로 제공됩니다.
          </p>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCardLarge
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* 작업 프로세스 섹션 */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              작업 프로세스
            </h2>
            <p className="text-gray-mid">
              체계적인 프로세스를 통해 프로젝트를 진행합니다
            </p>
          </div>
          <WorkflowSteps />
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-gray-light rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            프로젝트를 시작하시겠습니까?
          </h2>
          <p className="text-gray-mid mb-8">
            DASHI와 함께 성공적인 프로젝트를 만들어보세요
          </p>
          <PrimaryButton href="/project-inquiry" size="lg">
            프로젝트 문의하기
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
} 