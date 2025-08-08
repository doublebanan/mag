import { create } from "zustand";

import { fetchProducts } from "../../../shared/hooks/useProductServise";

export const useProductsStore = create((set, get) => ({
    productsByCategory: {},
    productsById: {},
    loading: false,
    error: null,

    loadProducts: async (category) => {
        const { productsByCategory, productsById } = get();
        if (productsByCategory[category]) {
            return;
        }
        set({ loading: true, error: null });
        try {
            const data = await fetchProducts(category);
            console.log("data из fetchProducts:", data);
            const arr = Array.isArray(data) ? data : [];
            const newProductsById = { ...productsById };
            arr.forEach((product) => {
                if (product && product.id !== undefined) {
                    newProductsById[String(product.id)] = product;
                }
            });
            set({
                productsByCategory: {
                    ...productsByCategory,
                    [category]: arr,
                },
                productsById: newProductsById,
            });
            console.log("productsById после загрузки:", newProductsById);
        } catch (e) {
            set({ error: e.message });
        } finally {
            set({ loading: false });
        }
    },

    getProducts: (category) => {
        const { productsByCategory } = get();

        return productsByCategory[category] || [];
    },

    getProductById: (id) => {
        const map = get().productsById;
        return map[String(id)] || null;
    },
    getAllProducts: () => {
        // Собрать все продукты в один массив (из productsById)
        const map = get().productsById;
        return Object.values(map);
    },
}));
