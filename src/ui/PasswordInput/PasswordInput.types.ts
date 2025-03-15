import { InputHTMLAttributes } from "react";

export interface PasswordInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    className?: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    error?: any;
    isRequired?: boolean;
    isDisabled?: boolean;
}
