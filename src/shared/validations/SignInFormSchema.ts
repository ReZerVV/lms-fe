import * as yup from "yup";

import { INVALID_EMAIL, REQUIRED_FIELD, validator } from "@/shared";

export const SignInFormSchema = yup.object({
    email: yup.string().trim().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    password: validator.password.required(REQUIRED_FIELD)
});
