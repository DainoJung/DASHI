'use client';

import { ClipboardList, Palette, Lightbulb, Send } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: '브리핑',
    description: '프로젝트의 목표, 요구사항, 일정 등을 상세히 파악합니다.',
  },
  {
    icon: Lightbulb,
    title: '기획',
    description: '사용자 경험을 중심으로 서비스의 구조와 흐름을 설계합니다.',
  },
  {
    icon: Palette,
    title: '디자인',
    description: '브랜드 아이덴티티를 반영한 시각적 디자인을 완성합니다.',
  },
  {
    icon: Send,
    title: '전달',
    description: '최종 산출물을 전달하고 필요시 개발팀과 협업합니다.',
  },
];

export function WorkflowSteps() {
  return (
    <div className="relative">
      {/* 연결선 */}
      <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-line md:top-1/2 md:-translate-y-1/2" />

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4 relative z-10">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-gray-mid">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
} 