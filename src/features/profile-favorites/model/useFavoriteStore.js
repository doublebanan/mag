import { create } from "zustand";
import { mockProducts } from "../../../shared/lib/mocks/product";

export const useFavoriteStore = create((set, get) => ({
    favorites: [mockProducts[7]], // Инициализация с одним товаром для примера

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
