import React, { useState } from 'react';
import { Sun, Wind, Thermometer, Power, Music, Wifi } from 'lucide-react';
import { NeuCard, NeuIconBtn, NeuButton } from './NeuComponents';

const ProductDemo = () => {
  const [temp, setTemp] = useState(72);
  const [brightness, setBrightness] = useState(80);
  const [activeTab, setActiveTab] = useState<'climate' | 'light'>('climate');
  const [isOn, setIsOn] = useState(true);

  return (
    <section className="py-24 bg-neu-base overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neu-text-primary embossed-text mb-4">Interactive Controls</h2>
          <p className="text-neu-text-secondary max-w-xl mx-auto">
            Interact with the elements below to feel the depth. <br/>
            Real-time state changes with soft, extruded animations.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl grid lg:grid-cols-12 gap-10">
            
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 space-y-8">
              <NeuCard className="flex flex-col items-center gap-8 h-full justify-center">
                 <div className="grid grid-cols-2 gap-6">
                   <NeuIconBtn 
                      icon={<Thermometer size={24} />} 
                      active={activeTab === 'climate'} 
                      onClick={() => setActiveTab('climate')}
                   />
                   <NeuIconBtn 
                      icon={<Sun size={24} />} 
                      active={activeTab === 'light'} 
                      onClick={() => setActiveTab('light')}
                   />
                   <NeuIconBtn icon={<Music size={24} />} />
                   <NeuIconBtn icon={<Wifi size={24} />} />
                 </div>
                 
                 <div className="w-full px-4">
                   <div className="h-[1px] w-full bg-neu-text-tertiary/20 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
                 </div>

                 <NeuButton 
                    className={`rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 ${isOn ? 'text-neu-accent-green shadow-neu-pressed' : 'text-red-400 shadow-neu-raised'}`}
                    onClick={() => setIsOn(!isOn)}
                 >
                    <Power size={32} />
                 </NeuButton>
                 <span className="text-sm font-semibold text-neu-text-secondary uppercase tracking-widest">
                    {isOn ? 'System On' : 'Standby'}
                 </span>
              </NeuCard>
            </div>

            {/* Main Panel */}
            <div className="lg:col-span-8">
              <NeuCard className="h-full relative overflow-hidden transition-all">
                {activeTab === 'climate' ? (
                  <div className="flex flex-col items-center justify-between h-full space-y-10 py-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-neu-text-primary mb-1">Living Room</h3>
                      <p className="text-neu-text-tertiary">Climate Control</p>
                    </div>

                    {/* Thermostat Dial Simulation */}
                    <div className="relative w-64 h-64 rounded-full shadow-neu-raised flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full shadow-neu-pressed flex items-center justify-center">
                         <div className="text-center">
                           <span className="block text-6xl font-bold text-neu-text-primary embossed-text">
                             {temp}°
                           </span>
                           <span className="text-sm text-neu-accent-blue font-semibold mt-2">COOLING</span>
                         </div>
                      </div>
                      
                      {/* Interactive ring dots */}
                      <div className="absolute w-full h-full rounded-full animate-spin-slow opacity-20 pointer-events-none border-4 border-dashed border-neu-text-secondary/30" />
                    </div>

                    <div className="flex items-center gap-8 w-full px-12">
                      <NeuIconBtn size="sm" icon={<span>-</span>} onClick={() => setTemp(t => t - 1)} />
                      <input 
                        type="range" 
                        min="60" 
                        max="85" 
                        value={temp}
                        onChange={(e) => setTemp(Number(e.target.value))}
                        className="flex-1 h-3 rounded-full bg-neu-base shadow-neu-pressed appearance-none cursor-pointer"
                      />
                      <NeuIconBtn size="sm" icon={<span>+</span>} onClick={() => setTemp(t => t + 1)} />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-between h-full space-y-10 py-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-neu-text-primary mb-1">Ambiance</h3>
                      <p className="text-neu-text-tertiary">Light Control</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full px-8">
                       {[1,2,3,4].map((i) => (
                         <NeuCard key={i} variant="inset" className="aspect-[4/3] flex flex-col items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition">
                            <div className={`w-3 h-3 rounded-full ${i === 2 ? 'bg-neu-accent-blue shadow-[0_0_10px_#6C7FDD]' : 'bg-neu-text-tertiary'}`} />
                            <span className="text-xs font-bold text-neu-text-secondary">Scene {i}</span>
                         </NeuCard>
                       ))}
                    </div>

                    <div className="w-full px-12 space-y-4">
                      <div className="flex justify-between text-sm font-bold text-neu-text-secondary">
                        <span>Dim</span>
                        <span>Bright</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                        className="w-full h-4 rounded-full bg-neu-base shadow-neu-pressed appearance-none cursor-pointer"
                      />
                      <div className="text-center font-mono text-neu-text-tertiary pt-2">{brightness}%</div>
                    </div>
                  </div>
                )}
              </NeuCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
