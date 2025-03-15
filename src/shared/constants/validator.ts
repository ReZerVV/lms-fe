import * as yup from "yup";

import {
    INVALID_PASSWORD,
    MAX_LENGTH,
    MIN_LENGTH,
    PASSWORD_REGEX
} from "@/shared";

export const validator = {
    password: yup
        .string()
        .trim()
        .min(8, MIN_LENGTH())
        .max(32, MAX_LENGTH())
        .matches(PASSWORD_REGEX, INVALID_PASSWORD)
};
