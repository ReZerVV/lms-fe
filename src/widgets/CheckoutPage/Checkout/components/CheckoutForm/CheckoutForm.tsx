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
            phone: user?.phoneNumber || "",
            country: user?.address?.country || "",
            state: user?.address?.state || "",
            city: user?.address?.city || "",
            street: user?.address?.street || "",
            house: user?.address?.house || "",
            flat: user?.address?.flat || "",
            floor: user?.address?.floor || "",
            zip: user?.address?.zip || ""
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
            country: data?.country,
            state: data?.state,
            city: data?.city,
            street: data?.street,
            house: data?.house || null,
            flat: data?.flat || null,
            floor: data?.floor || null,
            zip: data?.zip || null,
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
                <Input
                    label="Country"
                    error={errors.country?.message}
                    {...register("country")}
                />
                <Input
                    label="State"
                    error={errors.state?.message}
                    {...register("state")}
                />
                <Input
                    label="City"
                    error={errors.city?.message}
                    {...register("city")}
                />
            </div>
            <div className={styles.checkout__row}>
                <Input
                    label="Street"
                    error={errors.street?.message}
                    {...register("street")}
                />
                <div className={styles.checkout__row}>
                    <Input
                        label="House"
                        error={errors.house?.message}
                        {...register("house")}
                    />
                    <Input
                        label="Flat"
                        error={errors.flat?.message}
                        {...register("flat")}
                    />
                    <Input
                        type="number"
                        label="Floor"
                        error={errors.floor?.message}
                        {...register("floor")}
                    />
                    <Input
                        type="number"
                        label="Zip"
                        error={errors.zip?.message}
                        {...register("zip")}
                    />
                </div>
            </div>
            <div className={styles.checkout__row}>
                <Button type="submit">Confirm Order</Button>
            </div>
        </form>
    );
};

export default CheckoutForm;
