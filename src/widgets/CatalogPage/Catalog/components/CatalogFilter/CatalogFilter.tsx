"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CatalogFilterCategories } from "@/widgets";
import { Button, Input } from "@/ui";

import { CatalogFilterInputs, CatalogFilterSchema } from "@/shared";
import { CatalogFilterProps } from "./CatalogFilter.types";

import styles from "./CatalogFilter.module.scss";
import { toast } from "react-toastify";

const CatalogFilter = ({ onChange }: CatalogFilterProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<CatalogFilterInputs>({
        resolver: yupResolver(CatalogFilterSchema)
    });

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectItem = (isChecked: boolean, id: string) => {
        setSelectedItems((prev) =>
            isChecked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const onSubmit = (data: CatalogFilterInputs) => {
        if (
            data?.maxPrice &&
            data?.minPrice &&
            Number(data?.maxPrice) < Number(data?.minPrice)
        )
            return toast.error("Max price should be greater than min price");

        onChange({
            maxPrice: data?.maxPrice,
            minPrice: data?.minPrice,
            categoryIds: selectedItems
        });
    };

    return (
        <form className={styles.catalog} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.catalog__column}>
                <h3 className={styles.catalog__title}>Category</h3>
                <CatalogFilterCategories
                    selectedItems={selectedItems}
                    onSelect={handleSelectItem}
                />
            </div>
            <div className={styles.catalog__column}>
                <h3 className={styles.catalog__title}>Price</h3>
                <div className={styles.catalog__row}>
                    <Input
                        type="number"
                        label="Min"
                        min={0}
                        error={errors.minPrice?.message}
                        {...register("minPrice")}
                    />
                    <Input
                        type="number"
                        label="Max"
                        min={0}
                        error={errors.maxPrice?.message}
                        {...register("maxPrice")}
                    />
                </div>
            </div>
            <Button className={styles.catalog__btn} type="submit">
                Apply
            </Button>
        </form>
    );
};

export default CatalogFilter;
