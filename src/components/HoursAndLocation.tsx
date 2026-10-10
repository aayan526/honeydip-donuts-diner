import React from 'react';
import { Clock, MapPin, Phone, Navigation, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';
import { getTodayHoursStatus } from '../utils/hours';

export const HoursAndLocation: React.FC = () => {
  const currentStatus = getTodayHoursStatus();

  return (
    <section id="hours-location" className="py-20 bg-[#FFFDF7] border-t border-[#F7EEDB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E8960C]">
            Visit Us On Kenny Road
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A2C17] tracking-tight mt-1">
            Hours &amp; Location
          </h2>
          <p className="mt-2 text-base text-[#6E4527]">
            Conveniently situated at 4480 Kenny Road in Northwest Columbus, with free front parking and warm booth seating.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Exact Hours & Live Operational Status */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#F7EEDB] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#F7EEDB]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#E8960C]" />
                  <h3 className="text-xl font-extrabold text-[#4A2C17]">
                    Operating Hours
                  </h3>
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#FDE8C5] text-[#4A2C17]">
                  {currentStatus.statusBadge}
                </span>
              </div>

              {/* Exact Hours Table */}
              <div className="space-y-3">
                {BUSINESS_INFO.hours.map((h, idx) => {
                  const isClosed = h.time === 'CLOSED';
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all ${
                        isClosed
                          ? 'bg-[#FDF9F3] border-[#F2E5D0] opacity-85'
                          : 'bg-[#FFF9F1] border-[#F7EEDB]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-[#4A2C17]">
                          {h.days}
                        </span>
                        <span className={`text-sm font-mono font-extrabold tabular-nums ${isClosed ? 'text-[#8F725D]' : 'text-[#E8960C]'}`}>
                          {h.time}
                        </span>
                      </div>
                      <div className="text-xs text-[#8F725D] mt-1 font-medium">
                        {h.kitchen}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Kitchen Note Banner */}
              <div className="p-4 rounded-2xl bg-[#FCE6EB] border border-[#E85D75]/30 text-xs text-[#4A2C17] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#E85D75] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#E85D75]">Important Kitchen Policy:</strong>{' '}
                  {BUSINESS_INFO.kitchenNote} Donuts, coffee, and packaged pastries remain available until 2:30 PM closing.
                </div>
              </div>

              {/* Contact Bar */}
              <div className="p-4 rounded-2xl bg-white border border-[#F7EEDB] flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold text-[#8F725D]">Call Counter Direct</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-base font-extrabold text-[#E8960C] hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="p-3 rounded-xl bg-[#FDE8C5] text-[#4A2C17] hover:bg-[#FCD8A0] transition-colors"
                  aria-label="Call phone number"
                >
                  <Phone className="w-4 h-4 text-[#E8960C]" />
                </a>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#F7EEDB]">
              <p className="text-xs text-center text-[#8F725D]">
                Fresh batches rolled daily starting at 4:00 AM by our master bakers.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed + Directions + Address */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#F7EEDB] shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F7EEDB]">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#E8960C]" />
                    <h3 className="text-xl font-extrabold text-[#4A2C17]">
                      {BUSINESS_INFO.address}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8F725D] mt-0.5">
                    Columbus, Ohio 43220 · Northwest Columbus
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A2C17] hover:bg-[#321C0D] text-white text-xs font-bold transition-all whitespace-nowrap self-start sm:self-auto shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E8960C]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#F7EEDB] shadow-inner relative bg-[#F7EEDB]">
                <iframe
                  title="HoneyDip Donuts & Diner Location Map"
                  src="https://maps.google.com/maps?q=4480+Kenny+Road+Columbus+OH+43220&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Neighborhood Landmarks */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#6E4527] pt-2">
                <div className="p-3 rounded-xl bg-[#FFF9F1] border border-[#F7EEDB]">
                  <strong>Ample Free Parking:</strong> Storefront spots right outside our doors on Kenny Rd.
                </div>
                <div className="p-3 rounded-xl bg-[#FFF9F1] border border-[#F7EEDB]">
                  <strong>Dine-In &amp; Takeout:</strong> Traditional diner booths, coffee counter &amp; quick donut pickup.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
