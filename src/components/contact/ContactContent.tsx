'use client';

import { SectionTitle } from '../common/SectionTitle';
import { ContactForm } from './ContactForm';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: '프로젝트는 얼마나 걸리나요?',
    answer: '프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 웹사이트 디자인은 4-8주, 브랜딩 프로젝트는 6-12주 정도 소요됩니다.',
  },
  {
    question: '디자인 프로세스는 어떻게 진행되나요?',
    answer: '브리핑 → 리서치 → 와이어프레임 → 디자인 → 피드백 → 전달 순으로 진행됩니다. 각 단계마다 고객과 충분한 소통을 통해 프로젝트를 발전시킵니다.',
  },
  {
    question: '수정은 몇 번까지 가능한가요?',
    answer: '계약된 범위 내에서 2-3회의 주요 수정이 가능하며, 세부적인 수정은 제한 없이 진행됩니다.',
  },
  {
    question: '디자인 파일은 어떤 형식으로 전달되나요?',
    answer: 'Figma 파일과 함께 필요한 에셋을 전달해드립니다. 개발팀과의 협업이 필요한 경우 추가 포맷도 제공 가능합니다.',
  },
];

export function ContactContent() {
  return (
    <div className="py-32">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <SectionTitle
          title="Let's talk about your project"
          subtitle="새로운 프로젝트에 대해 이야기를 나눠보세요"
        />

        {/* 연락처 폼 */}
        <div className="mb-24">
          <ContactForm />
        </div>

        {/* FAQ 섹션 */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 