const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

import { request } from "../../../shared/api";

export const cartService = {
    //Добавить товар
    addToCart: (tgId, prodId) => {
        const url = `${API_BASE}/add_to_cart/${tgId}/?prod_id=${prodId}`;
        return request(url, "POST");
    },
    //удалить товар
    removeFromCart: (tgId, prodId) => {
        const url = `${API_BASE}/delete_from_cart/?tg_id=${tgId}&prod_id=${prodId}`;
        return request(url, "DELETE");
    },
    //получить корзину
    getCart: (tgId) => {
        const url = `${API_BASE}/cart/get_cart/${tgId}/`;
        return request(url, "GET");
    },
};
