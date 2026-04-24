// src/store/cartStore.js
import { create } from 'zustand';

// Fíjate bien en la palabra 'export' antes de 'const'
export const useCartStore = create((set) => ({
  cart: [],
  
  addToCart: (product) => set((state) => {
    const itemExists = state.cart.find((item) => item.id === product.id);
    
    if (itemExists) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  clearCart: () => set({ cart: [] }),
}));