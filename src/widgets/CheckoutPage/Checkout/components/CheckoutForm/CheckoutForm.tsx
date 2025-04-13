"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, Input } from "@/ui";

import { useCreateOrder } from "@/apis";
import { useAuthStore, useCartStore } from "@/store";
import { CheckoutFormInputs, CheckoutFormSchema, HOME_ROUTE } from "@/shared";

import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
    const user = useAuthStore((state) => state.user);

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<CheckoutFormInputs>({
        resolver: yupResolver(CheckoutFormSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            phone: user?.phoneNumber || ""
        }
    });

    const { cart, clearCart } = useCartStore((state) => state);

    const router = useRouter();

    const { mutate: createOrder } = useCreateOrder({
        onSuccess: () => {
            toast.success("Order created successfully");
            router.push(HOME_ROUTE);
            clearCart();
        }
    });

    const onSubmit = (data: CheckoutFormInputs) => {
        const requestData = {
            email: data?.email,
            phoneNumber: data?.phone,
            firstName: data?.firstName,
            lastName: data?.lastName,
            items:
                cart?.map((item) => {
                    return {
                        productId: item?.id,
                        quantity: item?.count
                    };
                }) || null
        };

        createOrder(requestData);
    };

    return (
        <form className={styles.checkout} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.checkout__row}>
                <Input
                    label="First name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <Input
                    label="Last name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
                <Input
                    label="Email"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <Input
                    label="Phone number"
                    error={errors.phone?.message}
                    {...register("phone")}
                />
            </div>

            <div className={styles.checkout__row}>
                <Button type="submit">Confirm Order</Button>
            </div>
        </form>
    );
};

export default CheckoutForm;
