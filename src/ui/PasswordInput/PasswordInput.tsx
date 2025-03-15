"use client";

import { forwardRef, Ref, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import cn from "classnames";

import { FormField } from "@/ui";

import { PasswordInputProps } from "./PasswordInput.types";

import styles from "./PasswordInput.module.scss";

const PasswordInput = forwardRef(
    (
        {
            label,
            className,
            variant = "primary",
            size = "md",
            error,
            isRequired = false,
            isDisabled = false,
            ...props
        }: PasswordInputProps,
        ref: Ref<HTMLInputElement>
    ) => {
        const [isPasswordVisible, setIsPasswordVisible] =
            useState<boolean>(false);

        const handleTogglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };

        return (
            <FormField label={label} size={size} error={error}>
                <label
                    className={cn(
                        styles.input__row,
                        className,
                        styles[`input__row_${variant}`],
                        styles[`input__row_${size}`],
                        {
                            [styles.input__row_disabled]: isDisabled,
                            [styles.input__row_error]: error
                        }
                    )}
                >
                    <input
                        ref={ref}
                        className={cn(
                            styles.input,
                            styles[`input__${variant}`],
                            styles[`input__${size}`],
                            {
                                [styles.input__disabled]: isDisabled
                            }
                        )}
                        type={isPasswordVisible ? "text" : "password"}
                        required={isRequired}
                        disabled={isDisabled}
                        {...props}
                    />
                    <button
                        type="button"
                        className={cn(styles.input__btn)}
                        disabled={isDisabled}
                        onClick={handleTogglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <Eye size={16} />
                        ) : (
                            <EyeOff size={16} />
                        )}
                    </button>
                </label>
            </FormField>
        );
    }
);

export default PasswordInput;
