import { create } from "zustand";
import { CartItem } from "./cartStore";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "Placed" | "Processing" | "Shipped" | "Delivered";
  paymentMethod: "Cash on Delivery" | "Online Payment";
  address: string;
  createdAt: string;
}

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => string;
}

export const useOrderStore = create<OrderStore>()((set) => ({
  orders: [],

  addOrder: (order) => {
    set((state) => ({
      orders: [order, ...state.orders],
    }));

    return order.id;
  },
}));
