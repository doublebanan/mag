export const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export const endpoints = {
    products: {
        list: () => `${API_BASE}/products/`,
        create: () => `${API_BASE}/products/`,
        byId: (product_id) => `${API_BASE}/products/${product_id}/`,
        deleteById: (product_id) => `${API_BASE}/products/${product_id}/`,
    },
    users: {
        getByTgId: (tg_id) => `${API_BASE}/get_user/${tg_id}/`,
        create: () => `${API_BASE}/create_user/`,
        favorites: (user_id) => `${API_BASE}/users/${user_id}/favorites/`,
        favAdd: (user_id, product_id) =>
            `${API_BASE}/users/${user_id}/favorites/${product_id}/`,
        favDelete: (user_id, product_id) =>
            `${API_BASE}/users/${user_id}/favorites/${product_id}/`,
    },
    cart: {
        add: (tg_id) => `${API_BASE}/add_to_cart/${tg_id}/`,
        get: (tg_id) => `${API_BASE}/get_cart/${tg_id}/`,
        deleteItem: (tg_id) => `${API_BASE}/delete_from_cart/${tg_id}/`,
        deleteAll: (tg_id) => `${API_BASE}/delete_cart/${tg_id}/`,
        deleteOne: (tg_id) => `${API_BASE}/delete_full_one_product/${tg_id}/`,
    },
};
