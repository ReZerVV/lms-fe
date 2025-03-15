import * as yup from "yup";

import { REQUIRED_FIELD } from "@/shared";

export const AdminCategoriesCreatePopupSchema = yup.object({
    icon: yup
        .array()
        .nullable()
        .transform((value) => (value.length > 0 ? value : null))
        .required(REQUIRED_FIELD),
    title: yup.string().trim().required(REQUIRED_FIELD),
    description: yup.string().trim().required(REQUIRED_FIELD),
    isActive: yup.boolean()
});

export type AdminCategoriesCreatePopupinputs = yup.InferType<
    typeof AdminCategoriesCreatePopupSchema
>;
