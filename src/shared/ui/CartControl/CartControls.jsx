import { useCartStore } from "../../../features/cart/model/useCartStore";
import { Button } from "../../assets/Button/Button";
import { QtyBox } from "../QtyBox/QtyBox";
import { useToastStore } from "../../../shared/model/useToasterStore";

export const CartControls = ({ product, size, text = "Купить" }) => {
    const tgId = 1;
    const { addToCart, removeFromCart, actionLoading, cart } = useCartStore();
    const { showToast } = useToastStore();

    if (!product) return null;

    const count = product ? cart[product.id] || 0 : 0;

    return count === 0 ? (
        <Button
            size={size}
            onClick={() => {
                addToCart(tgId, product.id);
                showToast("Товар добавлен!");
            }}
            disabled={actionLoading}
        >
            {text}
        </Button>
    ) : (
        <QtyBox
            count={count}
            onDecrement={() => removeFromCart(tgId, product.id)}
            onIncrement={() => addToCart(tgId, product.id)}
            disabled={actionLoading}
        />
    );
};
