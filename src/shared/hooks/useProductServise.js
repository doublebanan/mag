import { apiProducts } from "../api";

const _apiBase = "http://localhost:8000/products";

export const fetchProduct = (id) => {
    apiProducts.byId(id);
};

export const fetchProducts = (category) => {
    apiProducts.list(category);
};
