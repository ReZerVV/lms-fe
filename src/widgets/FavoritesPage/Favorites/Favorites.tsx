"use client";

import { Loader, ProductCard } from "@/components";

import { useGetCatalogFavorites } from "@/apis";
import { useFavoriteStore } from "@/store";

import styles from "./Favorites.module.scss";

const Favorites = () => {
    const favorites = useFavoriteStore((state) => state.favorites);

    const { data: favoritesData, isLoading: favoritesIsLoading } =
        useGetCatalogFavorites(favorites);

    return !favoritesIsLoading ? (
        <section className={styles.favorites}>
            <div className="container">
                <div className={styles.favorites__inner}>
                    <h2 className={styles.favorites__title}>Favorites</h2>
                    <div className={styles.favorites__items}>
                        {favoritesData?.data.map((product) => (
                            <ProductCard key={product?.id} data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <Loader />
    );
};

export default Favorites;
