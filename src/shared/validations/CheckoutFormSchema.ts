import * as yup from "yup";

import { INVALID_EMAIL, REQUIRED_FIELD } from "@/shared";

export const CheckoutFormSchema = yup.object({
    firstName: yup.string().trim().required(REQUIRED_FIELD),
    lastName: yup.string().trim().required(REQUIRED_FIELD),
    email: yup.string().trim().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    phone: yup.string().trim().required(REQUIRED_FIELD)
});

export type CheckoutFormInputs = yup.InferType<typeof CheckoutFormSchema>;
