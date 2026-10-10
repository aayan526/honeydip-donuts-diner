import React from 'react';
import { Star, Heart, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, CUSTOMER_REVIEWS } from '../data/realData';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#FFF9F1] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#E8960C] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Family-Owned Since The 1970s</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A2C17] tracking-tight">
            Fifty Years of Fresh Donuts &amp; Warm Community
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6E4527] leading-relaxed">
            {BUSINESS_INFO.history} While the world around us has changed with chain restaurants and frozen pastries, HoneyDip has kept the timeless tradition alive: rolling dough before dawn, welcoming generations of families, and serving honest breakfast at honest prices.
          </p>
        </div>

        {/* 2-Column Split: Narrative & Real Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Craftsmanship */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-3xl bg-white border border-[#F7EEDB] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#4A2C17]">
                    Handcrafted From Scratch Every Morning
                  </h3>
                  <span className="text-xs text-[#8F725D]">Never frozen · Traditional kettle method</span>
                </div>
              </div>
              <p className="text-sm text-[#6E4527] leading-relaxed">
                Our bakers arrive long before sunrise to proof the yeast, mix cake doughs, hand-cut each ring, and fry to golden perfection. From our signature Honey Dip Glaze to devils food, blueberry cake, and jumbo apple fritters, every bite carries fifty years of tested recipes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F7EEDB] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E85D75]/15 text-[#E85D75] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#4A2C17]">
                    Breakfast Served All Day Long
                  </h3>
                  <span className="text-xs text-[#8F725D]">Eggs, home fries, biscuits &amp; fluffy hotcakes</span>
                </div>
              </div>
              <p className="text-sm text-[#6E4527] leading-relaxed">
                Whether you walk in at 6:00 AM on a Wednesday or 1:00 PM on a Saturday, our griddle is sizzling. Enjoy our renowned blueberry pancakes, crispy corned beef hash, hot coffee in heavy mugs, and genuine diner warmth that feels like coming home.
              </p>
            </div>

          </div>

          {/* Right Column: Real Photos Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-64 border border-[#F7EEDB] bg-[#F7EEDB]">
                  <img
                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80"
                    alt="Fresh golden glazed donuts in bakery"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 border border-[#F7EEDB] bg-[#F7EEDB]">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
                    alt="Blueberry pancakes with syrup"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 border border-[#F7EEDB] bg-[#F7EEDB]">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                    alt="Diner coffee and breakfast counter"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-64 border border-[#F7EEDB] bg-[#F7EEDB]">
                  <img
                    src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=1200&q=80"
                    alt="Assorted handcrafted specialty donuts"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Customer Reviews Strip */}
        <div className="mt-16 pt-12 border-t border-[#F7EEDB]">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 text-[#E8960C] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A2C17]">
              {BUSINESS_INFO.rating} Stars from {BUSINESS_INFO.reviewCount} Google Reviews
            </h3>
            <p className="text-xs text-[#8F725D] mt-0.5">
              Beloved by Columbus locals for our blueberry pancakes, cinnamon rolls, and friendly service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#F7EEDB] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#E8960C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E4527] leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F7EEDB]">
                  <div className="text-sm font-extrabold text-[#4A2C17]">{rev.author}</div>
                  <div className="text-xs text-[#8F725D]">{rev.details} · {rev.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
