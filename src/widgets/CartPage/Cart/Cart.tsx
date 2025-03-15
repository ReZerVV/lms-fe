"use client";

import { useRouter } from "next/navigation";

import { CartItem } from "@/widgets";
import { Loader } from "@/components";
import { Button } from "@/ui";

import { useGetCart } from "@/apis";
import { useCartStore } from "@/store";
import {
    CATALOG_ROUTE,
    CHECKOUT_ROUTE,
    ICart,
    totalPriceCounter
} from "@/shared";

import styles from "./Cart.module.scss";

const Cart = () => {
    const cart = useCartStore((state) => state.cart);

    const { data: cartData, isLoading: cartIsLoading } = useGetCart(
        cart.map((item: ICart) => item.id)
    );

    const router = useRouter();

    const goCheckout = () => {
        router.push(CHECKOUT_ROUTE);
    };

    const goCatalog = () => {
        router.push(CATALOG_ROUTE);
    };

    return !cartIsLoading ? (
        <section className={styles.cart}>
            <div className="container">
                <div className={styles.cart__inner}>
                    {cartData && cartData?.data.length > 0 ? (
                        <>
                            <h2 className={styles.cart__title}>Cart</h2>
                            <div className={styles.cart__items}>
                                {cartData?.data.map((item) => (
                                    <CartItem key={item?.id} data={item} />
                                ))}
                            </div>
                            <div className={styles.cart__row}>
                                <p className={styles.cart__price}>
                                    Total:{" "}
                                    <span>
                                        $
                                        {totalPriceCounter(
                                            cartData,
                                            cart
                                        ).toFixed(2)}
                                    </span>
                                </p>
                                <Button onClick={goCheckout}>Checkout</Button>
                            </div>
                        </>
                    ) : (
                        <div className={styles.cart__column}>
                            <p className={styles.cart__text}>
                                Your cart is empty.
                            </p>
                            <Button
                                className={styles.cart__btn}
                                onClick={goCatalog}
                            >
                                Go Shopping
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    ) : (
        <Loader />
    );
};

export default Cart;
