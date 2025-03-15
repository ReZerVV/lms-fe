"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import { Button, Input, PasswordInput } from "@/ui";

import { useAuthSignIn } from "@/apis";
import { useAuthStore } from "@/store";
import { HOME_ROUTE, SignInFormSchema, SignInResponse } from "@/shared";
import { SignInFormInputs } from "./SignInForm.types";

import styles from "./SignInForm.module.scss";

const SignInForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignInFormSchema)
    });

    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const { mutate: signIn } = useAuthSignIn({
        onSuccess: (data: SignInResponse) => {
            if (data) {
                setUser(data?.data);
                router.push(HOME_ROUTE);
            }
        }
    });

    const onSubmit = (data: SignInFormInputs) => {
        const SignInFormData = {
            email: data.email,
            password: data.password
        };

        signIn(SignInFormData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />
            <PasswordInput
                label="Password"
                error={errors.password?.message}
                {...register("password")}
            />
            <Button className={styles.form__btn} type="submit">
                Sign In
            </Button>
        </form>
    );
};

export default SignInForm;
