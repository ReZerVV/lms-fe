"use client";

import { useState } from "react";

import { CatalogFilter } from "@/widgets";
import { ProductCard, SearchInput } from "@/components";
import { Pagination, Select } from "@/ui";

import { useGetCatalogProducts } from "@/apis";
import { paginationLimitsList, sortList } from "@/shared";
import { FiltersProps } from "./Catalog.types";

import styles from "./Catalog.module.scss";

const Catalog = () => {
    const [search, setSearch] = useState<string>("");
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [selectedSort, setSelectedSort] = useState<string>(sortList[0].value);
    const [filters, setFilters] = useState<FiltersProps>({});

    const { data: productsData, isLoading: productsIsLoading } =
        useGetCatalogProducts(
            activePage,
            perPage,
            search,
            selectedSort,
            filters.maxPrice,
            filters.minPrice,
            filters.categoryIds
        );

    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.catalog__inner}>
                    <div className={styles.catalog__row}>
                        <div className={styles.catalog__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.catalog__select}>
                            <Select
                                value={selectedSort}
                                onChange={setSelectedSort}
                                options={sortList}
                            />
                        </div>
                    </div>
                    <div className={styles.catalog__row}>
                        <div className={styles.catalog__column}>
                            <CatalogFilter onChange={setFilters} />
                        </div>
                        <div className={styles.catalog__column}>
                            {!productsIsLoading ? (
                                <>
                                    <div className={styles.catalog__products}>
                                        {productsData?.data.map((product) => (
                                            <ProductCard
                                                key={product?.id}
                                                data={product}
                                            />
                                        ))}
                                    </div>
                                    <div className={styles.catalog__pagination}>
                                        <Pagination
                                            currentPage={activePage}
                                            onChange={setActivePage}
                                            perPage={perPage}
                                            onChangePerPage={setPerPage}
                                            limitsList={paginationLimitsList}
                                            totalItems={
                                                productsData?.totalItems || 0
                                            }
                                        />
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
