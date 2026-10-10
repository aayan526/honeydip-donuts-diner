import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import { CateringFormData } from '../types';
import { BUSINESS_INFO } from '../data/realData';

export const CateringForm: React.FC = () => {
  const [formData, setFormData] = useState<CateringFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '25-50 guests (3-5 Dozens)',
    orderDetails: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.eventDate) {
      setErrorMsg('Please select your target event or pickup date.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const refNumber = `CAT-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRef(refNumber);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventDate: '',
      guestCount: '25-50 guests (3-5 Dozens)',
      orderDetails: '',
    });
    setSubmittedRef(null);
    setErrorMsg('');
  };

  return (
    <section id="catering" className="py-20 bg-[#FFFDF7] border-t border-[#F7EEDB] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E8960C]">
            Meetings, Events &amp; Celebrations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4A2C17] tracking-tight mt-1">
            Donut &amp; Breakfast Catering
          </h2>
          <p className="mt-3 text-base text-[#6E4527] max-w-2xl mx-auto">
            Need dozens of fresh scratch donuts, breakfast sandwiches, or piping hot coffee for an office meeting, family celebration, or Buckeye tailgate? Let us know in advance!
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F7EEDB] shadow-sm">
          {submittedRef ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8960C]">
                  Catering Request Received
                </span>
                <h3 className="text-2xl font-extrabold text-[#4A2C17] mt-1">
                  Reference #{submittedRef}
                </h3>
                <p className="text-sm text-[#6E4527] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#4A2C17]">{formData.fullName}</strong>. We received your request for <strong className="text-[#4A2C17]">{formData.eventDate}</strong>. Our kitchen manager will contact you at <strong className="text-[#4A2C17]">{formData.phone}</strong> to confirm flavor selections and timing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F1] border border-[#F7EEDB] text-xs text-[#8F725D] max-w-sm mx-auto">
                Need urgent dozens for tomorrow morning? Please call the diner counter directly at <strong>{BUSINESS_INFO.phone}</strong> before 2:00 PM.
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#E8960C] text-white text-xs font-bold shadow-sm hover:bg-[#D08305] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-[#FCE6EB] border border-[#E85D75]/40 text-xs font-bold text-[#E85D75]">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Thomas Wayne"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(614) 555-0199"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="thomas@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Event / Pickup Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                  Estimated Guest Count / Order Size
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                  >
                    <option value="12-24 guests (1-2 Dozens)">12–24 guests (1–2 Dozens)</option>
                    <option value="25-50 guests (3-5 Dozens)">25–50 guests (3–5 Dozens)</option>
                    <option value="50-100 guests (6-10 Dozens)">50–100 guests (6–10 Dozens)</option>
                    <option value="100+ guests (Large Corporate/Wedding)">100+ guests (Large Event)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                  Order Details &amp; Preferred Flavors
                </label>
                <textarea
                  rows={3}
                  value={formData.orderDetails}
                  onChange={(e) => setFormData({ ...formData, orderDetails: e.target.value })}
                  placeholder="Specify flavor preferences (e.g. mix of Honey Glazed, Apple Fritters, Blueberry Cake), coffee caddies needed, or requested morning pickup time..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FFF9F1] border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:bg-white focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Catering Request</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
