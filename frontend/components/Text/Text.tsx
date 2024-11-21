// frontend/components/Text.tsx
import React from 'react';

type TextProps = {
  children: React.ReactNode; 
  className?: string; 
  as?: keyof JSX.IntrinsicElements; 
};

const Text = ({ children, className = '', as: Tag = 'p' }: TextProps) => {
  return <Tag className={className}>{children}</Tag>;
};

export default Text;

