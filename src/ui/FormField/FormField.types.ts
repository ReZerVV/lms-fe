import { ReactNode } from "react";

export interface FormFieldProps {
    children: ReactNode;
    label?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    error?: any;
}
