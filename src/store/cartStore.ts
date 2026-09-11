import { create } from "zustand";
import { Product } from "../types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  getCartTotal: () => number;
  getCartItemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const existingItem = get().cart.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cart: get().cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({
        cart: [...get().cart, { ...product, quantity: 1 }],
      });
    }
  },

  removeFromCart: (productId) => {
    set({
      cart: get().cart.filter((item) => item.id !== productId),
    });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      set({
        cart: get().cart.filter((item) => item.id !== productId),
      });
      return;
    }

    set({
      cart: get().cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    });
  },

  clearCart: () => {
    set({ cart: [] });
  },

  getCartTotal: () => {
    return get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  getCartItemCount: () => {
    return get().cart.reduce((count, item) => count + item.quantity, 0);
  },
}));
