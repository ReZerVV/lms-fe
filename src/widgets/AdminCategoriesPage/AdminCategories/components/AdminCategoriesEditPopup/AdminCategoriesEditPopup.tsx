"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";

import { Button, Dropzone, FormField, Input, Popup, Switch } from "@/ui";

import { useChangeCategory } from "@/apis";
import {
    AdminCategoriesEditPopupInputs,
    AdminCategoriesEditPopupSchema,
    STORAGE_URL
} from "@/shared";
import { AdminCategoriesEditPopupProsp } from "./AdminCategoriesEditPopup.types";

import styles from "./AdminCategoriesEditPopup.module.scss";

const AdminCategoriesEditPopup = ({
    category,
    onClose
}: AdminCategoriesEditPopupProsp) => {
    const {
        handleSubmit,
        register,
        watch,
        control,
        formState: { errors }
    } = useForm<AdminCategoriesEditPopupInputs>({
        resolver: yupResolver(AdminCategoriesEditPopupSchema),
        defaultValues: {
            title: category.title || "",
            description: category.description || "",
            isActive: category.isActive || false
        }
    });

    const [imgUrl, setImgUrl] = useState<string | null>(
        category?.iconUrl ? `${STORAGE_URL}${category?.iconUrl}` : null
    );

    const queryClient = useQueryClient();

    const { mutate: changeCategory } = useChangeCategory({
        onSuccess: () => {
            toast.success("Category was successfully edited");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            onClose();
        }
    });

    const onSubmit = (data: AdminCategoriesEditPopupInputs) => {
        const formData = new FormData();

        if (data?.icon && data?.icon.length > 0) {
            formData.append("icon", data.icon[0]);
        }

        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append(
            "isActive",
            data.isActive ? data.isActive.toString() : "false"
        );

        changeCategory({ id: category.id, data: formData });
    };

    const watchIcon = watch("icon");

    useEffect(() => {
        if (watchIcon && watchIcon.length) {
            const url = URL.createObjectURL(watchIcon[0]);
            setImgUrl(url);
        }
    }, [watchIcon]);

    return (
        <Popup onClose={onClose}>
            <div className={styles.popup}>
                <h3 className={styles.popup__title}>Edit category</h3>
                <form
                    className={styles.popup__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles.popup__row}>
                        <div className={styles.popup__file_column}>
                            <Controller
                                name="icon"
                                control={control}
                                render={({
                                    field: { value, onChange },
                                    fieldState: { error }
                                }) => (
                                    <FormField
                                        label="Icon"
                                        error={error?.message}
                                    >
                                        <Dropzone
                                            value={value ?? []}
                                            onChange={onChange}
                                            accept={{
                                                "image/png": [".png"],
                                                "image/jpeg": [".jpeg", ".jpg"]
                                            }}
                                        >
                                            <div className={styles.popup__file}>
                                                {imgUrl ? (
                                                    <div
                                                        className={
                                                            styles.popup__file_img
                                                        }
                                                    >
                                                        <Image
                                                            src={imgUrl}
                                                            alt="icon"
                                                            fill
                                                        />
                                                    </div>
                                                ) : (
                                                    <div
                                                        className={
                                                            styles.popup__file_icon
                                                        }
                                                    >
                                                        <Upload
                                                            size={24}
                                                            strokeWidth={1.5}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </Dropzone>
                                    </FormField>
                                )}
                            />
                        </div>
                    </div>
                    <div className={styles.popup__row}>
                        <Input
                            label="Title"
                            error={errors.title?.message}
                            {...register("title")}
                        />
                        <Input
                            label="Short description"
                            error={errors.description?.message}
                            {...register("description")}
                        />
                    </div>
                    <div className={styles.popup__row}>
                        <div className={styles.popup__switch}>
                            <Controller
                                name="isActive"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <Switch
                                        value={value ?? false}
                                        onChange={onChange}
                                    />
                                )}
                            />
                            <p className={styles.popup__switch_text}>Active</p>
                        </div>
                    </div>
                    <Button className={styles.popup__btn} type="submit">
                        Edit
                    </Button>
                </form>
            </div>
        </Popup>
    );
};

export default AdminCategoriesEditPopup;
