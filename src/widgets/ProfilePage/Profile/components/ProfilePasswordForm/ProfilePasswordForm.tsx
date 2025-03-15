"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, PasswordInput } from "@/ui";

import { useChangePassword } from "@/apis";
import { ProfilePasswordFormShema } from "@/shared";
import { ProfilePasswordFormInputs } from "./ProfilePasswordForm.types";

import styles from "./ProfilePasswordForm.module.scss";

const ProfilePasswordForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ProfilePasswordFormInputs>({
        resolver: yupResolver(ProfilePasswordFormShema)
    });

    const { mutate: changePassword } = useChangePassword({
        onSuccess: () => {
            toast.success("Password changed successfully");
        }
    });

    const onSubmit = (data: ProfilePasswordFormInputs) => {
        const requestData = {
            password: data.currentPassword,
            newPassword: data.newPassword
        };

        changePassword(requestData);
    };

    return (
        <div className={styles.profile}>
            <h3 className={styles.profile__title}>My password</h3>
            <form
                className={styles.profile__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <PasswordInput
                    placeholder="Current password"
                    error={errors.currentPassword?.message}
                    {...register("currentPassword")}
                />
                <PasswordInput
                    placeholder="New password"
                    error={errors.newPassword?.message}
                    {...register("newPassword")}
                />
                <PasswordInput
                    placeholder="Confirm password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />
                <Button className={styles.profile__btn} type="submit" isBlock>
                    Change
                </Button>
            </form>
        </div>
    );
};

export default ProfilePasswordForm;
