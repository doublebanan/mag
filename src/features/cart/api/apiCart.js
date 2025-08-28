import { request } from "../../../shared/api";

export const cartService = {
    //Добавить товар
    addToCart: (tg_id, prod_id) => {
        const url = `http://localhost:8000/cart/add_to_cart/${tg_id}/?prod_id=${prod_id}`;
        return request(url, "POST");
    },
    //удалить товар
    removeFromCart: (tg_id, prod_id) => {
        const url = `http://localhost:8000/cart/delete_from_cart/?tg_id=${tg_id}&prod_id=${prod_id}`;
        return request(url, "DELETE");
    },
    //получить корзину
    getCart: (tg_id) => {
        const url = `http://localhost:8000/cart/get_cart/${tg_id}/`;
        return request(url, "GET");
    },
};
