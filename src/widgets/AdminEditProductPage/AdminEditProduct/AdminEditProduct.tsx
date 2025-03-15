"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import cn from "classnames";

import { AdminEditProductFiles } from "@/widgets";
import { Button, Input, Select, Textarea } from "@/ui";

import {
    useEditProduct,
    useGetCategoriesList,
    useGetProductById
} from "@/apis";
import {
    ADMIN_PRODUCTS_ROUTE,
    AdminEditProductInputs,
    AdminEditProductSchema
} from "@/shared";

import styles from "./AdminEditProduct.module.scss";

const AdminEditProduct = () => {
    const { id } = useParams<{ id: string }>();

    const {
        handleSubmit,
        register,
        setValue,
        control,
        formState: { errors }
    } = useForm<AdminEditProductInputs>({
        resolver: yupResolver(AdminEditProductSchema)
    });

    const [removedFiles, setRemovedFiles] = useState<string[]>([]);

    const router = useRouter();

    const queryClient = useQueryClient();

    const { data: productData, isLoading: productIsLoading } =
        useGetProductById(id!);
    const { data: categoriesData, isLoading: categoriesIsLoading } =
        useGetCategoriesList();

    const { mutate: editProduct } = useEditProduct({
        onSuccess: () => {
            toast.success("Product updated successfully");
            queryClient.invalidateQueries({ queryKey: ["products"] });
            router.push(ADMIN_PRODUCTS_ROUTE);
        }
    });

    const onSubmit = (data: AdminEditProductInputs) => {
        const formData = new FormData();

        formData.append("title", data?.name);
        formData.append("articul", data?.articul);
        formData.append("categoryId", data?.category);
        formData.append("price", data?.price);
        formData.append("discountPrice", data?.discountPrice ?? "");
        formData.append("description", data?.description ?? "");

        if (data?.files && data?.files.length > 0) {
            data?.files?.forEach((file) => {
                formData.append("uploadedFiles", file);
            });
        }

        if (removedFiles && removedFiles.length > 0) {
            removedFiles.forEach((file) => {
                formData.append("deletedFiles", file);
            });
        }

        editProduct({ id: id!, data: formData });
    };

    useEffect(() => {
        if (!productIsLoading && productData) {
            setValue("name", productData?.data?.title);
            setValue("articul", productData?.data?.articul);
            setValue("category", productData?.data?.category?.id);
            setValue("price", productData?.data?.price.toString());
            setValue(
                "discountPrice",
                productData?.data?.discountPrice
                    ? productData?.data?.discountPrice.toString()
                    : ""
            );
            setValue("description", productData?.data?.description);
        }
    }, [productIsLoading, productData]);

    return (
        <section className={styles.admin}>
            <div className={cn(styles.admin__container, "container")}>
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Edit product</h2>
                    <form
                        className={styles.admin__form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.admin__row}>
                            {productData?.data?.images ? (
                                <Controller
                                    name="files"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error }
                                    }) => (
                                        <AdminEditProductFiles
                                            label="Images"
                                            data={
                                                productData?.data?.images || []
                                            }
                                            value={value ?? []}
                                            onChange={onChange}
                                            onChangeRemoved={setRemovedFiles}
                                            error={error?.message}
                                        />
                                    )}
                                />
                            ) : null}
                        </div>
                        <div className={styles.admin__row}>
                            <Input
                                label="Name"
                                error={errors.name?.message}
                                {...register("name")}
                            />
                            <Input
                                label="Articul"
                                error={errors.articul?.message}
                                {...register("articul")}
                            />
                            {!categoriesIsLoading ? (
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error }
                                    }) => (
                                        <Select
                                            label="Category"
                                            value={value}
                                            onChange={onChange}
                                            options={
                                                categoriesData?.data.map(
                                                    (category) => {
                                                        return {
                                                            value: category.id,
                                                            label: category.title
                                                        };
                                                    }
                                                ) || []
                                            }
                                            error={error?.message}
                                        />
                                    )}
                                />
                            ) : (
                                <div className={styles.admin__empty} />
                            )}
                        </div>
                        <div className={styles.admin__row}>
                            <Input
                                type="number"
                                label="Price"
                                error={errors.price?.message}
                                {...register("price")}
                            />
                            <Input
                                type="number"
                                label="Discount price"
                                error={errors.discountPrice?.message}
                                {...register("discountPrice")}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Textarea
                                label="Description"
                                error={errors.description?.message}
                                {...register("description")}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminEditProduct;
