import React from 'react';
import { Layout } from './components/Layout';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductDemo from './components/ProductDemo';
import { NeuCard, NeuButton, NeuInput, NeuBadge } from './components/NeuComponents';
import { Check } from 'lucide-react';

// Inline simple sections to keep file count managed, complex ones are separated

const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
       <NeuCard className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neu-text-tertiary/20">
          {[
            { label: 'Active Users', value: '120k+', color: 'text-neu-accent-blue' },
            { label: 'Components', value: '500+', color: 'text-neu-accent-purple' },
            { label: 'Satisfaction', value: '99%', color: 'text-neu-accent-green' },
          ].map((stat, i) => (
            <div key={i} className="py-4">
              <div className={`text-5xl font-bold mb-2 embossed-text ${stat.color}`}>{stat.value}</div>
              <div className="text-neu-text-secondary font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </div>
          ))}
       </NeuCard>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-neu-text-primary embossed-text mb-4">Simple Pricing</h2>
        <p className="text-neu-text-secondary">Start free, upgrade when you need tactility.</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          { name: 'Starter', price: '$0', feats: ['5 Projects', 'Basic Components', 'Community Support'] },
          { name: 'Pro', price: '$29', feats: ['Unlimited Projects', 'Advanced Animations', 'Priority Support', 'Figma Files'], popular: true },
          { name: 'Team', price: '$99', feats: ['Everything in Pro', 'Team Management', 'Custom Themes', 'SSO'] }
        ].map((tier, i) => (
          <NeuCard key={i} className={`relative flex flex-col h-full ${tier.popular ? 'transform md:-translate-y-4 z-10 border-2 border-neu-base' : ''}`}>
             {tier.popular && (
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <NeuBadge>Most Popular</NeuBadge>
               </div>
             )}
             <h3 className="text-xl font-bold text-neu-text-secondary mb-2">{tier.name}</h3>
             <div className="text-5xl font-bold text-neu-text-primary mb-8 embossed-text">{tier.price}<span className="text-lg text-neu-text-tertiary font-normal">/mo</span></div>
             
             <ul className="space-y-4 flex-1 mb-8">
               {tier.feats.map((feat, j) => (
                 <li key={j} className="flex items-center gap-3 text-neu-text-secondary">
                   <div className="p-1 rounded-full shadow-neu-pressed text-neu-accent-green">
                     <Check size={12} strokeWidth={4} />
                   </div>
                   {feat}
                 </li>
               ))}
             </ul>
             
             <NeuButton variant={tier.popular ? 'primary' : 'secondary'} fullWidth>
               Choose {tier.name}
             </NeuButton>
          </NeuCard>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-neu-base">
    <div className="container mx-auto px-6 max-w-2xl">
      <NeuCard className="text-center">
        <h2 className="text-3xl font-bold text-neu-text-primary embossed-text mb-8">Get in Touch</h2>
        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-sm font-bold text-neu-text-secondary ml-2">Name</label>
               <NeuInput placeholder="John Doe" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-bold text-neu-text-secondary ml-2">Email</label>
               <NeuInput placeholder="john@example.com" type="email" />
             </div>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-bold text-neu-text-secondary ml-2">Message</label>
             <textarea 
               className="w-full bg-neu-base shadow-neu-pressed rounded-[20px] px-6 py-4 text-neu-text-primary placeholder-neu-text-tertiary outline-none focus:ring-2 focus:ring-neu-accent-blue/20 transition-all min-h-[150px]"
               placeholder="Tell us about your project..."
             />
          </div>
          <NeuButton variant="primary" fullWidth className="mt-4">
            Send Message
          </NeuButton>
        </form>
      </NeuCard>
    </div>
  </section>
);

function App() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProductDemo />
      <PricingSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
