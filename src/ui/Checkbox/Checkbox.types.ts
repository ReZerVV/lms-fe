import { InputHTMLAttributes } from "react";

export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "sm" | "md" | "lg";
    isError?: boolean;
    isDisabled?: boolean;
}
