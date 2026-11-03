import React from 'react';

interface GoldDividerProps {
  className?: string;
  withCrest?: boolean;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({ className = '', withCrest = true }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C49A42]/60 to-[#C49A42] flex-1 max-w-[120px]" />
      {withCrest ? (
        <div className="flex items-center gap-1 text-[#C49A42]">
          {/* Subtle 3-leaf crown/petal inspired by the ROYALORA crest */}
          <svg className="w-5 h-4 fill-current opacity-90" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C13 5 15 8 18 10C15 12 13 15 12 20C11 15 9 12 6 10C9 8 11 5 12 0Z" />
            <path d="M5 8C6 11 8 13 11 14C8 15 6 17 5 20C4 17 2 15 -1 14C2 13 4 11 5 8Z" transform="translate(1, -2) scale(0.6)" opacity="0.8" />
            <path d="M19 8C20 11 22 13 25 14C22 15 20 17 19 20C18 17 16 15 13 14C16 13 18 11 19 8Z" transform="translate(4, -2) scale(0.6)" opacity="0.8" />
          </svg>
        </div>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#C49A42]" />
      )}
      <div className="h-[1px] bg-gradient-to-l from-transparent via-[#C49A42]/60 to-[#C49A42] flex-1 max-w-[120px]" />
    </div>
  );
};
