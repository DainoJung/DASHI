'use client';

import { ClipboardList, FileText, Palette, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: ClipboardList,
    title: '브리핑',
    description: '프로젝트의 목표와 요구사항을 명확히 파악합니다.',
  },
  {
    icon: FileText,
    title: '와이어프레임',
    description: '사용자 중심의 구조와 흐름을 설계합니다.',
  },
  {
    icon: Palette,
    title: '디자인',
    description: '브랜드 아이덴티티를 반영한 디자인을 완성합니다.',
  },
  {
    icon: Send,
    title: '전달',
    description: '최종 산출물을 전달하고 피드백을 반영합니다.',
  },
];

export function WorkProcessVisual() {
  return (
    <div className="relative">
      {/* 연결선 */}
      <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-line md:top-1/2 md:-translate-y-1/2" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4 relative z-10">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-sm text-gray-mid">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 