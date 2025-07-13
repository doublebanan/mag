import { create } from "zustand";
import { mockProducts } from "../../../shared/lib/mocks/product";

export const useCartStore = create((set, get) => ({
    cart: [mockProducts[6]], // Инициализация с одним товаром для примера

    // добавить товар в корзину
    addToCart: (product) => {
        set((state) => ({ cart: [...state.cart, { ...product }] }));
    },
    // удалить товар из корзины

    removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        }));
    },

    clearCart: () => {
        set({ cart: [] });
    },

    // подсчет общей стоимости

    getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price, 0);
    },

    getTotalCount: () => {
        return get().cart.length;
    },

    isActive: (productId) => {
        return get().cart.some((item) => item.id === productId);
    },

    toggleCart: (product) => {
        const state = get();
        const exists = state.cart.some((item) => item.id === product.id);
        if (exists) {
            set({
                cart: state.cart.filter((item) => item.id !== product.id),
            });
        } else {
            set({
                cart: [...state.cart, { ...product }],
            });
        }
    },
}));
