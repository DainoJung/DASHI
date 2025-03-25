'use client';

import { Heart, Lightbulb, Users } from 'lucide-react';
import { AboutIntro } from './AboutIntro';
import { CoreValueItem } from './CoreValueItem';
import { WorkProcessVisual } from './WorkProcessVisual';
import { TestimonialHighlight } from './TestimonialHighlight';
import { SectionTitle } from '../common/SectionTitle';

const coreValues = [
  {
    icon: Lightbulb,
    title: '창의성',
    description: '혁신적인 아이디어로 독창적인 디자인 솔루션을 제시합니다.',
  },
  {
    icon: Users,
    title: '협업',
    description: '긴밀한 소통을 통해 최상의 결과물을 만들어냅니다.',
  },
  {
    icon: Heart,
    title: '열정',
    description: '디자인을 향한 끊임없는 열정으로 완성도를 높입니다.',
  },
];

export function AboutContent() {
  return (
    <div className="py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <SectionTitle
          title="About DASHI"
          subtitle="우리는 디자인을 통해 브랜드의 가치를 높입니다"
        />

        {/* 브랜드 철학 */}
        <div className="mb-24">
          <AboutIntro
            mainText="We design with purpose — balancing clarity, emotion, and usability."
            subText="사용자 중심의 디자인으로 브랜드와 사용자를 연결합니다"
          />
        </div>

        {/* 핵심 가치 */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">핵심 가치</h2>
            <p className="text-gray-mid">
              DASHI가 추구하는 가치입니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <CoreValueItem
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>

        {/* 작업 프로세스 */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">작업 프로세스</h2>
            <p className="text-gray-mid">
              체계적인 프로세스로 프로젝트를 진행합니다
            </p>
          </div>
          <WorkProcessVisual />
        </div>

        {/* 후기 하이라이트 */}
        <div className="mb-24">
          <TestimonialHighlight
            quote="DASHI와 함께한 프로젝트는 매우 만족스러웠습니다. 전문적인 디자인 능력과 원활한 커뮤니케이션으로 우리가 원하는 결과물을 완벽하게 구현해주었습니다."
            author="김서연"
            role="Product Manager"
            company="Tech Startup"
          />
        </div>
      </div>
    </div>
  );
} 