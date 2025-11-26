import React from 'react';
import { Layers, Zap, Eye, MousePointer } from 'lucide-react';
import { NeuCard } from './NeuComponents';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Depth Perception",
    description: "Interfaces that mimic real-world lighting to create a sense of hierarchy and focus.",
    icon: <Layers size={28} className="text-neu-accent-purple" />
  },
  {
    title: "Instant Response",
    description: "Tactile feedback on every interaction ensures users know exactly what they've touched.",
    icon: <Zap size={28} className="text-neu-accent-blue" />
  },
  {
    title: "Soft Focus",
    description: "Reduced contrast minimizes eye strain while maintaining perfect legibility.",
    icon: <Eye size={28} className="text-neu-accent-green" />
  },
  {
    title: "Micro-Interactions",
    description: "Subtle state changes that guide the user through their journey effortlessly.",
    icon: <MousePointer size={28} className="text-neu-accent-pink" />
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-neu-base relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <NeuCard 
              key={idx} 
              className="group hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start gap-6"
            >
              <div className="w-16 h-16 rounded-full shadow-neu-icon-raised flex items-center justify-center bg-neu-base group-hover:shadow-neu-icon-pressed transition-shadow duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-neu-text-primary mb-3 embossed-text">{feature.title}</h3>
                <p className="text-neu-text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </NeuCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
