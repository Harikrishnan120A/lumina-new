import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { NeuButton, NeuCard, NeuIconBtn } from './NeuComponents';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-neu-accent-blue/10 to-transparent blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block">
            <div className="px-6 py-2 rounded-full shadow-neu-pressed bg-neu-base text-neu-accent-blue text-sm font-semibold tracking-wider uppercase">
              v2.0 Released
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-neu-text-primary embossed-text leading-tight">
            Digital <br />
            <span className="text-neu-text-secondary">Tactility.</span>
          </h1>
          
          <p className="text-xl text-neu-text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience the next evolution of interface design. Soft, physical, and deeply immersive interactions that feel real.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <NeuButton variant="accent" icon={<ArrowRight size={20} />}>
              Get Started
            </NeuButton>
            <NeuButton variant="secondary" icon={<Play size={20} />}>
              Watch Demo
            </NeuButton>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative transform lg:translate-x-12">
          <NeuCard className="relative z-20 aspect-square flex flex-col items-center justify-center overflow-hidden">
            {/* Abstract UI Composition */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-8 w-3/4">
               <NeuCard variant="inset" className="aspect-square flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full shadow-neu-raised bg-neu-base animate-pulse" />
               </NeuCard>
               <NeuCard className="aspect-square flex items-center justify-center">
                  <NeuIconBtn icon={<div className="w-6 h-6 rounded bg-neu-accent-purple" />} size="lg" />
               </NeuCard>
               <NeuCard className="col-span-2 p-6 flex items-center gap-4">
                  <div className="h-2 w-full bg-neu-base shadow-neu-pressed rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-neu-accent-blue shadow-neu-raised rounded-full" />
                  </div>
                  <div className="text-sm font-bold text-neu-text-secondary">67%</div>
               </NeuCard>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-8 -left-8 z-30">
              <NeuCard className="py-4 px-6 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="text-sm font-bold text-neu-text-secondary">System Active</span>
              </NeuCard>
            </div>
          </NeuCard>
          
          {/* Decorative Backdrops */}
          <div className="absolute -top-10 -right-10 w-full h-full rounded-[40px] border border-white/20 z-0 opacity-40 transform rotate-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
