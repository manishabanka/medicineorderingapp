import { create } from "zustand";
import { Product } from "../types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;

  getSubtotal: () => number;
  getTotalMrp: () => number;
  getDiscount: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),

  getSubtotal: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ),

  getTotalMrp: () =>
    get().items.reduce(
      (total, item) => total + item.product.mrp * item.quantity,
      0,
    ),

  getDiscount: () => {
    const { getTotalMrp, getSubtotal } = get();

    return getTotalMrp() - getSubtotal();
  },

  // Selling price already includes the product-level discount.
  getTotal: () => get().getSubtotal(),

  getItemCount: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));
