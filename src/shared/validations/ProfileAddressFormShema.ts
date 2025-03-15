import * as yup from "yup";

export const ProfileAddressFormShema = yup.object({
    country: yup.string().trim(),
    city: yup.string().trim(),
    state: yup.string().trim(),
    street: yup.string().trim(),
    house: yup.string().trim(),
    flat: yup.string().trim(),
    floor: yup.string().trim(),
    zip: yup.string().trim()
});
