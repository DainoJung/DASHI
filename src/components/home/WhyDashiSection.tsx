'use client';

import { Lightbulb, Users, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface StrengthCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function StrengthCard({ title, description, icon }: StrengthCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl border border-gray-line"
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-mid">{description}</p>
    </motion.div>
  );
}

export function WhyDashiSection() {
  const strengths = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "창의적 사고",
      description: "차별화된 디자인으로 브랜드의 독창성을 높입니다."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "사용자 중심",
      description: "모든 디자인은 사용자 경험을 최우선으로 설계합니다."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "신속한 협업",
      description: "빠른 소통과 피드백으로 프로젝트를 효율적으로 진행합니다."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "개발 이해도",
      description: "디자인과 개발의 균형으로 구현 가능한 결과물을 제공합니다."
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why DASHI
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-mid max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            고객의 비즈니스 성장을 돕는 디자인 파트너로서 DASHI만의 강점을 소개합니다.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 