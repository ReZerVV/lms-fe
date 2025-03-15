import { forwardRef, Ref } from "react";
import cn from "classnames";

import { FormField } from "@/ui";

import { TextareaProps } from "./Textarea.types";

import styles from "./Textarea.module.scss";

const Textarea = forwardRef(
    (
        {
            label,
            className,
            size = "md",
            error,
            isRequired = false,
            isDisabled = false,
            ...props
        }: TextareaProps,
        ref: Ref<HTMLTextAreaElement>
    ) => {
        return (
            <FormField label={label} size={size} error={error}>
                <textarea
                    ref={ref}
                    className={cn(
                        styles.textarea,
                        styles[`textarea__${size}`],
                        {
                            [styles.textarea__disabled]: isDisabled
                        },
                        className
                    )}
                    required={isRequired}
                    disabled={isDisabled}
                    {...props}
                />
            </FormField>
        );
    }
);

export default Textarea;
