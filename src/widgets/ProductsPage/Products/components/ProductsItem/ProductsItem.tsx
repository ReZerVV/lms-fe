"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/ui";

import { PROFILE_PRODUCTS_ROUTE } from "@/shared";
import { ProductsItemProps } from "./ProductsItem.types";

import styles from "./ProductsItem.module.scss";

const ProductsItem = ({ item }: ProductsItemProps) => {
    const router = useRouter();

    const handleGoToLessons = () => {
        router.push(`${PROFILE_PRODUCTS_ROUTE}/${item?.id}`);
    };
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{item?.title}</h3>

            <Button onClick={handleGoToLessons}>Watch lessons</Button>
        </div>
    );
};

export default ProductsItem;
