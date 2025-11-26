import React, { useState } from 'react';
import { Menu, X, Github, Twitter, Dribbble } from 'lucide-react';
import { NeuButton, NeuIconBtn } from './NeuComponents';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neu-base/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-neu-text-primary tracking-tighter embossed-text">
          Lumina.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Demo', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-neu-text-secondary hover:text-neu-text-primary font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <NeuButton variant="primary" className="ml-4 text-sm px-6 py-2">
            Buy Now
          </NeuButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <NeuIconBtn 
            icon={isOpen ? <X /> : <Menu />} 
            onClick={() => setIsOpen(!isOpen)} 
            size="sm"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-neu-base shadow-neu-raised p-8 flex flex-col gap-6 animate-in slide-in-from-top-4">
           {['Features', 'Demo', 'Pricing', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-center py-4 rounded-2xl shadow-neu-flat active:shadow-neu-pressed text-neu-text-primary font-bold"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-neu-base relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-neu-text-tertiary/20 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h4 className="text-2xl font-bold text-neu-text-primary mb-6 embossed-text">Lumina.</h4>
            <p className="text-neu-text-secondary max-w-sm mb-8">
              Crafting digital experiences that feel physically real. 
              The intersection of skepticism, flat design, and modern depth.
            </p>
            <div className="flex gap-4">
              <NeuIconBtn icon={<Twitter size={20} />} size="sm" />
              <NeuIconBtn icon={<Github size={20} />} size="sm" />
              <NeuIconBtn icon={<Dribbble size={20} />} size="sm" />
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-neu-text-primary mb-6 uppercase tracking-wider text-sm">Product</h5>
            <ul className="space-y-4 text-neu-text-secondary">
              <li><a href="#" className="hover:text-neu-accent-blue transition">Download</a></li>
              <li><a href="#" className="hover:text-neu-accent-blue transition">Documentation</a></li>
              <li><a href="#" className="hover:text-neu-accent-blue transition">Changelog</a></li>
            </ul>
          </div>

          <div>
             <h5 className="font-bold text-neu-text-primary mb-6 uppercase tracking-wider text-sm">Legal</h5>
            <ul className="space-y-4 text-neu-text-secondary">
              <li><a href="#" className="hover:text-neu-accent-blue transition">Privacy</a></li>
              <li><a href="#" className="hover:text-neu-accent-blue transition">Terms</a></li>
              <li><a href="#" className="hover:text-neu-accent-blue transition">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-neu-text-tertiary/10">
          <p className="text-neu-text-tertiary text-sm">© 2024 Lumina UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-neu-base text-neu-text-primary selection:bg-neu-accent-blue/20 selection:text-neu-accent-blue font-sans">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
