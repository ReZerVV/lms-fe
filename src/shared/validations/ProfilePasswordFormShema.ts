import * as yup from "yup";

import { CONFIRM_PASSWORD, REQUIRED_FIELD, validator } from "@/shared";

export const ProfilePasswordFormShema = yup.object({
    currentPassword: validator.password.required(REQUIRED_FIELD),
    newPassword: validator.password.required(REQUIRED_FIELD),
    confirmPassword: validator.password
        .required(REQUIRED_FIELD)
        .oneOf([yup.ref("newPassword")], CONFIRM_PASSWORD)
});
