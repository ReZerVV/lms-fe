"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, Input } from "@/ui";

import { useChangeAddress } from "@/apis";
import { useAuthStore } from "@/store";
import { ChangeAddressResponse, ProfileAddressFormShema } from "@/shared";
import { ProfileAddressFormInputs } from "./ProfileAddressForm.types";

import styles from "./ProfileAddressForm.module.scss";

const ProfileAddressForm = () => {
    const { user, setUser } = useAuthStore((state) => state);

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ProfileAddressFormInputs>({
        resolver: yupResolver(ProfileAddressFormShema),
        defaultValues: {
            country: user?.address?.country ?? "",
            state: user?.address?.state ?? "",
            city: user?.address?.city ?? "",
            street: user?.address?.street ?? "",
            house: user?.address?.house ?? "",
            flat: user?.address?.flat ?? "",
            floor: user?.address?.floor ?? "",
            zip: user?.address?.zip ?? ""
        }
    });

    const { mutate: changeAddress } = useChangeAddress({
        onSuccess: (data: ChangeAddressResponse) => {
            setUser(data?.data);
            toast.success("Address has been changed successfully");
        }
    });

    const onSubmit = (data: ProfileAddressFormInputs) => {
        changeAddress(data);
    };

    return (
        <div className={styles.profile}>
            <h3 className={styles.profile__title}>My address</h3>
            <form
                className={styles.profile__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.profile__row}>
                    <Input
                        placeholder="Country"
                        error={errors.country?.message}
                        {...register("country")}
                    />
                    <Input
                        placeholder="State"
                        error={errors.state?.message}
                        {...register("state")}
                    />
                    <Input
                        placeholder="City"
                        error={errors.city?.message}
                        {...register("city")}
                    />
                </div>
                <div className={styles.profile__row}>
                    <Input
                        placeholder="Street"
                        error={errors.street?.message}
                        {...register("street")}
                    />
                    <div className={styles.profile__row}>
                        <Input
                            placeholder="House"
                            error={errors.house?.message}
                            {...register("house")}
                        />
                        <Input
                            placeholder="Flat"
                            error={errors.flat?.message}
                            {...register("flat")}
                        />
                        <Input
                            type="number"
                            placeholder="Floor"
                            error={errors.floor?.message}
                            {...register("floor")}
                        />
                        <Input
                            type="number"
                            placeholder="Zip"
                            error={errors.zip?.message}
                            {...register("zip")}
                        />
                    </div>
                </div>
                <Button className={styles.profile__btn} type="submit" isBlock>
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ProfileAddressForm;
