"use client";

import { useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";

import { ProductCounter } from "@/components";

import { useCartStore } from "@/store";
import { STORAGE_URL } from "@/shared";
import { CartItemProps } from "./CartItem.types";

import styles from "./CartItem.module.scss";

const CartItem = ({ data }: CartItemProps) => {
    const { cart, addProduct, removeProduct } = useCartStore((state) => state);

    const [count, setCount] = useState<number>(
        cart.find((item) => item.id === data.id)?.count || 1
    );

    const queryClient = useQueryClient();

    const handleRemove = () => {
        removeProduct(data.id);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
    };

    const handleOnChangeCount = (value: number) => {
        addProduct({ id: data?.id, count: value });
        setCount(value);
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cart__row}>
                <div className={styles.cart__img}>
                    <Image
                        src={`${STORAGE_URL}${data?.images[0]}`}
                        alt="img"
                        fill
                    />
                </div>
                <div className={styles.cart__column}>
                    <h3 className={styles.cart__title}>{data?.title}</h3>
                    <div className={styles.cart__row}>
                        <p className={styles.cart__text}>price:</p>
                        <p className={styles.cart__text}>
                            <span>
                                $
                                {data?.discountPrice
                                    ? data?.discountPrice * count
                                    : data?.price * count}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cart__column}>
                <button className={styles.cart__btn} onClick={handleRemove}>
                    <Trash strokeWidth={1} size={20} />
                </button>
                <ProductCounter
                    size="sm"
                    value={count}
                    onChange={handleOnChangeCount}
                />
            </div>
        </div>
    );
};

export default CartItem;
