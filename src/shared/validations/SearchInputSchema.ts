import * as yup from "yup";

export const SearchInputSchema = yup.object({
    search: yup.string().trim()
});
