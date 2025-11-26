import { ReactNode, MouseEventHandler } from 'react';

export type NeuVariant = 'raised' | 'inset' | 'flat';
export type NeuShape = 'rounded' | 'circle' | 'pill';

export interface NeuCardProps {
  children: ReactNode;
  variant?: NeuVariant;
  className?: string;
  onClick?: () => void;
  padding?: string;
}

export interface NeuButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
