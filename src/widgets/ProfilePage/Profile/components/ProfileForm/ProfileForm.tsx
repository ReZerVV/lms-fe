"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, Input } from "@/ui";

import { useChangeProfile } from "@/apis";
import { useAuthStore } from "@/store";
import { ChangeProfileResponse, ProfileFormSchema } from "@/shared";
import { ProfileFormInputs } from "./ProfileForm.types";

import styles from "./ProfileForm.module.scss";

const ProfileForm = () => {
    const { user, setUser } = useAuthStore((state) => state);

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ProfileFormInputs>({
        resolver: yupResolver(ProfileFormSchema),
        defaultValues: {
            firstName: user?.firstName ?? "",
            lastName: user?.lastName ?? "",
            phoneNumber: user?.phoneNumber ?? ""
        }
    });

    const { mutate: changeProfile } = useChangeProfile({
        onSuccess: (data: ChangeProfileResponse) => {
            setUser(data?.data);
            toast.success("Profile has been updated");
        }
    });

    const onSubmit = (data: ProfileFormInputs) => {
        changeProfile(data);
    };

    return (
        <div className={styles.profile}>
            <h3 className={styles.profile__title}>My account</h3>
            <form
                className={styles.profile__form}
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <Input
                    placeholder="Phone number"
                    error={errors.phoneNumber?.message}
                    {...register("phoneNumber")}
                />
                <Button className={styles.profile__btn} type="submit" isBlock>
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ProfileForm;
