"use client";

import { forwardRef, Ref, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cn from "classnames";

import { FormField } from "@/ui";

import { FadeInDown, useOnClickOutside } from "@/shared";
import { IOption, SelectProps } from "./Select.types";

import styles from "./Select.module.scss";

const Select = forwardRef(
    (
        {
            value,
            onChange,
            options,
            className,
            label,
            placeholder = "",
            size = "md",
            error,
            isDisabled = false,
            ...props
        }: SelectProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const [isOpen, setIsOpen] = useState<boolean>(false);

        const selectRef = useRef<HTMLDivElement | null>(null);

        const handleToggle = () => {
            if (!isDisabled) {
                setIsOpen(!isOpen);
            }
        };

        const handleClose = () => {
            setIsOpen(false);
        };

        const handleOnChange = (value: string) => {
            onChange(value);
            setIsOpen(false);
        };

        useOnClickOutside(selectRef, handleClose);

        return (
            <FormField ref={selectRef} label={label} size={size} error={error}>
                <div ref={ref} className={styles.select} {...props}>
                    <div
                        className={cn(
                            styles.select__head,
                            className,
                            styles[`select__head_${size}`],
                            {
                                [styles.select__disabled]: isDisabled,
                                [styles.select__error]: error
                            }
                        )}
                        onClick={handleToggle}
                    >
                        <div
                            className={cn(
                                styles.select__head_value,
                                styles[`select__head_value_${size}`]
                            )}
                        >
                            <div className={styles.select__head_value}>
                                {options.find(
                                    (option) => option.value === value
                                )?.label || placeholder}
                            </div>
                        </div>
                        <div
                            className={cn(
                                styles.select__arrow,
                                styles[`select__arrow_${size}`],
                                {
                                    [styles.select__arrow_active]: isOpen
                                }
                            )}
                        >
                            <ChevronDown size={20} strokeWidth={1.5} />
                        </div>
                    </div>

                    <AnimatePresence initial={false}>
                        {isOpen ? (
                            <motion.div
                                initial={FadeInDown.initial}
                                animate={FadeInDown.animate}
                                exit={FadeInDown.exit}
                                className={styles.select__options}
                            >
                                <ul className={styles.select__options_list}>
                                    {options.map(
                                        (option: IOption, index: number) => (
                                            <li
                                                key={index}
                                                className={cn(
                                                    styles.select__options_item,
                                                    styles[
                                                        `select__options_item_${size}`
                                                    ]
                                                )}
                                                onClick={() =>
                                                    handleOnChange(option.value)
                                                }
                                            >
                                                {option.label}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
            </FormField>
        );
    }
);

export default Select;
