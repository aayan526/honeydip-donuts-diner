import React, { useState, useEffect, useMemo } from 'react';
import { RealMenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { MenuSection } from './components/MenuSection';
import { OrderingDrawer } from './components/OrderingDrawer';
import { HoursAndLocation } from './components/HoursAndLocation';
import { OurStory } from './components/OurStory';
import { CateringForm } from './components/CateringForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Setup IntersectionObserver for scroll-reveal animations across sections
  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Cart counts lookup for menu items
  const cartCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of cart) {
      counts[item.menuItem.id] = (counts[item.menuItem.id] || 0) + item.quantity;
    }
    return counts;
  }, [cart]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const handleAddToCart = (
    menuItem: RealMenuItem,
    selectedOption?: { label: string; price: number }
  ) => {
    const cartItemId = selectedOption
      ? `${menuItem.id}-${selectedOption.label}`
      : menuItem.id;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { id: cartItemId, menuItem, selectedOption, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.id === cartItemId) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter((ci): ci is CartItem => ci !== null);
    });
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F1] text-[#4A2C17] antialiased">
      {/* 1. Sticky Navbar (with drawer below 1024px) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Full-Screen Hero */}
        <Hero onOpenCart={() => setIsCartOpen(true)} />

        {/* 3. Stats Strip with Animated Counters */}
        <div className="reveal-on-scroll">
          <StatsStrip />
        </div>

        {/* 4. Menu with Working Category Filter Tabs */}
        <div className="reveal-on-scroll">
          <MenuSection
            onAddToCart={handleAddToCart}
            cartCounts={cartCounts}
            onOpenCart={() => setIsCartOpen(true)}
          />
        </div>

        {/* 6. Hours & Location (exact hours table, Google map, directions) */}
        <div className="reveal-on-scroll">
          <HoursAndLocation />
        </div>

        {/* 7. Our Story (1970s heritage, real photos, customer reviews) */}
        <div className="reveal-on-scroll">
          <OurStory />
        </div>

        {/* 8. Catering Form (validated with reference number confirmation) */}
        <div className="reveal-on-scroll">
          <CateringForm />
        </div>

        {/* 9. Contact (phone, address, hours recap, socials) */}
        <div className="reveal-on-scroll">
          <ContactSection />
        </div>
      </main>

      {/* 10. Footer with concept proposal disclaimer */}
      <Footer />

      {/* 5. Pickup Ordering 3-Step Flow Drawer */}
      <OrderingDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
