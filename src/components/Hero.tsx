import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';
import { getTodayHoursStatus } from '../utils/hours';

interface HeroProps {
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCart }) => {
  const [scrollY, setScrollY] = useState(0);
  const hoursStatus = getTodayHoursStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#4A2C17] text-[#FFF9F1]">
      {/* Real Donut Photo Background with Scroll Parallax & Warm Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1600&q=80')`,
          transform: `translateY(${scrollY * 0.25}px)`
        }}
        aria-hidden="true"
      />

      {/* Warm Gradient Scrim / Overlay: Warm Chocolate & Honey tones */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#321C0D]/95 via-[#4A2C17]/85 to-[#321C0D]/75 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      {/* Subtle floating decorative shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#E8960C]/20 blur-xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 right-12 w-32 h-32 rounded-full bg-[#E85D75]/15 blur-2xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Today's Hours & Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F1]/15 backdrop-blur-md border border-[#FFF9F1]/25 text-xs sm:text-sm font-semibold text-[#FDE8C5] mb-6 shadow-sm">
          <Clock className="w-4 h-4 text-[#E8960C] shrink-0" />
          <span className="font-bold text-white">{hoursStatus.statusBadge}:</span>
          <span className="text-[#FFF9F1]/90">{hoursStatus.statusDetail}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl text-balance">
          Fresh Donuts. <br className="hidden sm:inline" />
          <span className="text-[#E8960C] underline decoration-[#E85D75]/60 decoration-wavy decoration-from-font">
            Breakfast All Day.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-2xl font-medium text-[#FFF9F1]/90 max-w-2xl leading-relaxed">
          {BUSINESS_INFO.tagline}
        </p>

        {/* Heritage Trust marker */}
        <p className="mt-2 text-sm sm:text-base text-[#FDE8C5]/80 font-medium">
          A Columbus tradition since the 1970s · 4480 Kenny Road
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#4A2C17] hover:bg-[#FFF9F1] text-base font-extrabold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <UtensilsCrossed className="w-5 h-5 text-[#E8960C]" />
            <span>View Full Menu</span>
          </a>

          <button
            onClick={onOpenCart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Order Pickup</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick highlight bar */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-[#FDE8C5]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E85D75]" />
            <span>50+ Years Family-Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8960C]" />
            <span>30+ Scratch Donut Varieties</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E85D75]" />
            <span>Blueberry Pancakes &amp; Omelettes</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white flex flex-col items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors"
        aria-label="Scroll to stats and menu"
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
