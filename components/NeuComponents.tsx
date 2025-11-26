import React, { useState } from 'react';
import { NeuCardProps, NeuButtonProps } from '../types';

export const NeuCard: React.FC<NeuCardProps> = ({ 
  children, 
  variant = 'raised', 
  className = '', 
  onClick,
  padding = 'p-8'
}) => {
  const getShadowClass = () => {
    switch (variant) {
      case 'raised': return 'shadow-neu-raised';
      case 'inset': return 'shadow-neu-pressed';
      case 'flat': return 'shadow-neu-flat';
      default: return 'shadow-neu-raised';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`
        bg-neu-base rounded-[30px] ${padding}
        ${getShadowClass()}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const NeuButton: React.FC<NeuButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon,
  fullWidth = false
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles = "relative font-semibold tracking-wide transition-all duration-200 ease-out rounded-[16px] flex items-center justify-center gap-2 select-none active:scale-[0.98]";
  
  const getVariantStyles = () => {
    // If manually pressed or clicked
    if (isPressed) {
      return "text-neu-accent-blue shadow-neu-pressed bg-neu-base";
    }

    switch (variant) {
      case 'primary':
        return "text-neu-text-primary shadow-neu-raised hover:shadow-neu-flat bg-neu-base";
      case 'accent':
        return "text-white shadow-neu-raised bg-neu-accent-blue hover:brightness-110";
      case 'secondary':
        return "text-neu-text-secondary shadow-neu-flat hover:shadow-neu-raised bg-neu-base";
      default:
        return "text-neu-text-primary shadow-neu-raised bg-neu-base";
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        ${baseStyles}
        ${getVariantStyles()}
        ${fullWidth ? 'w-full py-4' : 'px-8 py-3.5'}
        ${className}
      `}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

export const NeuIconBtn: React.FC<{ 
  icon: React.ReactNode; 
  onClick?: () => void; 
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  className?: string;
}> = ({ icon, onClick, size = 'md', active = false, className = '' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const sizeClass = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }[size];

  const shadowClass = (active || isPressed) ? 'shadow-neu-icon-pressed text-neu-accent-blue' : 'shadow-neu-icon-raised text-neu-text-secondary hover:text-neu-text-primary';

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        rounded-full flex items-center justify-center bg-neu-base
        transition-all duration-200 ease-out active:scale-95
        ${sizeClass}
        ${shadowClass}
        ${className}
      `}
    >
      {icon}
    </button>
  );
};

export const NeuInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className={`
        w-full bg-neu-base shadow-neu-pressed rounded-[16px] px-6 py-4
        text-neu-text-primary placeholder-neu-text-tertiary outline-none
        focus:ring-2 focus:ring-neu-accent-blue/20 transition-all
        ${props.className}
      `}
    />
  );
};

export const NeuBadge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'text-neu-accent-blue' }) => (
  <div className={`px-4 py-1.5 rounded-full shadow-neu-raised bg-neu-base text-xs font-bold uppercase tracking-wider ${color}`}>
    {children}
  </div>
);
