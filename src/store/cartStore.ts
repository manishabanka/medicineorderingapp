import { create } from "zustand";
import { Product } from "../types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  // Cart actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;

  // Cart calculations
  getSubtotal: () => number;
  getTotalMrp: () => number;
  getDiscount: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],

  // Add product to cart
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

  // Remove product completely
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),

  // Increase quantity
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

  // Decrease quantity
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

  // Clear entire cart
  clearCart: () => set({ items: [] }),

  // Total selling price before discount
  getSubtotal: () =>
    get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ),

  // Total MRP
  getTotalMrp: () =>
    get().items.reduce(
      (total, item) => total + item.product.mrp * item.quantity,
      0,
    ),

  // Total discount
  getDiscount: () => {
    const { getTotalMrp, getSubtotal } = get();

    return getTotalMrp() - getSubtotal();
  },

  // Final payable amount
  getTotal: () => get().getSubtotal(),

  // Total number of products
  getItemCount: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));
