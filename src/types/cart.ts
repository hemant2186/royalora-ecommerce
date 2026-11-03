import { Product, PackOption } from './product';

export interface CartItem {
  id: string; // unique item key: productId-packSize
  product: Product;
  selectedPack: PackOption;
  quantity: number;
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  gstNumber?: string;
  orderNotes?: string;
  paymentMethod: 'razorpay' | 'upi' | 'card' | 'cod';
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  customer: CheckoutForm;
  paymentStatus: 'pending' | 'paid' | 'test_mode_success';
  paymentMethod: string;
  createdAt: string;
  estimatedDelivery: string;
}
