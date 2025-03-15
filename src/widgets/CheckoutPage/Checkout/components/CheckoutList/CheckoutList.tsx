"use client";

import { useGetCart } from "@/apis";
import { useCartStore } from "@/store";
import { ICart, IProduct, totalPriceCounter } from "@/shared";

import styles from "./CheckoutList.module.scss";

const CheckoutList = () => {
    const cart = useCartStore((state) => state.cart);

    const { data: cartData, isLoading: cartIsLoading } = useGetCart(
        cart.map((item: ICart) => item.id)
    );

    return (
        <div className={styles.checkout}>
            <h3 className={styles.checkout__title}>Products</h3>
            {!cartIsLoading ? (
                <ul className={styles.checkout__list}>
                    {cartData?.data.map((item: IProduct) => {
                        const count =
                            cart.find((i) => i.id === item.id)?.count || 1;

                        return (
                            <li
                                key={item?.id}
                                className={styles.checkout__list_item}
                            >
                                <p className={styles.checkout__item_text}>
                                    {item?.title}
                                </p>
                                <p className={styles.checkout__item_text}>
                                    <span>
                                        $
                                        {item?.discountPrice
                                            ? item?.discountPrice
                                            : item?.price}{" "}
                                        x {count}
                                    </span>
                                </p>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
            <div className={styles.checkout__row}>
                <p className={styles.checkout__total}>Total:</p>
                <p className={styles.checkout__total}>
                    ${totalPriceCounter(cartData, cart).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default CheckoutList;
