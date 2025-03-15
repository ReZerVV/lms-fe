"use client";

import { ProductsSlider } from "@/components";

import { useGetCatalogProducts } from "@/apis";

import styles from "./HomeNewProducts.module.scss";

const HomeNewProducts = () => {
    const { data: productsData, isLoading: productsIsLoading } =
        useGetCatalogProducts(1, 20, "", "created-desc");

    return !productsIsLoading &&
        productsData &&
        productsData?.data.length > 0 ? (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>Our Latest Products</h2>
                    <ProductsSlider products={productsData?.data || []} />
                </div>
            </div>
        </section>
    ) : null;
};

export default HomeNewProducts;
