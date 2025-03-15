"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button, Input, PasswordInput } from "@/ui";

import { useAuthSignUp } from "@/apis";
import { useAuthStore } from "@/store";
import {
    HOME_ROUTE,
    PASSWORDS_DO_NOT_MATCH,
    SignUpFormSchema,
    SignUpResponse
} from "@/shared";
import { SignUpFormInputs } from "./SignUpForm.types";

import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignUpFormSchema)
    });

    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const { mutate: signUp } = useAuthSignUp({
        onSuccess: (data: SignUpResponse) => {
            if (data) {
                setUser(data?.data);
                router.push(HOME_ROUTE);
            }
        }
    });

    const onSubmit = (data: SignUpFormInputs) => {
        if (data.password !== data.confirmPassword) {
            return toast.error(PASSWORDS_DO_NOT_MATCH);
        }

        const SignUpFormData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        };

        signUp(SignUpFormData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__row}>
                <Input
                    label="First Name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <Input
                    label="Last Name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
            </div>
            <Input
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />
            <div className={styles.form__row}>
                <PasswordInput
                    label="Password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <PasswordInput
                    label="Confirm Password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />
            </div>
            <Button className={styles.form__btn} type="submit">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;
