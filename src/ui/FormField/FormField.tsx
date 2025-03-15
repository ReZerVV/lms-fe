import { forwardRef, Ref } from "react";
import cn from "classnames";

import { FormFieldProps } from "./FormField.types";

import styles from "./FormField.module.scss";

const FormField = forwardRef(
    (
        {
            children,
            label,
            className,
            size = "md",
            error,
            ...props
        }: FormFieldProps,
        ref: Ref<HTMLDivElement>
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    styles.field,
                    className,
                    styles[`field__${size}`]
                )}
                {...props}
            >
                {label ? (
                    <p
                        className={cn(
                            styles.field__title,
                            styles[`field__title_${size}`]
                        )}
                    >
                        {label}
                    </p>
                ) : null}
                {children}
                {error ? (
                    <p
                        className={cn(
                            styles.field__text,
                            styles[`field__text_${size}`]
                        )}
                    >
                        {error}
                    </p>
                ) : null}
            </div>
        );
    }
);

export default FormField;
