"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Heart, HeartOff, ShoppingBag } from "lucide-react";
import { toast } from "react-toastify";
import cn from "classnames";

import { ProductSlider } from "@/widgets";
import { Loader, ProductCounter } from "@/components";
import { Button } from "@/ui";

import { useGetCatalogProductById } from "@/apis";
import { useCartStore, useFavoriteStore } from "@/store";

import styles from "./Product.module.scss";

const Product = () => {
    const { id } = useParams<{ id: string }>();

    const { cart, addProduct } = useCartStore((state) => state);
    const { favorites, toggleFavorite } = useFavoriteStore((state) => state);

    const [counterValue, setCounterValue] = useState<number>(
        cart?.find((item: any) => item?.id === id)?.count || 1
    );

    const { data: productData, isLoading: productIsLoading } =
        useGetCatalogProductById(id!);

    const handleToggleFavorite = () => {
        toggleFavorite(id);
    };

    const handleAddToCart = () => {
        addProduct({ id: id, count: counterValue });
        toast.success("Product added to cart");
    };

    return !productIsLoading ? (
        <section className={styles.product}>
            <div className="container">
                <div className={styles.product__inner}>
                    <div className={styles.product__row}>
                        <div className={styles.product__column}>
                            <ProductSlider
                                slides={productData?.data?.images || []}
                            />
                        </div>
                        <div className={styles.product__column}>
                            <h2 className={styles.product__title}>
                                {productData?.data?.title}
                            </h2>
                            <div className={styles.product__price_row}>
                                <p
                                    className={cn(styles.product__price, {
                                        [styles.product__price_sale]:
                                            productData?.data?.discountPrice
                                    })}
                                >
                                    ${productData?.data?.price}
                                </p>
                                {productData?.data?.discountPrice ? (
                                    <p className={styles.product__sale}>
                                        ${productData?.data?.discountPrice}
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.product__btns}>
                                <Button
                                    className={styles.product__btn}
                                    rightIcon={
                                        <ShoppingBag
                                            size={20}
                                            strokeWidth={2}
                                        />
                                    }
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </Button>
                                <Button
                                    className={styles.product__like_btn}
                                    onClick={handleToggleFavorite}
                                >
                                    {favorites?.includes(id) ? (
                                        <HeartOff size={20} strokeWidth={2} />
                                    ) : (
                                        <Heart size={20} strokeWidth={2} />
                                    )}
                                </Button>
                            </div>
                            <p className={styles.product__description}>
                                <span>Description:</span>
                                <br />
                                <textarea
                                    className={styles.product__textarea}
                                    value={productData?.data?.description}
                                    readOnly
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <Loader />
    );
};

export default Product;
