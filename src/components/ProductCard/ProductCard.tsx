"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, HeartOff } from "lucide-react";
import cn from "classnames";

import { useFavoriteStore } from "@/store";
import { PRODUCT_ROUTE, STORAGE_URL } from "@/shared";
import { ProductCardProps } from "./ProductCard.types";

import styles from "./ProductCard.module.scss";

const ProductCard = ({ data }: ProductCardProps) => {
    const { favorites, toggleFavorite } = useFavoriteStore((state) => state);

    const handleToggleFavorite = (e: any) => {
        e.preventDefault();
        toggleFavorite(data?.id);
    };

    return (
        <Link href={`${PRODUCT_ROUTE}/${data?.id}`} className={styles.product}>
            <div className={styles.product__img}>
                <Image
                    src={`${STORAGE_URL}${data?.images[0]}`}
                    alt="img"
                    fill
                />
                <button
                    className={styles.product__like}
                    onClick={(e) => handleToggleFavorite(e)}
                >
                    {favorites.includes(data?.id) ? (
                        <HeartOff size={18} strokeWidth={1.5} />
                    ) : (
                        <Heart size={18} strokeWidth={1.5} />
                    )}
                </button>
            </div>
            <h3 className={styles.product__title}>{data?.title}</h3>
            <p className={styles.product__description}>{data?.description}</p>
            <div className={styles.product__row}>
                <div
                    className={cn(styles.product__price, {
                        [styles.product__price_sale]: data?.discountPrice
                    })}
                >
                    ${data?.price}
                </div>
                {data?.discountPrice ? (
                    <div className={styles.product__sale}>
                        ${data?.discountPrice}
                    </div>
                ) : null}
            </div>
        </Link>
    );
};

export default ProductCard;
