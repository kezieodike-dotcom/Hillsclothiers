
export enum Page {
  HOME = 'home',
  SHOP = 'shop',
  CUSTOM_ORDER = 'custom_order',
  ABOUT = 'about',
  INVESTORS = 'investors',
  CONTACT = 'contact',
  DASHBOARD = 'dashboard',
  CHECKOUT = 'checkout',
  ACADEMY = 'academy'
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}
