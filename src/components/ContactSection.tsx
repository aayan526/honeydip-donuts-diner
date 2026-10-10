import React from 'react';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/realData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF9F1] border-t border-[#F7EEDB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E8960C]">
            We'd Love To Hear From You
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A2C17] tracking-tight mt-1">
            Contact &amp; Connect
          </h2>
          <p className="mt-2 text-base text-[#6E4527]">
            Stop by our counter at 4480 Kenny Road or give our friendly diner crew a call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Phone */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F7EEDB] shadow-sm flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#4A2C17]">Diner Phone</h3>
              <p className="text-xs text-[#8F725D] mt-1">Direct line to our Kenny Road counter</p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="mt-3 inline-block text-xl font-extrabold text-[#E8960C] hover:underline"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <p className="text-[11px] text-[#8F725D] pt-2 border-t border-[#F7EEDB]">
              Call ahead for quick box pickup
            </p>
          </div>

          {/* Card 2: Address */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F7EEDB] shadow-sm flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E85D75]/15 text-[#E85D75] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#4A2C17]">Diner Address</h3>
              <p className="text-xs text-[#8F725D] mt-1">Northwest Columbus Landmark</p>
              <p className="mt-2 text-sm font-bold text-[#4A2C17] leading-relaxed">
                4480 Kenny Road<br />
                Columbus, OH 43220
              </p>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#E8960C] hover:underline inline-flex items-center justify-center gap-1 pt-2 border-t border-[#F7EEDB]"
            >
              <span>View On Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Hours Recap & Socials */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F7EEDB] shadow-sm flex flex-col justify-between text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#4A2C17]">Hours Recap</h3>
              <p className="text-xs text-[#8F725D] mt-1">Kitchen closes at 2:00 PM</p>
              <div className="mt-2 text-xs font-bold text-[#4A2C17] space-y-1">
                <div>Wed–Sat: 6:00 AM – 2:30 PM</div>
                <div>Sun: 7:00 AM – 2:30 PM</div>
                <div className="text-[#E85D75]">Mon &amp; Tue: CLOSED</div>
              </div>
            </div>
            <div className="pt-2 border-t border-[#F7EEDB] flex items-center justify-center gap-4 text-xs font-bold text-[#6E4527]">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E8960C] transition-colors"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#E8960C] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
