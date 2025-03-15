import * as yup from "yup";

import {
    INVALID_EMAIL,
    PASSWORDS_DO_NOT_MATCH,
    REQUIRED_FIELD,
    validator
} from "@/shared";

export const AdminUsersPopupSchema = yup.object({
    firstName: yup.string().trim().required(REQUIRED_FIELD),
    lastName: yup.string().trim().required(REQUIRED_FIELD),
    email: yup.string().trim().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    phone: yup.string().trim(),
    country: yup.string().trim(),
    state: yup.string().trim(),
    city: yup.string().trim(),
    street: yup.string().trim(),
    house: yup.string().trim(),
    flat: yup.string().trim(),
    floor: yup.string().trim(),
    zip: yup.string().trim(),
    password: yup
        .string()
        .trim()
        .when({
            is: (exists: string) => !!exists,
            then: () => validator.password.required(REQUIRED_FIELD),
            otherwise: (rule) => rule.notRequired()
        }),
    confirmPassword: yup
        .string()
        .trim()
        .oneOf([yup.ref("password")], PASSWORDS_DO_NOT_MATCH)
});

export type AdminUsersPopupInputs = yup.InferType<typeof AdminUsersPopupSchema>;
