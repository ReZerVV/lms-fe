"use client";

import { forwardRef, Ref } from "react";
import { Check } from "lucide-react";
import cn from "classnames";

import { CheckboxProps } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

const Checkbox = forwardRef(
    (
        {
            size = "md",
            isError = false,
            isDisabled = false,
            ...props
        }: CheckboxProps,
        ref: Ref<HTMLInputElement>
    ) => {
        return (
            <label className={styles.checkbox}>
                <input
                    ref={ref}
                    className={styles.checkbox__input}
                    type="checkbox"
                    disabled={isDisabled}
                    {...props}
                />
                <span
                    className={cn(
                        styles.checkbox__mark,
                        styles[`checkbox__mark_${size}`],
                        {
                            [styles.checkbox__mark_error]: isError,
                            [styles.checkbox__mark_disabled]: isDisabled
                        }
                    )}
                >
                    <Check
                        className={cn(
                            styles.checkbox__mark_icon,
                            styles[`checkbox__mark_icon_${size}`]
                        )}
                        size={20}
                        strokeWidth={1.5}
                        absoluteStrokeWidth
                    />
                </span>
            </label>
        );
    }
);

export default Checkbox;
