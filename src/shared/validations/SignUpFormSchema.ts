import * as yup from "yup";

import { INVALID_EMAIL, REQUIRED_FIELD, validator } from "@/shared";

export const SignUpFormSchema = yup.object({
    firstName: yup.string().trim().required(REQUIRED_FIELD),
    lastName: yup.string().trim().required(REQUIRED_FIELD),
    email: yup.string().trim().email(INVALID_EMAIL).required(REQUIRED_FIELD),
    password: validator.password.required(REQUIRED_FIELD),
    confirmPassword: validator.password.required(REQUIRED_FIELD)
});
