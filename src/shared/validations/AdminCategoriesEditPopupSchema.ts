import * as yup from "yup";

import { REQUIRED_FIELD } from "@/shared";

export const AdminCategoriesEditPopupSchema = yup.object({
    icon: yup.array().nullable(),
    title: yup.string().trim().required(REQUIRED_FIELD),
    description: yup.string().trim().required(REQUIRED_FIELD),
    isActive: yup.boolean()
});

export type AdminCategoriesEditPopupInputs = yup.InferType<
    typeof AdminCategoriesEditPopupSchema
>;
