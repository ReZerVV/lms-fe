"use client";

import { HomeCategoriesItem } from "@/widgets";

import { useGetCatalogCategories } from "@/apis";

import styles from "./HomeCategories.module.scss";

const HomeCategories = () => {
    const { data: categoriesData, isLoading: categoriesIsLoading } =
        useGetCatalogCategories(5);

    return !categoriesIsLoading &&
        categoriesData &&
        categoriesData?.data.length > 0 ? (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>
                        Explore Our Categories
                    </h2>
                    <div className={styles.home__items}>
                        {categoriesData?.data.map((item) => (
                            <HomeCategoriesItem key={item?.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default HomeCategories;
