import React from 'react';
import { GoldDivider } from './GoldDivider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#C49A42] mb-2">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide ${
          light ? 'text-[#F8F1E5]' : 'text-[#321B11]'
        }`}
      >
        {title}
      </h2>
      <GoldDivider className={isCenter ? 'mx-auto' : 'mr-auto'} />
      {subtitle && (
        <p
          className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } ${light ? 'text-[#E9D9BA]/90' : 'text-[#7A685A]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
