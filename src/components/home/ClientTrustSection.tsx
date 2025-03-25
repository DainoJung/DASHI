'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <motion.div 
      className="text-center p-6 bg-white rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-mid">{label}</div>
    </motion.div>
  );
}

export function ClientTrustSection() {
  // 클라이언트 로고 - 실제 로고 이미지로 대체하세요
  const clientLogos = [
    { name: "클라이언트 1", logo: "C1" },
    { name: "클라이언트 2", logo: "C2" },
    { name: "클라이언트 3", logo: "C3" },
    { name: "클라이언트 4", logo: "C4" },
    { name: "클라이언트 5", logo: "C5" },
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            신뢰할 수 있는 파트너
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-mid max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            많은 기업들이 DASHI와 함께 성공적인 디자인 여정을 걸어왔습니다
          </motion.p>
        </div>
        
        {/* 통계 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard number="120+" label="완료된 프로젝트" />
          <StatCard number="98%" label="고객 만족도" />
          <StatCard number="45+" label="장기 협력 파트너" />
        </div>
        
        {/* 클라이언트 로고 영역 */}
        <motion.div 
          className="bg-white rounded-xl p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-dark">함께한 기업들</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 flex items-center justify-center rounded-lg bg-gray-light text-gray-mid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 