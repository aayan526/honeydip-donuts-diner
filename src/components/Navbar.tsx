import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF9F1]/95 backdrop-blur-md shadow-md border-b border-[#F7EEDB]'
            : 'bg-[#FFF9F1] border-b border-[#F7EEDB]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Mark + Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
              aria-label="HoneyDip Donuts & Diner home"
            >
              {/* Custom Warm Donut Logo Mark */}
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#E8960C] to-[#F5B446] p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#FFF9F1] flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-[#E8960C] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFF9F1]" />
                  </div>
                  {/* Strawberry sprinkle accent */}
                  <span className="absolute top-1.5 right-2 w-1.5 h-1 rounded-full bg-[#E85D75] rotate-45" />
                  <span className="absolute bottom-1.5 left-2 w-1.5 h-1 rounded-full bg-[#4A2C17] -rotate-30" />
                </div>
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#4A2C17] leading-none group-hover:text-[#E8960C] transition-colors">
                  HoneyDip
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#E8960C] mt-0.5">
                  Donuts &amp; Diner
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links: ONLY visible on lg screens (>= 1024px) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#6E4527]">
              <a
                href="#menu"
                className="hover:text-[#E8960C] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#E8960C]"
              >
                Menu
              </a>
              <a
                href="#story"
                className="hover:text-[#E8960C] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#E8960C]"
              >
                Our Story
              </a>
              <a
                href="#hours-location"
                className="hover:text-[#E8960C] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#E8960C]"
              >
                Hours &amp; Location
              </a>
              <a
                href="#catering"
                className="hover:text-[#E8960C] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#E8960C]"
              >
                Catering
              </a>
              <a
                href="#contact"
                className="hover:text-[#E8960C] transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-[#E8960C]"
              >
                Contact
              </a>
            </nav>

            {/* Action Area: Phone + Pickup CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              
              {/* Phone Button: always visible */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#4A2C17] bg-[#FDE8C5] hover:bg-[#FCD8A0] border border-[#F5C77A] transition-all whitespace-nowrap shadow-xs shrink-0"
                title={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#E8960C] shrink-0" />
                <span className="hidden sm:inline">{BUSINESS_INFO.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>

              {/* Order Pickup CTA Button: VISIBLE ONLY at sm: (>= 640px) */}
              <button
                onClick={onOpenCart}
                className="relative hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-[#E8960C] hover:bg-[#D08305] active:bg-[#B77103] text-white text-xs sm:text-sm font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer hover:shadow-md shrink-0"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Order Pickup</span>
                {cartCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.5 text-xs font-bold bg-[#E85D75] text-white rounded-full leading-none">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger Button: visible ONLY BELOW 1024px (< lg), always visible and tappable at 375px */}
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="lg:hidden p-2 rounded-xl text-[#4A2C17] hover:bg-[#F7EEDB] active:bg-[#FDE8C5] transition-colors cursor-pointer shrink-0"
                aria-label="Open mobile navigation drawer"
              >
                <Menu className="w-6 h-6" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Slide-in Mobile Drawer for < 1024px */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Slide-in Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FFF9F1] shadow-2xl p-6 flex flex-col justify-between border-l border-[#F7EEDB]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#F7EEDB]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8960C] flex items-center justify-center text-white font-bold text-sm">
                    HD
                  </div>
                  <span className="font-extrabold text-lg text-[#4A2C17]">HoneyDip</span>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1.5 text-[#6E4527] hover:text-[#4A2C17] rounded-lg transition-colors cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Prominent Order Pickup CTA Button inside Drawer */}
              <div className="mt-5">
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>Order Pickup</span>
                  {cartCount > 0 && (
                    <span className="ml-1 px-2 py-0.5 text-xs font-extrabold bg-[#E85D75] text-white rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 space-y-2.5 font-bold text-base text-[#4A2C17]">
                <a
                  href="#menu"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FDE8C5] transition-colors"
                >
                  Menu &amp; Donuts
                </a>
                <a
                  href="#story"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FDE8C5] transition-colors"
                >
                  Our 50-Year Story
                </a>
                <a
                  href="#hours-location"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FDE8C5] transition-colors"
                >
                  Hours &amp; Location
                </a>
                <a
                  href="#catering"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FDE8C5] transition-colors"
                >
                  Catering &amp; Orders
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="block px-3 py-2.5 rounded-xl hover:bg-[#FDE8C5] transition-colors"
                >
                  Contact &amp; Social
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#F7EEDB] space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#FDE8C5] text-[#4A2C17] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#E8960C]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenCart();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#E8960C] text-white font-bold text-sm shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Open Pickup Cart ({cartCount})</span>
              </button>
              <p className="text-center text-xs text-[#8F725D] pt-1">
                4480 Kenny Road, Columbus, OH
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
