"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Button, Input, PasswordInput, Popup } from "@/ui";

import { useChangeUser } from "@/apis";
import { AdminUsersPopupInputs, AdminUsersPopupSchema } from "@/shared";
import { AdminUsersEditPopupProps } from "./AdminUsersEditPopup.types";

import styles from "./AdminUsersEditPopup.module.scss";

const AdminUsersEditPopup = ({ user, onClose }: AdminUsersEditPopupProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<AdminUsersPopupInputs>({
        resolver: yupResolver(AdminUsersPopupSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            phone: user?.phoneNumber || ""
        }
    });

    const queryClient = useQueryClient();

    const { mutate: changeUser } = useChangeUser({
        onSuccess: () => {
            toast.success("User has been changed successfully");
            queryClient.invalidateQueries({ queryKey: ["users"] });
            onClose();
        }
    });

    const onSubmit = (data: AdminUsersPopupInputs) => {
        const requestData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            password: data.password
        };

        changeUser({
            id: user?.id,
            data: requestData
        });
    };

    return (
        <Popup onClose={onClose}>
            <div className={styles.popup}>
                <h3 className={styles.popup__title}>Edit user</h3>
                <form
                    className={styles.popup__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={styles.popup__row}>
                        <Input
                            placeholder="First name"
                            error={errors.firstName?.message}
                            {...register("firstName")}
                        />
                        <Input
                            placeholder="Last name"
                            error={errors.lastName?.message}
                            {...register("lastName")}
                        />
                    </div>
                    <div className={styles.popup__row}>
                        <Input
                            placeholder="Email"
                            error={errors.email?.message}
                            {...register("email")}
                        />
                        <Input
                            placeholder="Phone number"
                            error={errors.phone?.message}
                            {...register("phone")}
                        />
                    </div>

                    <div className={styles.popup__row}>
                        <PasswordInput
                            placeholder="Password"
                            error={errors.password?.message}
                            {...register("password")}
                        />
                        <PasswordInput
                            placeholder="Confirm password"
                            error={errors.confirmPassword?.message}
                            {...register("confirmPassword")}
                        />
                    </div>
                    <Button type="submit">Edit</Button>
                </form>
            </div>
        </Popup>
    );
};

export default AdminUsersEditPopup;
