import React from 'react';
import { Phone, MapPin, Clock, Heart, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#321C0D] text-[#FFF9F1] border-t border-[#4A2C17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8960C] flex items-center justify-center text-white font-extrabold text-base">
                HD
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                HoneyDip Donuts &amp; Diner
              </span>
            </div>
            <p className="text-sm text-[#FDE8C5]/90 leading-relaxed max-w-sm">
              Fresh donuts. Breakfast all day. The sweetest spot on Kenny Road. Serving Columbus locals and Buckeye fans since the 1970s.
            </p>
            <div className="text-xs text-[#E8960C] font-bold">
              Columbus Institution · 50+ Years · Family-Owned
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8960C]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9F1]/80 font-medium">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu &amp; Donuts
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our 50-Year Story
                </a>
              </li>
              <li>
                <a href="#hours-location" className="hover:text-white transition-colors">
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Catering Pre-Orders
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8960C]">
              Kenny Road Landmark
            </h4>
            <div className="space-y-2 text-xs text-[#FFF9F1]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8960C] shrink-0 mt-0.5" />
                <span>
                  4480 Kenny Road<br />
                  Columbus, OH 43220
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8960C] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-bold text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#E8960C] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Wed–Sat: 6:00 AM – 2:30 PM</span>
                  <span className="block font-bold text-white">Sun: 7:00 AM – 2:30 PM</span>
                  <span className="block text-[#E85D75]">Mon &amp; Tue: CLOSED</span>
                  <span className="block text-[11px] text-[#FDE8C5]/70 mt-0.5">Kitchen closes at 2:00 PM daily</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Required Clearly Visible Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-black/25 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FDE8C5]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <AlertCircle className="w-4 h-4 text-[#E8960C] shrink-0" />
            <p className="font-medium">
              Design concept created for demonstration purposes — not affiliated with or the official website of HoneyDip Donuts &amp; Diner.
            </p>
          </div>
          <span className="text-[11px] text-[#8F725D] shrink-0">
            &copy; {new Date().getFullYear()} Concept Showcase
          </span>
        </div>

      </div>
    </footer>
  );
};
