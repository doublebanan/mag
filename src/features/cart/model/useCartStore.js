import { create } from "zustand";

import { useProductsStore } from "../../../entities/product/model/useProductStore";
import { cartService } from "../api/apiCart";

export const useCartStore = create((set, get) => ({
    cart: {},
    loading: false,
    error: null,

    //получить корзину ид тг или пустую

    fetchCart: async (tg_id) => {
        set({ loading: true, error: null });
        try {
            const data = await cartService.getCart(tg_id);
            set({ cart: data.products || {} });
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    getCart: () => get().cart || {},

    // добавить товар в корзину
    addToCart: async (tg_id, prod_id) => {
        set({ loading: true, error: null });
        try {
            await cartService.addToCart(tg_id, prod_id);

            await get().fetchCart(tg_id);
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },
    // удалить товар из корзины

    removeFromCart: async (tg_id, prod_id) => {
        set({ loading: true, error: null });
        try {
            await cartService.removeFromCart(tg_id, prod_id);
            await get().fetchCart(tg_id);
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    getTotalCount: () => {
        const cart = get().cart;
        return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    },

    isActive: (productId) => {
        return !!get().cart[productId];
    },

    getTotalPrice: () => {
        const cart = get().cart;
        const productsById = useProductsStore.getState().productsById;
        console.log(cart, productsById);
        return Object.entries(cart).reduce((sum, [id, count]) => {
            const product = productsById[id];
            const price = product ? Number(product.price) : 0;
            return sum + price * count;
        }, 0);
    },
}));
