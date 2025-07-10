import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    cart: [
        {
            id: "1",
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
            id: "2",
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
}));
