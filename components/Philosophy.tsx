import React from 'react';
import { Dumbbell, Target, Shield, RotateCcw } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="text-3xl md:text-4xl font-heading">
            THE LONGEVITY PHILOSOPHY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <PhilosophyItem 
            icon={<Dumbbell className="w-6 h-6" />}
            title="ABSOLUTE STRENGTH"
            description="Build functional power for the real world. Strength should give you freedom, not limits."
          />
          <PhilosophyItem 
            icon={<Target className="w-6 h-6" />}
            title="MENTAL CLARITY"
            description="A resilient body builds a resilient mind. Exercise is the ultimate tool for focus."
          />
          <PhilosophyItem 
            icon={<Shield className="w-6 h-6" />}
            title="HEALTH FOCUSED"
            description="Train smart, not just hard. Balance your load and nutrition to support long-term heart health."
          />
          <PhilosophyItem 
            icon={<RotateCcw className="w-6 h-6" />}
            title="DISCIPLINE FOREVER"
            description="Motivation is temporary; habit is permanent. Build a consistency that lasts a lifetime."
          />
        </div>
      </div>
    </section>
  );
};

const PhilosophyItem: React.FC<{ icon: React.ReactElement, title: string, description: string }> = ({ icon, title, description }) => {
  return (
    <div className="group space-y-6 cursor-default">
      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-gray-300 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black">
        {React.cloneElement(icon, { 
          className: "w-6 h-6 transition-colors duration-300" 
        })}
      </div>
      <h3 className="text-sm font-bold tracking-widest uppercase transition-colors duration-300 group-hover:text-yellow-400">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
        {description}
      </p>
    </div>
  );
};