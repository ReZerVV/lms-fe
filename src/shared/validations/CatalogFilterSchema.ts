import * as yup from "yup";

export const CatalogFilterSchema = yup.object({
    maxPrice: yup.string().trim().nullable(),
    minPrice: yup.string().trim().nullable()
});

export type CatalogFilterInputs = yup.InferType<typeof CatalogFilterSchema>;
