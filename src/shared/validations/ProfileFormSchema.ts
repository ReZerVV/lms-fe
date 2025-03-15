import * as yup from "yup";

import { REQUIRED_FIELD } from "@/shared";

export const ProfileFormSchema = yup.object({
    firstName: yup.string().trim().required(REQUIRED_FIELD),
    lastName: yup.string().trim().required(REQUIRED_FIELD),
    phoneNumber: yup.string().trim()
});
