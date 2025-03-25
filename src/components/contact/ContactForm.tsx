'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../common/InputField';
import { SuccessMessage } from './SuccessMessage';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const budgetOptions = [
  { value: '1000만원 미만', label: '1000만원 미만' },
  { value: '1000-3000만원', label: '1000-3000만원' },
  { value: '3000-5000만원', label: '3000-5000만원' },
  { value: '5000만원 이상', label: '5000만원 이상' },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // TODO: 실제 API 호출 구현
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <SuccessMessage
        title="감사합니다!"
        message="24시간 이내에 연락드리겠습니다."
      />
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <InputField
        label="이름"
        {...register('name', { required: '이름을 입력해주세요.' })}
        error={errors.name}
        placeholder="홍길동"
      />
      <InputField
        label="이메일"
        type="email"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '올바른 이메일 주소를 입력해주세요.',
          },
        })}
        error={errors.email}
        placeholder="example@email.com"
      />
      <InputField
        label="예산 범위 (선택)"
        type="select"
        options={budgetOptions}
        {...register('budget')}
        error={errors.budget}
      />
      <InputField
        label="프로젝트 내용"
        type="textarea"
        {...register('message', { required: '프로젝트 내용을 입력해주세요.' })}
        error={errors.message}
        placeholder="프로젝트에 대해 자세히 설명해주세요."
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-medium py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors"
      >
        문의하기
      </button>
    </motion.form>
  );
} 