import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, ShoppingBag, Sparkles, AlertCircle } from 'lucide-react';
import { MenuCategoryTab, RealMenuItem } from '../types';
import { REAL_MENU_ITEMS, DONUT_VARIETIES } from '../data/realData';

interface MenuSectionProps {
  onAddToCart: (item: RealMenuItem, selectedOption?: { label: string; price: number }) => void;
  cartCounts: Record<string, number>;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartCounts,
  onOpenCart,
}) => {
  const [activeTab, setActiveTab] = useState<MenuCategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  
  // Modal / Selection for items with options (like Single vs Half Dozen vs Dozen)
  const [optionModalItem, setOptionModalItem] = useState<RealMenuItem | null>(null);

  const tabs: { id: MenuCategoryTab; label: string }[] = [
    { id: 'all', label: 'All Offerings' },
    { id: 'donuts', label: 'Fresh Donuts' },
    { id: 'breakfast', label: 'All-Day Breakfast' },
    { id: 'lunch', label: 'Diner Lunch' },
  ];

  const filteredItems = useMemo(() => {
    return REAL_MENU_ITEMS.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handleItemAddClick = (item: RealMenuItem) => {
    if (item.options && item.options.length > 0) {
      setOptionModalItem(item);
    } else {
      onAddToCart(item);
      triggerAddedNotice(item.id);
    }
  };

  const handleConfirmOption = (option: { label: string; price: number }) => {
    if (!optionModalItem) return;
    onAddToCart(optionModalItem, option);
    triggerAddedNotice(optionModalItem.id);
    setOptionModalItem(null);
  };

  const triggerAddedNotice = (id: string) => {
    setAddedItemNotice(id);
    setTimeout(() => {
      setAddedItemNotice((curr) => (curr === id ? null : curr));
    }, 1200);
  };

  const totalCartItems = Object.values(cartCounts).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="py-20 bg-[#FFF9F1] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#F7EEDB]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#E8960C] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Served Fresh Daily · Breakfast All Day</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A2C17] tracking-tight">
              Real Columbus Diner Menu
            </h2>
            <p className="mt-2 text-base text-[#6E4527] max-w-2xl leading-relaxed">
              Every donut is hand-cut and kettle-dipped fresh from 6:00 AM. Breakfast plates, fluffy blueberry pancakes, and hearty diner lunches prepared to order on our Kenny Road flat-top.
            </p>
          </div>

          {/* Quick Bag Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Pickup Order</span>
              {totalCartItems > 0 && (
                <span className="px-2 py-0.5 text-xs font-extrabold bg-[#E85D75] text-white rounded-full">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Donut Varieties Reference Showcase Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FFFDF7] border border-[#F7EEDB] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#F7EEDB]">
            <div>
              <h3 className="text-lg font-extrabold text-[#4A2C17]">
                Over 30+ Donut Varieties Handcrafted Daily
              </h3>
              <p className="text-xs text-[#8F725D] mt-0.5">
                Regular: $1.35 each / $8.10 half dozen / $16.20 dozen · Fancy: $1.60 each / $9.60 half dozen / $19.20 dozen
              </p>
            </div>
            <button
              onClick={() => setActiveTab('donuts')}
              className="text-xs font-bold text-[#E8960C] hover:text-[#D08305] uppercase tracking-wider self-start md:self-auto cursor-pointer"
            >
              Filter to Donuts &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs">
            <div>
              <span className="font-extrabold uppercase tracking-wide text-[#E8960C] block mb-2">
                Regular Varieties ($1.35 each):
              </span>
              <p className="text-[#6E4527] leading-relaxed">
                {DONUT_VARIETIES.regular.join(' · ')}
              </p>
            </div>

            <div>
              <span className="font-extrabold uppercase tracking-wide text-[#E85D75] block mb-2">
                Fancy &amp; Specialty Varieties ($1.60 each):
              </span>
              <p className="text-[#6E4527] leading-relaxed">
                {DONUT_VARIETIES.fancy.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        {/* Working Category Filter Tabs & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#4A2C17] text-[#FFF9F1] shadow-sm'
                      : 'bg-white text-[#6E4527] hover:bg-[#FDE8C5] hover:text-[#4A2C17] border border-[#F7EEDB]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pancakes, gyro, hash, fritter..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#F7EEDB] rounded-xl text-[#4A2C17] placeholder:text-[#A89280] focus:outline-none focus:ring-2 focus:ring-[#E8960C] transition-all shadow-xs"
            />
          </div>

        </div>

        {/* Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#F7EEDB] mt-8">
            <AlertCircle className="w-10 h-10 text-[#E8960C] mx-auto mb-3" />
            <p className="text-base font-bold text-[#4A2C17]">No items found matching "{searchQuery}"</p>
            <p className="text-xs text-[#8F725D] mt-1">Try resetting the search or category tab.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 text-xs font-bold text-[#4A2C17] bg-[#FDE8C5] hover:bg-[#FCD8A0] rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const count = cartCounts[item.id] || 0;
              const justAdded = addedItemNotice === item.id;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#F7EEDB] overflow-hidden hover:border-[#E8960C]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Real Food Photography with hover zoom & onError fallback */}
                  <div className="relative h-52 sm:h-56 w-full bg-[#F7EEDB] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.altText}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback to high-res gourmet bakery background if specific photo fails
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />

                    {/* Gradient bottom overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E85D75] text-white text-[11px] font-extrabold shadow-sm uppercase tracking-wide">
                        {item.badge}
                      </span>
                    )}

                    {/* Exact Price Stamp */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-[#4A2C17]/90 backdrop-blur-xs text-white text-sm font-extrabold tabular-nums shadow-sm">
                      ${item.price.toFixed(2)}
                      {item.options && <span className="text-[11px] font-normal text-[#FDE8C5]"> / starting</span>}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#4A2C17] leading-snug group-hover:text-[#E8960C] transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#6E4527] leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#F7EEDB] flex items-center justify-between gap-3">
                      <div className="text-xs text-[#8F725D]">
                        {count > 0 ? (
                          <span className="font-bold text-[#E85D75]">
                            {count} in order bag
                          </span>
                        ) : (
                          <span className="text-[#8F725D]">
                            {item.options ? 'Sizes / Dozen options' : 'Fresh to order'}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleItemAddClick(item)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                          justAdded
                            ? 'bg-[#15803D] text-white'
                            : 'bg-[#FDE8C5] hover:bg-[#E8960C] text-[#4A2C17] hover:text-white'
                        }`}
                        aria-label={`Add ${item.name} to pickup bag`}
                      >
                        {justAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>{item.options ? 'Select & Add' : 'Add to Order'}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Option Selection Modal (for items with multiple size/dozen variants) */}
      {optionModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setOptionModalItem(null)}
          />
          <div className="relative bg-[#FFF9F1] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#F7EEDB] z-10 space-y-4">
            <div>
              <span className="text-xs font-bold text-[#E8960C] uppercase tracking-wider">Select Option</span>
              <h3 className="text-xl font-extrabold text-[#4A2C17] mt-1">{optionModalItem.name}</h3>
              <p className="text-xs text-[#6E4527] mt-1">{optionModalItem.description}</p>
            </div>

            <div className="space-y-2 pt-2">
              {optionModalItem.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleConfirmOption(opt)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#FDE8C5] border border-[#F7EEDB] text-left transition-colors cursor-pointer group"
                >
                  <span className="text-sm font-bold text-[#4A2C17] group-hover:text-[#4A2C17]">
                    {opt.label}
                  </span>
                  <span className="text-sm font-extrabold text-[#E8960C] tabular-nums">
                    ${opt.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setOptionModalItem(null)}
              className="w-full py-2.5 text-xs font-bold text-[#8F725D] hover:text-[#4A2C17] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
