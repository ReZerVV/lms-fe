"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Upload } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Button, Dropzone, FormField, Input, Popup, Switch } from "@/ui";

import { useCreateCategory } from "@/apis";
import {
    AdminCategoriesCreatePopupinputs,
    AdminCategoriesCreatePopupSchema
} from "@/shared";
import { AdminCategoriesCreatePopupProps } from "./AdminCategoriesCreatePopup.types";

import styles from "./AdminCategoriesCreatePopup.module.scss";

const AdminCategoriesCreatePopup = ({
    onClose
}: AdminCategoriesCreatePopupProps) => {
    const {
        handleSubmit,
        register,
        watch,
        control,
        formState: { errors }
    } = useForm<AdminCategoriesCreatePopupinputs>({
        resolver: yupResolver(AdminCategoriesCreatePopupSchema)
    });

    const [imgUrl, setImgUrl] = useState<string | null>(null);

    const queryClient = useQueryClient();

    const { mutate: createCategory } = useCreateCategory({
        onSuccess: () => {
            toast.success("Category created successfully");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
            onClose();
        }
    });

    const onSubmit = (data: AdminCategoriesCreatePopupinputs) => {
        const formData = new FormData();

        formData.append("icon", data.icon[0]);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append(
            "isActive",
            data.isActive ? data.isActive.toString() : "false"
        );

        createCategory(formData);
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
                <h3 className={styles.popup__title}>Create category</h3>
                <form
                    className={styles.popup__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles.popup__row}>
                        <div className={styles.popup__file_column}>
                            <Controller
                                name="icon"
                                control={control}
                                defaultValue={[]}
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
                                defaultValue={false}
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
                        Create
                    </Button>
                </form>
            </div>
        </Popup>
    );
};

export default AdminCategoriesCreatePopup;
