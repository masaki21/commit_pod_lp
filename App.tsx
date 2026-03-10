
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
import {
  getWebAppUrl,
  trackCalcCompleted,
  trackCalcStepAdvanced,
  trackHowToOpened,
  trackLanguageChanged,
  trackStartAppClicked,
} from './analytics';
import heroBanner from './assets/Professional_feature_graphic_banner_for_a_fitness_-1770782635461.jpg';

// --- Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white border border-amber-200 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="p-6 border-b border-amber-100 flex justify-between items-center bg-[#fffaf0]">
          <h3 className="text-xl font-black text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-amber-100 rounded-full transition-colors text-slate-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto text-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-3xl border-4 text-center border-amber-100 hover:border-red-400 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
    <div className="w-16 h-16 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-red-500 w-8 h-8" />
    </div>
    <h3 className="text-xl font-black mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 text-sm font-bold leading-relaxed">{description}</p>
  </div>
);

const QuickCalculator = ({ t, lang }: { t: any, lang: Language }) => {
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
    trackCalcCompleted(lang, profile.goal);
    setStep(2);
  };

  const handleStartApp = () => {
    trackStartAppClicked(lang, 'quick_calculator');
    window.location.href = getWebAppUrl();
  };
  const displayNumber = (value: number) => (value === 0 ? '' : value);

  return (
    <div className="bg-white border-2 border-amber-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Activity size={120} className="text-red-500" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="text-red-500" />
          <span className="text-red-500 font-bold tracking-wider uppercase text-xs">{t.calc.title}</span>
        </div>

        {step === 0 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black text-slate-900 leading-tight">{t.calc.step1Title}</h2>
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
                  className="w-full bg-[#fffaf0] border border-amber-200 rounded-xl p-3 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400"
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
                  className="w-full bg-[#fffaf0] border border-amber-200 rounded-xl p-3 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400"
                />
              </div>
            </div>
            <button
              onClick={() => {
                trackCalcStepAdvanced(lang);
                setStep(1);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-500/20 hover:-translate-y-1"
            >
              {t.calc.next} <ChevronRight size={20} />
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <h2 className="text-2xl font-black text-slate-900">{t.calc.goalTitle}</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'bulk', icon: TrendingUp, data: t.calc.goals.bulk },
                { id: 'recomp', icon: Heart, data: t.calc.goals.recomp },
                { id: 'cut', icon: Flame, data: t.calc.goals.cut },
              ].map(g => (
                <button
                  key={g.id}
                  onClick={() => setProfile({ ...profile, goal: g.id as any })}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${profile.goal === g.id ? 'bg-red-50 border-red-500 text-red-600' : 'bg-white border-amber-100 text-slate-600 hover:border-red-300'}`}
                >
                  <div className="flex items-center gap-4">
                    <g.icon size={20} />
                    <div className="text-left">
                      <p className="font-bold leading-none">{g.data.label}</p>
                      <p className="text-[10px] opacity-70 uppercase tracking-widest mt-1">{g.data.sub}</p>
                    </div>
                  </div>
                  {profile.goal === g.id && <CheckCircle2 size={18} className="text-red-500" />}
                </button>
              ))}
            </div>
            <button
              onClick={handleCalculate}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg shadow-red-500/20"
            >
              {t.calc.calcBtn}
            </button>
          </div>
        )}

        {step === 2 && results && (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <div className="text-center">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{t.calc.resultTitle}</p>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">{results.targetCalories} <span className="text-lg font-bold text-slate-500 italic">kcal</span></h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: t.calc.protein, val: results.p, color: 'text-blue-500' },
                { label: t.calc.fat, val: results.f, color: 'text-red-500' },
                { label: t.calc.carb, val: results.c, color: 'text-green-500' },
              ].map(item => (
                <div key={item.label} className="bg-[#fffaf0] p-4 rounded-xl text-center border-2 border-amber-100">
                  <p className={`text-[10px] ${item.color} font-black mb-1 tracking-widest uppercase truncate`}>{item.label}</p>
                  <p className="text-xl font-black text-slate-900">{item.val}g</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-xl flex items-start gap-3">
              <Zap className="text-amber-500 shrink-0 mt-1" size={18} />
              <p className="text-xs text-slate-700 font-bold leading-relaxed">
                {t.calc.pwaHint}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <a
                href="https://apps.apple.com/us/app/commitpot/id6758933531"
                className="flex-1 bg-slate-900 border-2 border-slate-800 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 hover:border-blue-400 hover:scale-105 transition-all shadow-lg"
              >
                <Smartphone size={18} /> App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
                target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-slate-900 border-2 border-slate-800 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 hover:border-green-400 hover:scale-105 transition-all shadow-lg"
              >
                <Smartphone size={18} /> Google Play
              </a>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handleStartApp}
                className="text-xs text-slate-400 font-bold underline hover:text-slate-600 transition-colors"
              >
                {t.hero.ctaWeb}
              </button>
            </div>
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
        className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-amber-200 rounded-full hover:border-red-400 transition-colors shadow-sm"
      >
        <Globe size={14} className="text-red-500" />
        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{current}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white border-2 border-amber-100 rounded-xl shadow-2xl py-2 z-[100] grid grid-cols-1 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)}></div>
          {langs.map(l => (
            <button
              key={l.id}
              onClick={() => { onChange(l.id); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-xs font-bold transition-colors ${current === l.id ? 'text-red-600 bg-red-50' : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'}`}
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

  const openHowToModal = (source: 'header' | 'hero') => {
    trackHowToOpened(lang, source);
    setIsHowToModalOpen(true);
  };

  const handleLanguageChange = (nextLang: Language) => {
    trackLanguageChanged(lang, nextLang);
    setLang(nextLang);
  };

  const handleStartApp = (source: Parameters<typeof trackStartAppClicked>[1]) => {
    trackStartAppClicked(lang, source);
    window.location.href = getWebAppUrl();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-[80] bg-[#fffaf0]/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg">
              <Flame className="text-white fill-current" size={20} />
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900">COMMIT POT</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openHowToModal('header')}
              className="text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors hidden sm:block"
            >
              {t.nav.howTo}
            </button>
            <LanguageSwitcher current={lang} onChange={handleLanguageChange} />
            <div className="hidden sm:flex gap-2">
              <a
                href="https://apps.apple.com/us/app/commitpot/id6758933531"
                className="bg-slate-900 hover:bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <Smartphone size={16} />
                <span className="text-[10px] font-black tracking-wider">iOS</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
                target="_blank" rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                <Smartphone size={16} />
                <span className="text-[10px] font-black tracking-wider">Android</span>
              </a>
            </div>
            {/* Mobile PWA button fallback */}
            <button
              onClick={() => handleStartApp('header')}
              className="sm:hidden bg-red-500 hover:bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full transition-all shadow-lg shadow-red-500/20"
            >
              {t.nav.startApp}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative px-4 pt-12 pb-24 overflow-hidden bg-[#fffaf0]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-red-400/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {t.hero.pwaBadge && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border-2 border-amber-200 mb-6 shadow-sm">
                  <Smartphone size={14} className="text-red-500" />
                  <span className="text-xs font-black text-red-500">{t.hero.pwaBadge}</span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.2] lg:leading-[1.1] mb-6 tracking-tight">
                {t.hero.title}<br />
                <span className="text-red-500 block mt-2 text-3xl sm:text-4xl lg:text-6xl">{t.hero.titleAccent}</span>
              </h1>
              <img
                src={heroBanner}
                alt="Commit Pot preview"
                width={1200}
                height={669}
                loading="eager"
                decoding="async"
                className="w-full max-w-xl mx-auto lg:mx-0 rounded-3xl border-4 border-white shadow-2xl shadow-red-500/10 mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <p className="text-lg text-slate-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-bold">
                {t.hero.subtitle}
              </p>

              {/* Store Downloads (Main CTA) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center">
                <a
                  href="https://apps.apple.com/us/app/commitpot/id6758933531"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 border-2 border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 hover:border-blue-400 transition-all shadow-xl group"
                >
                  <Smartphone className="text-white group-hover:text-blue-400 transition-colors" size={32} />
                  <div className="text-left text-white leading-tight">
                    <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Download on the</p>
                    <p className="font-black text-lg">App Store</p>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 border-2 border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 hover:border-green-400 transition-all shadow-xl group"
                >
                  <Smartphone className="text-white group-hover:text-green-400 transition-colors" size={32} />
                  <div className="text-left text-white leading-tight">
                    <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">GET IT ON</p>
                    <p className="font-black text-lg">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Secondary Actions (Web & HowTo) */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-6 items-center">
                <button
                  onClick={() => openHowToModal('hero')}
                  className="text-slate-500 text-sm font-bold underline hover:text-red-500 transition-colors"
                >
                  {t.hero.ctaHowTo}
                </button>
                <button
                  onClick={() => handleStartApp('hero')}
                  className="text-slate-400 text-xs font-bold hover:text-slate-700 transition-colors"
                >
                  {t.hero.ctaWeb}
                </button>
              </div>

            </div>

            <div className="relative mt-8 lg:mt-0">
              <QuickCalculator t={t} lang={lang} />
              <div className="absolute -bottom-6 -left-6 bg-white border-4 border-amber-100 p-4 rounded-3xl shadow-2xl hidden md:flex items-center gap-3 animate-in fade-in slide-in-from-left duration-1000 delay-500 transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800 leading-tight">PFC COMPLETED!</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Stay committed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-amber-50 px-4 py-24 border-y-4 border-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 uppercase">{t.features.title}</h2>
            <p className="text-slate-600 font-bold">{t.features.subtitle}</p>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={Target} title={t.features.pfcTitle} description={t.features.pfcDesc} />
            <FeatureCard icon={Flame} title={t.features.nabeTitle} description={t.features.nabeDesc} />
            <FeatureCard icon={ShoppingBag} title={t.features.listTitle} description={t.features.listDesc} />
            <FeatureCard icon={ChefHat} title={t.features.cookTitle} description={t.features.cookDesc} />
          </div>
        </section>

        {/* HOW TO COMMIT Section */}
        <section className="px-4 py-24 bg-[#fffaf0]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 italic uppercase tracking-tighter">{t.howTo.title}</h2>
              <p className="text-slate-600 font-bold">{t.howTo.subtitle}</p>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-6 top-4 bottom-4 w-1 bg-amber-100 -z-10 rounded-full"></div>
              {[
                { step: "01", icon: Activity, ...t.howTo.step1 },
                { step: "02", icon: ClipboardList, ...t.howTo.step2 },
                { step: "03", icon: ShoppingBag, ...t.howTo.step3 },
                { step: "04", icon: Zap, ...t.howTo.step4 },
              ].map((s, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-amber-200 flex items-center justify-center shrink-0 group-hover:border-red-400 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all">
                    <s.icon size={20} className="text-red-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-black text-slate-800 mb-2 flex items-center gap-3">
                      <span className="text-xs font-black text-red-500 opacity-80 tracking-widest">{s.step}</span>
                      {s.title}
                    </h3>
                    <p className="text-slate-600 font-bold leading-relaxed text-sm md:text-base">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Store Links Mock */}
        <section className="px-4 py-24 border-t-4 border-white bg-amber-50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-500 font-black tracking-widest uppercase text-xs mb-8">Get Started Now</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-10 tracking-tight">COMMIT TO YOUR GOAL</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/commitpot/id6758933531"
                target="_blank" rel="noopener noreferrer"
                className="w-full max-w-xs bg-slate-900 border-2 border-slate-800 px-6 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:border-blue-400 transition-all shadow-2xl group"
              >
                <Smartphone className="text-white group-hover:text-blue-400 transition-colors" size={36} />
                <div className="text-left text-white leading-tight">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Download on the</p>
                  <p className="font-black text-xl">App Store</p>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
                target="_blank" rel="noopener noreferrer"
                className="w-full max-w-xs bg-slate-900 border-2 border-slate-800 px-6 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:border-green-400 transition-all shadow-2xl group"
              >
                <Smartphone className="text-white group-hover:text-green-400 transition-colors" size={36} />
                <div className="text-left text-white leading-tight">
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">GET IT ON</p>
                  <p className="font-black text-xl">Google Play</p>
                </div>
              </a>
            </div>

            <button
              onClick={() => handleStartApp('store_section')}
              className="mt-8 text-slate-500 text-sm font-bold underline hover:text-red-500 transition-colors"
            >
              {t.hero.ctaWeb}
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-24 max-w-3xl mx-auto border-t-4 border-white">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="text-red-500" size={32} />
            <h2 className="text-3xl font-black text-slate-800 text-center">{t.faq.title}</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 }
            ].map((f, i) => (
              <div key={i} className="bg-white border-2 border-amber-100 p-6 rounded-2xl hover:border-red-300 transition-colors shadow-sm">
                <h3 className="font-black text-slate-800 mb-2 flex items-center gap-2">
                  <span className="text-red-500 font-black">Q.</span> {f.q}
                </h3>
                <p className="text-slate-600 text-sm font-bold leading-relaxed pl-6 border-l-4 border-amber-100">
                  <span className="text-amber-500 font-black mr-2">A.</span> {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fffaf0] border-t-4 border-amber-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="bg-red-500 p-1.5 rounded-lg shadow-lg shadow-red-500/20">
                <Flame className="text-white fill-current" size={24} />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900">COMMIT POT</span>
            </div>
            <p className="text-slate-600 font-bold text-sm max-w-md">
              {t.footer.desc}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center gap-6">
            <div className="flex items-center gap-8 text-sm font-black">
              <a href={getWebAppUrl()} onClick={() => trackStartAppClicked(lang, 'footer')} className="text-slate-700 hover:text-red-500 transition-colors">{t.nav.startApp}</a>
              <a href="#" className="text-slate-700 hover:text-red-500 transition-colors">{t.nav.howTo}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile (App Stores) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full px-4 md:hidden z-[90]">
        <div className="flex gap-2">
          <a
            href="https://apps.apple.com/us/app/commitpot/id6758933531"
            target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-slate-900 border-2 border-slate-800 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
          >
            <Smartphone size={20} /> App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
            target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-slate-900 border-2 border-slate-800 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
          >
            <Smartphone size={20} /> Google Play
          </a>
        </div>
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
              <div className="bg-red-50 p-3 rounded-2xl h-fit border-2 border-red-100">
                <item.icon className="text-red-500" size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">{item.step}</p>
                <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
                <p className="text-slate-600 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="https://apps.apple.com/us/app/commitpot/id6758933531"
              className="w-full bg-slate-900 border-2 border-slate-800 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:border-blue-400 hover:scale-105 transition-all shadow-lg text-lg"
            >
              <Smartphone size={20} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.masakiomae.commitpot"
              target="_blank" rel="noopener noreferrer"
              className="w-full bg-slate-900 border-2 border-slate-800 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:border-green-400 hover:scale-105 transition-all shadow-lg text-lg"
            >
              <Smartphone size={20} /> Google Play
            </a>
          </div>
          <button
            onClick={() => {
              setIsHowToModalOpen(false);
              handleStartApp('hero');
            }}
            className="w-full text-center text-slate-400 text-xs font-bold underline hover:text-slate-600 transition-colors mt-2"
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
