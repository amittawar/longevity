
import React from 'react';
import { ChevronRight, Play, Footprints, Flame, MapPin, Plus, User, BarChart3, Clock, FlameIcon, Trophy } from 'lucide-react';

interface PhoneMockupProps {
  screen: 'home' | 'onboarding' | 'workout-list' | 'timer-screen' | 'steps-tracking' | 'nutrition-log';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screen }) => {
  return (
    <div className="relative w-[300px] h-[600px] bg-[#111] rounded-[3rem] border-[8px] border-[#222] shadow-2xl overflow-hidden shadow-yellow-500/5">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>

      {/* Screen Content */}
      <div className="w-full h-full relative overflow-y-auto pt-8 pb-4">
        {renderScreen(screen)}
      </div>

      {/* Navigation Bar (Simulated) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-4">
        <NavIcon icon={<Trophy className="w-5 h-5" />} active={screen === 'workout-list'} />
        <NavIcon icon={<BarChart3 className="w-5 h-5" />} active={screen === 'steps-tracking'} />
        <NavIcon icon={<Plus className="w-5 h-5" />} active={screen === 'timer-screen'} />
        <NavIcon icon={<FlameIcon className="w-5 h-5" />} active={screen === 'nutrition-log'} />
        <NavIcon icon={<User className="w-5 h-5" />} active={screen === 'onboarding'} />
      </div>
    </div>
  );
};

const NavIcon: React.FC<{ icon: React.ReactNode, active?: boolean }> = ({ icon, active }) => (
  <div className={`p-2 transition-colors ${active ? 'text-yellow-400' : 'text-gray-500 hover:text-white'}`}>
    {icon}
  </div>
);

const renderScreen = (screen: string) => {
  switch (screen) {
    case 'onboarding':
      return (
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-black rounded-full"></div>
              </div>
              <span className="font-bold text-sm tracking-tighter">Longevity</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Welcome to Longevity</h3>
            <p className="text-gray-400 text-xs mb-8">Select the training styles that fits your lifestyle</p>

            <div className="space-y-4">
              <OnboardingCard
                icon={<Target className="text-yellow-400 w-4 h-4" />}
                title="Mind Over Matter Training System"
                desc="High-intensity gym workouts for strength and stamina."
              />
              <OnboardingCard
                icon={<User className="text-yellow-400 w-4 h-4" />}
                title="Longevity Training System"
                desc="Daily bodyweight routines to stay fit at home."
              />
            </div>
          </div>
          <button className="w-full py-3 bg-yellow-400 text-black rounded-xl text-sm font-bold mt-12">
            Continue
          </button>
        </div>
      );
    case 'workout-list':
      return (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Full Body</h3>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Stage 1/10</span>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 mb-6">
            <div className="text-xs text-gray-400 mb-2">Progress</div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 w-[30%]"></div>
            </div>
          </div>
          <div className="space-y-3">
            {['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white" />
                  </div>
                  <span className="text-sm font-semibold">{s}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      );
    case 'timer-screen':
      return (
        <div className="p-0">
          <div className="relative h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
            <img src="https://picsum.photos/400/300?grayscale" alt="exercise" className="absolute inset-0 object-cover opacity-50" />
            <div className="relative z-10 text-center">
              <div className="text-4xl font-bold mb-2">00:03</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-yellow-400">Wide Push ups</div>
            </div>
          </div>
          <div className="p-6">
            <button className="w-full py-4 bg-yellow-400 text-black font-bold rounded-full mb-6 text-sm">
              Complete Exercise
            </button>
            <div className="flex gap-4 mb-8">
              <button className="flex-1 py-3 bg-white/5 rounded-full text-xs font-bold">Skip</button>
              <button className="flex-1 py-3 bg-white/5 rounded-full text-xs font-bold">Pause</button>
            </div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Next Exercise</div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
              <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
              <div>
                <div className="text-xs font-bold">Pike Push-Ups</div>
                <div className="text-[10px] text-gray-500">15 reps</div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'steps-tracking':
      return (
        <div className="p-6">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Daily Target</div>
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364" strokeDashoffset="180" className="text-yellow-400" />
              </svg>
              <div className="text-center">
                <div className="text-2xl font-bold leading-none">4,000</div>
                <div className="text-[10px] text-gray-500 uppercase">Steps</div>
              </div>
            </div>
            <div className="mt-4 px-3 py-1 bg-yellow-400/10 text-yellow-400 text-[10px] font-bold rounded-full border border-yellow-400/20">
              Goal 10,000
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white/5 rounded-2xl flex items-center gap-3">
              <Flame className="w-4 h-4 text-orange-500" />
              <div>
                <div className="text-sm font-bold">120</div>
                <div className="text-[10px] text-gray-500">kcal</div>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-sm font-bold">2.4</div>
                <div className="text-[10px] text-gray-500">km</div>
              </div>
            </div>
          </div>
          <div className="h-24 flex items-end justify-between gap-1">
            {[30, 60, 45, 90, 40, 70, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }}>
                {i === 3 && <div className="h-full bg-yellow-400 rounded-t-sm"></div>}
              </div>
            ))}
          </div>
        </div>
      );
    case 'nutrition-log':
      return (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6">Nutrition</h3>
          <div className="bg-white/5 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-gray-400">Today's summary</div>
              <div className="text-[10px] px-2 py-0.5 bg-yellow-400 text-black rounded-full font-bold">Goal 2400 kcal</div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-3xl font-bold">370</div>
                <div className="text-xs text-gray-500">kcal consumed</div>
              </div>
              <div className="flex gap-4">
                <MacroItem label="P" val="12g" color="bg-blue-500" />
                <MacroItem label="C" val="45g" color="bg-green-500" />
                <MacroItem label="F" val="8g" color="bg-yellow-500" />
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">My Diet</div>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm font-bold">Chicken Breast (100g)</div>
                <div className="text-xs text-gray-500">165 kcal</div>
              </div>
              <div className="text-[10px] text-gray-500">P: 31g • C: 0g • F: 3.6g</div>
            </div>
            <button className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-bold">Add Food</span>
            </button>
          </div>
        </div>
      );
    default:
      return <div>Screen not found</div>;
  }
};

const OnboardingCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <div className="text-xs font-bold leading-tight mb-1">{title}</div>
      <div className="text-[10px] text-gray-500 leading-tight">{desc}</div>
    </div>
  </div>
);

const MacroItem: React.FC<{ label: string, val: string, color: string }> = ({ label, val, color }) => (
  <div className="text-center">
    <div className={`w-1 h-8 ${color} mx-auto mb-1 rounded-full opacity-50`}></div>
    <div className="text-[10px] font-bold text-gray-500 uppercase">{label}</div>
    <div className="text-[10px] font-bold">{val}</div>
  </div>
);

const Target: React.FC<any> = ({ className }) => <div className={className}><TargetIcon className="w-full h-full" /></div>;
const TargetIcon: React.FC<any> = ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
