'use client';

import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: FieldError;
  type?: 'text' | 'email' | 'select' | 'textarea';
  options?: { value: string; label: string }[];
}

export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, InputFieldProps>(
  ({ label, error, type = 'text', options, ...props }, ref) => {
    const baseClassName = "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";
    const normalClassName = "border-gray-line bg-white text-dark";
    const errorClassName = "border-red-500 bg-red-50";
    const className = `${baseClassName} ${error ? errorClassName : normalClassName}`;

    const renderInput = () => {
      switch (type) {
        case 'textarea':
          return (
            <textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              className={`${className} min-h-[120px] resize-y`}
              {...props}
            />
          );
        case 'select':
          return (
            <select
              ref={ref as React.RefObject<HTMLSelectElement>}
              className={className}
              {...props}
            >
              <option value="">선택해주세요</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          );
        default:
          return (
            <input
              ref={ref as React.RefObject<HTMLInputElement>}
              type={type}
              className={className}
              {...props}
            />
          );
      }
    };

    return (
      <div className="mb-6">
        <label className="block text-dark font-medium mb-2">
          {label}
        </label>
        {renderInput()}
        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error.message}
          </p>
        )}
      </div>
    );
  }
); 