"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import cn from "classnames";

import { AdminCreateProductFiles } from "@/widgets";
import { Button, Input, Select, Textarea } from "@/ui";

import { useCreateProduct, useGetCategoriesList } from "@/apis";
import {
    ADMIN_PRODUCTS_ROUTE,
    AdminCreateProductInputs,
    AdminCreateProductSchema
} from "@/shared";

import styles from "./AdminCreateProduct.module.scss";

const AdminCreateProduct = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm<AdminCreateProductInputs>({
        resolver: yupResolver(AdminCreateProductSchema)
    });

    const router = useRouter();

    const queryClient = useQueryClient();

    const { data: categoriesData, isLoading: categoriesIsLoading } =
        useGetCategoriesList();

    const { mutate: createProduct } = useCreateProduct({
        onSuccess: () => {
            toast.success("Product created successfully");
            queryClient.invalidateQueries({ queryKey: ["products"] });
            router.push(ADMIN_PRODUCTS_ROUTE);
        }
    });

    const onSubmit = (data: AdminCreateProductInputs) => {
        const formData = new FormData();

        formData.append("title", data?.name);
        formData.append("articul", data?.articul);
        formData.append("categoryId", data?.category);

        if (data?.description) {
            formData.append("description", data?.description);
        }

        formData.append("price", data?.price);

        if (data?.discountPrice) {
            formData.append("discountPrice", data?.discountPrice);
        }

        data?.files?.forEach((file) => {
            formData.append("images", file);
        });

        createProduct(formData);
    };

    return (
        <section className={styles.admin}>
            <div className={cn(styles.admin__container, "container")}>
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Create product</h2>
                    <form
                        className={styles.admin__form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.admin__row}>
                            <Controller
                                name="files"
                                control={control}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <AdminCreateProductFiles
                                        label="Images"
                                        value={value ?? []}
                                        onChange={onChange}
                                        error={error?.message}
                                    />
                                )}
                            />
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
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminCreateProduct;
