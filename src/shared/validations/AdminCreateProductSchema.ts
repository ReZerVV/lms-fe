import * as yup from "yup";

import { REQUIRED_FIELD } from "@/shared";

export const AdminCreateProductSchema = yup.object({
    files: yup
        .array()
        .nullable()
        .required(REQUIRED_FIELD)
        .transform((value) => (value.length > 0 ? value : null)),
    name: yup.string().trim().required(REQUIRED_FIELD),
    articul: yup.string().trim().required(REQUIRED_FIELD),
    category: yup.string().trim().required(REQUIRED_FIELD),
    price: yup.string().trim().required(REQUIRED_FIELD),
    discountPrice: yup.string().trim().nullable(),
    description: yup.string().trim().nullable()
});

export type AdminCreateProductInputs = yup.InferType<
    typeof AdminCreateProductSchema
>;
