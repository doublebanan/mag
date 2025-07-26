import { create } from "zustand";

import { fetchProduct } from "../../../shared/hooks/useProductServise";

export const useFavoriteStore = create((set, get) => ({
    favorites: [],
    error: null,
    loading: false,

    initCart: async (id) => {
        set({ loading: true, error: null });
        try {
            const product = await fetchProduct(id);
            set({ favorites: [product] });
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },
    // добавить товар в избранное
    addToFavorites: (product) => {
        set((state) => ({ favorites: [...state.favorites, { ...product }] }));
    },
    // удалить товар из избранного
    removeFromFavorites: (productId) => {
        set((state) => ({
            favorites: state.favorites.filter((item) => item.id !== productId),
        }));
    },
    isFavorite: (productId) => {
        return get().favorites.some((item) => item.id === productId);
    },

    toggleFavorite: (product) => {
        const state = get();
        const exists = state.favorites.some((item) => item.id === product.id);

        if (exists) {
            set({
                favorites: state.favorites.filter(
                    (item) => item.id !== product.id
                ),
            });
        } else {
            set({
                favorites: [...state.favorites, { ...product }],
            });
        }
    },
}));
