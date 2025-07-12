import { create } from "zustand";

export const useFavoriteStore = create((set, get) => ({
    favorites: [
        {
            id: "13",
            name: "Вентилятор Aceline UWTF-4 голубой",
            price: 399,
            currency: "₽",
            category: "Вентиляторы",
            isHit: true,
            rating: {
                value: 4.7,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/26d0e711aaa09113c141cbf64614aa49/0743b8c34a035b464d83f8528d9f20ea1672a862c70e23db028fdcbbbc75a4ae.jpg",
            ],
            compareEnabled: true,
        },
        {
            id: "12",
            name: "Вентилятор Scarlett SC-DF111595 черный",
            price: 599,
            currency: "₽",
            category: "Вентиляторы",
            isHit: false,
            rating: {
                value: 4.56,
            },

            images: [
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/96aaa37c0164d62ecbb6338dd50f7df6/1077aeed794c9352b386674d678278e53c22f912616768ba6935a86f1cda4585.jpg",
            ],
            compareEnabled: true,
        },
    ],
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
