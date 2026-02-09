
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { 
  Flame, 
  Target, 
  ShoppingBag, 
  ChefHat, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Activity,
  Heart,
  X,
  Smartphone,
  Zap,
  ClipboardList,
  HelpCircle,
  Globe
} from 'lucide-react';
import { UserProfile, CalculatedResults } from './types';
import { calculateResults } from './utils';
import { translations, Language } from './translations';

// --- Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <h3 className="text-xl font-black text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300 group">
    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-orange-500 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const QuickCalculator = ({ t }: { t: any }) => {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<UserProfile>({
    height: 175,
    weight: 70,
    age: 25,
    gender: 'male',
    activityLevel: 'normal',
    goal: 'recomp'
  });
  const [results, setResults] = useState<CalculatedResults | null>(null);

  const handleCalculate = () => {
    setResults(calculateResults(profile));
    setStep(2);
  };

  const handleStartApp = () => {
    window.location.href = 'https://commit-pod.vercel.app/';
  };
  const displayNumber = (value: number) => (value === 0 ? '' : value);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Activity size={120} className="text-orange-500" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="text-orange-500" />
          <span className="text-orange-500 font-bold tracking-wider uppercase text-xs">{t.calc.title}</span>
        </div>

        {step === 0 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black text-white leading-tight">{t.calc.step1Title}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-slate-500 mb-1 block uppercase tracking-widest font-bold">{t.calc.height}</label>
                <input 
                  type="number" 
                  value={displayNumber(profile.height)}
                  onChange={e =>
                    setProfile({
                      ...profile,
                      height: e.target.value === '' ? 0 : Number(e.target.value),
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="text-[10px] text-slate-500 mb-1 block uppercase tracking-widest font-bold">{t.calc.weight}</label>
                <input 
                  type="number" 
                  value={displayNumber(profile.weight)}
                  onChange={e =>
                    setProfile({
                      ...profile,
                      weight: e.target.value === '' ? 0 : Number(e.target.value),
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <button 
              onClick={() => setStep(1)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
            >
              {t.calc.next} <ChevronRight size={20} />
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <h2 className="text-2xl font-black text-white">{t.calc.goalTitle}</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'bulk', icon: TrendingUp, data: t.calc.goals.bulk },
                { id: 'recomp', icon: Heart, data: t.calc.goals.recomp },
                { id: 'cut', icon: Flame, data: t.calc.goals.cut },
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setProfile({...profile, goal: g.id as any})}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${profile.goal === g.id ? 'bg-orange-500/10 border-orange-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                >
                  <div className="flex items-center gap-4">
                    <g.icon size={20} />
                    <div className="text-left">
                      <p className="font-bold leading-none">{g.data.label}</p>
                      <p className="text-[10px] opacity-50 uppercase tracking-widest mt-1">{g.data.sub}</p>
                    </div>
                  </div>
                  {profile.goal === g.id && <CheckCircle2 size={18} className="text-orange-500" />}
                </button>
              ))}
            </div>
            <button 
              onClick={handleCalculate}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              {t.calc.calcBtn}
            </button>
          </div>
        )}

        {step === 2 && results && (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <div className="text-center">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{t.calc.resultTitle}</p>
              <h2 className="text-5xl font-black text-white tracking-tighter">{results.targetCalories} <span className="text-lg font-normal text-slate-400 italic">kcal</span></h2>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: t.calc.protein, val: results.p, color: 'text-blue-400' },
                { label: t.calc.fat, val: results.f, color: 'text-red-400' },
                { label: t.calc.carb, val: results.c, color: 'text-green-400' },
              ].map(item => (
                <div key={item.label} className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700/50">
                  <p className={`text-[10px] ${item.color} font-black mb-1 tracking-widest uppercase truncate`}>{item.label}</p>
                  <p className="text-xl font-black text-white">{item.val}g</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl flex items-start gap-3">
              <Zap className="text-orange-500 shrink-0 mt-1" size={18} />
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.calc.pwaHint}
              </p>
            </div>

            <button 
              onClick={handleStartApp}
              className="w-full bg-white text-slate-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all scale-105 shadow-xl group/btn"
            >
              {t.calc.pwaCta} <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const LanguageSwitcher = ({ current, onChange }: { current: Language, onChange: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const langs: { id: Language, label: string }[] = [
    { id: 'ja', label: '日本語' },
    { id: 'en', label: 'English' },
    { id: 'id', label: 'Indonesia' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'it', label: 'Italiano' },
    { id: 'es', label: 'Español' },
    { id: 'pt', label: 'Português' },
    { id: 'ko', label: '한국어' },
    { id: 'zh', label: '中文' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full hover:border-orange-500 transition-colors"
      >
        <Globe size={14} className="text-orange-500" />
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{current}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-[100] grid grid-cols-1 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)}></div>
          {langs.map(l => (
            <button
              key={l.id}
              onClick={() => { onChange(l.id); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-xs font-bold transition-colors ${current === l.id ? 'text-orange-500 bg-orange-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [isHowToModalOpen, setIsHowToModalOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ja');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as Language;
    if (translations[browserLang]) {
      setLang(browserLang);
    }
  }, []);

  const t = translations[lang];

  const handleStartApp = () => {
    window.location.href = 'https://commit-pod.vercel.app/';
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-[80] bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <Flame className="text-white fill-current" size={20} />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">COMMIT POT</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsHowToModalOpen(true)}
              className="text-slate-400 hover:text-white text-xs font-bold transition-colors hidden sm:block"
            >
              {t.nav.howTo}
            </button>
            <LanguageSwitcher current={lang} onChange={setLang} />
            <button 
              onClick={handleStartApp}
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-black px-5 py-2.5 rounded-full transition-all shadow-lg shadow-orange-500/20"
            >
              {t.nav.startApp}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-orange-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800/50 rounded-full border border-slate-700 mb-6">
                <Smartphone size={14} className="text-orange-500" />
                <span className="text-xs font-bold text-orange-400">{t.hero.pwaBadge}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                {t.hero.title}<br />
                <span className="gradient-text">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleStartApp}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30 group"
                >
                  <Flame size={24} className="group-hover:animate-bounce" /> {t.hero.ctaStart}
                </button>
                <button 
                  onClick={() => setIsHowToModalOpen(true)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 border border-slate-700 transition-all hover:border-slate-500"
                >
                  {t.hero.ctaHowTo}
                </button>
              </div>
            </div>

            <div className="relative">
              <QuickCalculator t={t} />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-3 animate-in fade-in slide-in-from-left duration-1000 delay-500">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">PFC COMPLETED!</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Stay committed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-slate-950 px-4 py-24 border-y border-slate-900">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">{t.features.title}</h2>
            <p className="text-slate-400 font-medium">{t.features.subtitle}</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Target} title={t.features.pfcTitle} description={t.features.pfcDesc} />
            <FeatureCard icon={Flame} title={t.features.nabeTitle} description={t.features.nabeDesc} />
            <FeatureCard icon={ShoppingBag} title={t.features.listTitle} description={t.features.listDesc} />
            <FeatureCard icon={ChefHat} title={t.features.cookTitle} description={t.features.cookDesc} />
          </div>
        </section>

        {/* HOW TO COMMIT Section */}
        <section className="px-4 py-24 bg-nabe-gradient">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase tracking-tighter">{t.howTo.title}</h2>
              <p className="text-slate-400 font-medium">{t.howTo.subtitle}</p>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800 -z-10"></div>
              {[
                { step: "01", icon: Activity, ...t.howTo.step1 },
                { step: "02", icon: ClipboardList, ...t.howTo.step2 },
                { step: "03", icon: ShoppingBag, ...t.howTo.step3 },
                { step: "04", icon: Zap, ...t.howTo.step4 },
              ].map((s, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center shrink-0 group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all">
                    <s.icon size={20} className="text-orange-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                      <span className="text-xs font-black text-orange-500 opacity-50 tracking-widest">{s.step}</span>
                      {s.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Links Mock */}
        <section className="px-4 py-24 border-t border-slate-900">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-orange-500 font-black tracking-widest uppercase text-xs mb-8">Get Started Now</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight">COMMIT TO YOUR GOAL</h2>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={handleStartApp}
                className="w-full max-w-sm bg-white text-slate-900 font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all shadow-2xl"
              >
                {t.calc.pwaCta}
              </button>
              
              <div className="flex flex-col md:flex-row items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                <div className="bg-slate-800 px-6 py-2 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold">Coming Soon</p>
                    <p className="font-black text-sm">App Store</p>
                  </div>
                </div>
                <div className="bg-slate-800 px-6 py-2 rounded-xl border border-slate-700 flex items-center gap-3">
                  <Smartphone size={24} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold">Coming Soon</p>
                    <p className="font-black text-sm">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-24 max-w-3xl mx-auto border-t border-slate-900">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="text-orange-500" size={32} />
            <h2 className="text-3xl font-black text-white text-center">{t.faq.title}</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 }
            ].map((f, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700 p-6 rounded-2xl hover:border-slate-500 transition-colors">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-orange-500 font-black">Q.</span> {f.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-6 border-l-2 border-slate-700">
                  <span className="text-slate-500 font-bold mr-2">A.</span> {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="bg-orange-500 p-1.5 rounded-lg shadow-lg shadow-orange-500/20">
                <Flame className="text-white fill-current" size={24} />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">COMMIT POT</span>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              {t.footer.desc}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm font-bold text-center md:text-right">
            <div className="space-y-4">
              <h4 className="text-white text-xs uppercase tracking-widest opacity-50">App</h4>
              <p><a href="https://commit-pod.vercel.app/" className="text-slate-400 hover:text-white transition-colors">{t.nav.startApp}</a></p>
              <p><a href="#" className="text-slate-400 hover:text-white transition-colors">{t.nav.howTo}</a></p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs uppercase tracking-widest opacity-50">Legal</h4>
              <p><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a></p>
              <p><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a></p>
            </div>
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-white text-xs uppercase tracking-widest opacity-50">Follow</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <Activity size={16} />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <Heart size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full px-6 md:hidden z-[90]">
        <button 
          onClick={handleStartApp}
          className="w-full bg-orange-500 text-white font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 text-lg active:scale-95 transition-transform"
        >
          {t.calc.pwaCta} <ArrowRight size={20} />
        </button>
      </div>

      {/* --- Modals --- */}
      <Modal 
        isOpen={isHowToModalOpen} 
        onClose={() => setIsHowToModalOpen(false)} 
        title={t.nav.howTo}
      >
        <div className="space-y-8">
          {[
            { step: "Step 1", title: t.howTo.step1.title, desc: t.howTo.step1.desc, icon: Target },
            { step: "Step 2", title: t.howTo.step2.title, desc: t.howTo.step2.desc, icon: Activity },
            { step: "Step 3", title: t.howTo.step3.title, desc: t.howTo.step3.desc, icon: ClipboardList },
            { step: "Step 4", title: t.howTo.step4.title, desc: t.howTo.step4.desc, icon: ChefHat }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="bg-orange-500/10 p-3 rounded-2xl h-fit border border-orange-500/20">
                <item.icon className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{item.step}</p>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => { setIsHowToModalOpen(false); handleStartApp(); }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl mt-4 transition-colors shadow-lg shadow-orange-500/20"
          >
            {t.calc.pwaCta}
          </button>
        </div>
      </Modal>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
