import { create } from "zustand";
import { CartItem } from "./cartStore";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "Placed" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  paymentMethod: "Cash on Delivery" | "Online Payment";
  address: string;
  createdAt: string;
}

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => string;
  cancelOrder: (orderId: string) => boolean;
}

export const useOrderStore = create<OrderStore>()((set, get) => ({
  orders: [],

  addOrder: (order) => {
    set((state) => ({
      orders: [order, ...state.orders],
    }));

    return order.id;
  },

  cancelOrder: (orderId) => {
    const order = get().orders.find(
      (currentOrder) => currentOrder.id === orderId,
    );

    if (!order || order.status !== "Placed") {
      return false;
    }

    set((state) => ({
      orders: state.orders.map((currentOrder) =>
        currentOrder.id === orderId
          ? { ...currentOrder, status: "Cancelled" }
          : currentOrder,
      ),
    }));

    return true;
  },
}));
