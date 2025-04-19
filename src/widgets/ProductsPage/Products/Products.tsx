"use client";

import { ProductsItem } from "@/widgets";

import { useGetCourses } from "@/apis";

import styles from "./Products.module.scss";

const Products = () => {
    const { data: coursesData, isLoading: coursesIsLoading } = useGetCourses();

    return (
        <section className={styles.profile}>
            <div className="container">
                <div className={styles.profile__inner}>
                    <h2 className={styles.profile__title}>My products</h2>
                    <div className={styles.profile__list}>
                        {!coursesIsLoading
                            ? coursesData?.data.map((item) => (
                                  <ProductsItem key={item?.id} item={item} />
                              ))
                            : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
