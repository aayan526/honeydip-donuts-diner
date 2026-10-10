import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ArrowLeft, CheckCircle2, ShoppingBag, Clock, Phone, User, Receipt } from 'lucide-react';
import { CartItem, PickupOrderDetails, PlacedOrder } from '../types';
import { BUSINESS_INFO } from '../data/realData';

interface OrderingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const OrderingDrawer: React.FC<OrderingDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Items list, 2: Customer details, 3: Confirmation
  const [customer, setCustomer] = useState<PickupOrderDetails>({
    customerName: '',
    customerPhone: '',
    pickupTime: 'ASAP (~20 mins)',
    specialInstructions: '',
  });
  const [placedOrder, setPlacedOrder] = useState<PlacedOrder | null>(null);
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  // Calculation: Item price can be item.selectedOption.price or menuItem.price
  const subtotal = cart.reduce((sum, item) => {
    const itemPrice = item.selectedOption ? item.selectedOption.price : item.menuItem.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.075; // 7.5% Ohio Sales Tax
  const total = subtotal + tax;

  const handleProceedToDetails = () => {
    if (cart.length === 0) return;
    setStep(2);
    setValidationError('');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.customerName.trim()) {
      setValidationError('Please enter your full name for the counter order ticket.');
      return;
    }
    if (!customer.customerPhone.trim() || customer.customerPhone.trim().length < 7) {
      setValidationError('Please enter a valid phone number so we can text or call when your order is ready.');
      return;
    }

    const orderNumber = `HD-${Math.floor(1000 + Math.random() * 9000)}`;
    const newPlacedOrder: PlacedOrder = {
      orderNumber,
      items: [...cart],
      subtotal,
      tax,
      total,
      customer: { ...customer },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setPlacedOrder(newPlacedOrder);
    setStep(3);
    onClearCart();
  };

  const handleResetAndClose = () => {
    setStep(1);
    setPlacedOrder(null);
    setCustomer({
      customerName: '',
      customerPhone: '',
      pickupTime: 'ASAP (~20 mins)',
      specialInstructions: '',
    });
    setValidationError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F1] shadow-2xl flex flex-col justify-between border-l border-[#F7EEDB]">
          
          {/* Drawer Top Header */}
          <div className="px-6 py-5 bg-white border-b border-[#F7EEDB] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8960C]/15 text-[#E8960C] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-[#4A2C17] leading-tight">
                  {step === 1 && 'Pickup Order Bag'}
                  {step === 2 && 'Pickup Information'}
                  {step === 3 && 'Order Confirmed!'}
                </h2>
                <span className="text-[11px] font-semibold text-[#8F725D]">
                  {step === 1 && `${cart.length} unique items`}
                  {step === 2 && 'Step 2 of 2 · Customer Details'}
                  {step === 3 && 'Ticket ready for Kenny Rd counter'}
                </span>
              </div>
            </div>

            <button
              onClick={step === 3 ? handleResetAndClose : onClose}
              className="p-1.5 rounded-lg text-[#8F725D] hover:text-[#4A2C17] hover:bg-[#F7EEDB] transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* STEP 1: ITEM LIST */}
            {step === 1 && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#FDE8C5] text-[#E8960C] flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 stroke-1" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#4A2C17]">Your pickup bag is empty</h3>
                      <p className="text-xs text-[#6E4527] mt-1 max-w-xs mx-auto">
                        Add freshly glazed donuts, blueberry pancakes, or breakfast platters from the menu.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-[#E8960C] text-white text-xs font-bold shadow-sm hover:bg-[#D08305] transition-colors cursor-pointer"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((cartItem) => {
                      const itemPrice = cartItem.selectedOption
                        ? cartItem.selectedOption.price
                        : cartItem.menuItem.price;

                      return (
                        <div
                          key={cartItem.id}
                          className="p-4 bg-white rounded-2xl border border-[#F7EEDB] flex items-center justify-between gap-3 shadow-xs"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-extrabold text-[#4A2C17] truncate">
                              {cartItem.menuItem.name}
                            </h4>
                            {cartItem.selectedOption && (
                              <span className="inline-block text-[11px] font-bold text-[#E8960C]">
                                {cartItem.selectedOption.label}
                              </span>
                            )}
                            <div className="text-xs text-[#8F725D] mt-0.5">
                              ${itemPrice.toFixed(2)} each ·{' '}
                              <span className="font-extrabold text-[#4A2C17] tabular-nums">
                                ${(itemPrice * cartItem.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>

                          {/* Stepper +/- */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => onUpdateQuantity(cartItem.id, -1)}
                              className="w-7 h-7 rounded-lg bg-[#F7EEDB] hover:bg-[#F2E3CE] text-[#4A2C17] flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-xs font-extrabold tabular-nums text-[#4A2C17]">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(cartItem.id, 1)}
                              className="w-7 h-7 rounded-lg bg-[#F7EEDB] hover:bg-[#F2E3CE] text-[#4A2C17] flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => onRemoveItem(cartItem.id)}
                              className="p-1.5 text-[#A89280] hover:text-[#E85D75] rounded-lg transition-colors ml-1 cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    <div className="p-3.5 rounded-xl bg-[#FDE8C5]/70 border border-[#F5C77A]/50 text-xs text-[#6E4527]">
                      <strong>Note:</strong> Donuts are packaged fresh right before pickup. Kitchen griddle items are timed to your selected pickup slot.
                    </div>
                  </div>
                )}
              </>
            )}

            {/* STEP 2: CUSTOMER & PICKUP DETAILS */}
            {step === 2 && (
              <form id="pickup-details-form" onSubmit={handlePlaceOrder} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E8960C] hover:text-[#D08305] mb-2 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to items ({cart.length})</span>
                </button>

                {validationError && (
                  <div className="p-3 rounded-xl bg-[#FCE6EB] border border-[#E85D75]/40 text-xs font-bold text-[#E85D75]">
                    {validationError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="text"
                      required
                      value={customer.customerName}
                      onChange={(e) => setCustomer({ ...customer, customerName: e.target.value })}
                      placeholder="e.g. Rachel Adams"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Phone Number (for ready SMS / call) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <input
                      type="tel"
                      required
                      value={customer.customerPhone}
                      onChange={(e) => setCustomer({ ...customer, customerPhone: e.target.value })}
                      placeholder="(614) 555-0182"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Pickup Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F725D]" />
                    <select
                      value={customer.pickupTime}
                      onChange={(e) => setCustomer({ ...customer, pickupTime: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                    >
                      <option value="ASAP (~20 mins)">ASAP (~20 minutes)</option>
                      <option value="Morning 7:00 AM">Morning 7:00 AM</option>
                      <option value="Morning 7:30 AM">Morning 7:30 AM</option>
                      <option value="Morning 8:00 AM">Morning 8:00 AM</option>
                      <option value="Morning 8:30 AM">Morning 8:30 AM</option>
                      <option value="Morning 9:30 AM">Morning 9:30 AM</option>
                      <option value="Morning 10:30 AM">Morning 10:30 AM</option>
                      <option value="Lunch 11:30 AM">Lunch 11:30 AM</option>
                      <option value="Lunch 12:30 PM">Lunch 12:30 PM</option>
                      <option value="Before 1:45 PM">Before 1:45 PM (Kitchen closes 2:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A2C17] mb-1">
                    Special Preparation Requests (optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customer.specialInstructions}
                    onChange={(e) => setCustomer({ ...customer, specialInstructions: e.target.value })}
                    placeholder="e.g. Over-hard eggs, extra maple syrup, pack donuts separately..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#F7EEDB] rounded-xl text-[#4A2C17] focus:ring-2 focus:ring-[#E8960C] focus:outline-none"
                  />
                </div>

                {/* Quick Summary in Step 2 */}
                <div className="p-4 rounded-xl bg-white border border-[#F7EEDB] space-y-1.5 text-xs">
                  <div className="flex justify-between font-bold text-[#4A2C17]">
                    <span>Items Total ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#8F725D]">
                    <span>Ohio Tax (7.5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-[#E8960C] text-sm pt-1 border-t border-[#F7EEDB]">
                    <span>Due at Pickup</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 3: ORDER CONFIRMED RECEIPT */}
            {step === 3 && placedOrder && (
              <div className="space-y-6 text-center py-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#E8960C]">
                    Order Placed Successfully
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#4A2C17] mt-1">
                    Order #{placedOrder.orderNumber}
                  </h3>
                  <p className="text-xs text-[#6E4527] mt-1">
                    Thank you, <strong className="text-[#4A2C17]">{placedOrder.customer.customerName}</strong>! Your ticket was sent to the kitchen.
                  </p>
                </div>

                {/* Detailed Printable Diner Ticket Receipt */}
                <div className="bg-white p-5 rounded-2xl border-2 border-dashed border-[#F5C77A] text-left text-xs font-mono space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F7EEDB]">
                    <div className="flex items-center gap-1.5 text-[#4A2C17] font-bold">
                      <Receipt className="w-4 h-4 text-[#E8960C]" />
                      <span>HONEYDIP COUNTER TICKET</span>
                    </div>
                    <span className="text-[#8F725D]">{placedOrder.timestamp}</span>
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between">
                      <span className="text-[#8F725D]">CUSTOMER:</span>
                      <span className="font-bold text-[#4A2C17]">{placedOrder.customer.customerName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F725D]">PHONE:</span>
                      <span className="font-bold text-[#4A2C17]">{placedOrder.customer.customerPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F725D]">PICKUP TIME:</span>
                      <span className="font-bold text-[#E8960C]">{placedOrder.customer.pickupTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F725D]">PICKUP AT:</span>
                      <span className="font-bold text-[#4A2C17]">4480 Kenny Road</span>
                    </div>
                  </div>

                  {/* Itemized lines */}
                  <div className="pt-2 border-t border-[#F7EEDB] space-y-1.5">
                    {placedOrder.items.map((it, idx) => {
                      const p = it.selectedOption ? it.selectedOption.price : it.menuItem.price;
                      return (
                        <div key={idx} className="flex justify-between">
                          <span className="text-[#4A2C17]">
                            {it.quantity}x {it.menuItem.name}
                            {it.selectedOption && ` (${it.selectedOption.label})`}
                          </span>
                          <span className="font-bold tabular-nums">${(p * it.quantity).toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Calculations */}
                  <div className="pt-2 border-t border-[#F7EEDB] space-y-1">
                    <div className="flex justify-between text-[#8F725D]">
                      <span>SUBTOTAL</span>
                      <span className="tabular-nums">${placedOrder.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#8F725D]">
                      <span>OHIO SALES TAX (7.5%)</span>
                      <span className="tabular-nums">${placedOrder.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-[#4A2C17] text-sm pt-1 border-t border-[#F7EEDB]">
                      <span>TOTAL DUE AT PICKUP</span>
                      <span className="text-[#E8960C] tabular-nums">${placedOrder.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-center text-[#8F725D] pt-2">
                    Questions? Call counter directly: {BUSINESS_INFO.phone}
                  </div>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3.5 rounded-xl bg-[#4A2C17] hover:bg-[#321C0D] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  Close &amp; Return to Menu
                </button>
              </div>
            )}

          </div>

          {/* Drawer Footer Actions (Step 1 and Step 2) */}
          {step === 1 && cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#F7EEDB] space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#6E4527]">
                  <span>Subtotal</span>
                  <span className="font-bold tabular-nums text-[#4A2C17]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#8F725D]">
                  <span>Estimated Tax (7.5% OH)</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#4A2C17] pt-2 border-t border-[#F7EEDB]">
                  <span>Total Amount</span>
                  <span className="text-[#E8960C] tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToDetails}
                className="w-full py-3.5 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Continue to Pickup Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 bg-white border-t border-[#F7EEDB]">
              <button
                type="submit"
                form="pickup-details-form"
                className="w-full py-3.5 rounded-xl bg-[#E8960C] hover:bg-[#D08305] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Confirm &amp; Place Order (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
