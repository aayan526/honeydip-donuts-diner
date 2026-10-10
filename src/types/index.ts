export type MenuCategoryTab = 'all' | 'donuts' | 'breakfast' | 'lunch';

export interface RealMenuItem {
  id: string;
  name: string;
  category: 'donuts' | 'breakfast' | 'lunch';
  price: number;
  description: string;
  imageUrl: string;
  altText: string;
  badge?: string;
  featured?: boolean;
  options?: { label: string; price: number }[];
}

export interface CartItem {
  id: string; // unique item+option id
  menuItem: RealMenuItem;
  selectedOption?: { label: string; price: number };
  quantity: number;
}

export interface PickupOrderDetails {
  customerName: string;
  customerPhone: string;
  pickupTime: string;
  specialInstructions?: string;
}

export interface PlacedOrder {
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customer: PickupOrderDetails;
  timestamp: string;
}

export interface CateringFormData {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  guestCount: string;
  orderDetails: string;
}
