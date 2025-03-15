import { ReactNode } from "react";

export interface IOption {
    value: string;
    label: ReactNode | string;
}

export interface SelectProps {
    value: string;
    onChange: (value: any) => void;
    options: IOption[];
    label?: string;
    placeholder?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    error?: any;
    isDisabled?: boolean;
}
