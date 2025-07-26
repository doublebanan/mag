import { useHttp } from "./http.hook";
import { useCallback } from "react";

const _apiBase = "http://localhost:8000/products";

export async function fetchProduct(id) {
    const res = await fetch(`${_apiBase}/get_product/${id}/`);
    if (!res.ok) throw new Error(`Fetch error ${res.status}`);
    return res.json();
}

export async function fetchProducts(category) {
    let url = `${_apiBase}/get_products/`;
    if (category) url += `?category=${encodeURIComponent(category)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch error ${res.status}`);
    return res.json();
}

export const useProductService = () => {
    const { loading, request, error, clearError } = useHttp();

    const getAllProducts = useCallback(async () => {
        let url = `${_apiBase}/get_products/`;
        const data = await request(url);
        return data;
    }, [request]);

    const getProduct = useCallback(
        async (id) => {
            const data = await request(`${_apiBase}/get_product/${id}/`);
            return data;
        },
        [request]
    );

    return {
        loading,
        error,
        clearError,
        getAllProducts,
        getProduct,
    };
};
