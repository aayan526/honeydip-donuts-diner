import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, Heart, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';

export const StatsStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [varietiesCount, setVarietiesCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Years (0 to 50)
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setYearsCount(Math.floor(ease * 50));
            setReviewCount(Math.floor(ease * 851));
            setVarietiesCount(Math.floor(ease * 30));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats" ref={containerRef} className="py-12 bg-[#FDE8C5] border-y border-[#F5C77A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Stat 1: 50+ Years */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF9F1]/80 backdrop-blur-sm border border-[#F5C77A]/40 text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A2C17] tabular-nums tracking-tight">
              {yearsCount}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#6E4527] mt-1">
              Years Serving Columbus
            </div>
            <div className="text-[11px] text-[#8F725D] mt-0.5">
              Institution since the 1970s
            </div>
          </div>

          {/* Stat 2: 4.6 Stars from 851+ Reviews */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF9F1]/80 backdrop-blur-sm border border-[#F5C77A]/40 text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E85D75]/15 text-[#E85D75] flex items-center justify-center mb-2">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A2C17] tabular-nums tracking-tight">
              {BUSINESS_INFO.rating} ★
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#6E4527] mt-1">
              {reviewCount}+ Google Reviews
            </div>
            <div className="text-[11px] text-[#8F725D] mt-0.5">
              Columbus community favorite
            </div>
          </div>

          {/* Stat 3: 30+ Donut Varieties */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF9F1]/80 backdrop-blur-sm border border-[#F5C77A]/40 text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center mb-2">
              <Heart className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A2C17] tabular-nums tracking-tight">
              {varietiesCount}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#6E4527] mt-1">
              Donut Varieties Daily
            </div>
            <div className="text-[11px] text-[#8F725D] mt-0.5">
              Glazed, cake, filled &amp; fritters
            </div>
          </div>

          {/* Stat 4: 6:00 AM Fresh Daily */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFF9F1]/80 backdrop-blur-sm border border-[#F5C77A]/40 text-center shadow-xs">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E85D75]/15 text-[#E85D75] flex items-center justify-center mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#4A2C17] tracking-tight">
              6:00 AM
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#6E4527] mt-1">
              Fresh Daily Scratch Batches
            </div>
            <div className="text-[11px] text-[#8F725D] mt-0.5">
              Wed–Sat 6am, Sun 7am
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
