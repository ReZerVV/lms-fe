"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cn from "classnames";

import { useOnClickOutside } from "@/shared";
import { PaginationLimitsProps } from "./PaginationLimits.types";

import styles from "./PaginationLimits.module.scss";

const PaginationLimits = ({
    perPage,
    limitsList,
    onChange,
    onChangeActivePage
}: PaginationLimitsProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const limitsRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOnChange = (value: number) => {
        onChange(value);
        onChangeActivePage(1);
        setIsOpen(false);
    };

    useOnClickOutside(limitsRef, handleClose);

    return (
        <div ref={limitsRef} className={styles.limits}>
            <motion.div
                animate={{
                    opacity: isOpen ? 1 : 0,
                    width: isOpen ? "auto" : 0
                }}
                className={styles.limits__options}
            >
                {limitsList
                    ? limitsList.map((item, index) => (
                          <button
                              key={index}
                              className={styles.limits__btn}
                              onClick={() => handleOnChange(item)}
                          >
                              {item}
                          </button>
                      ))
                    : null}
            </motion.div>

            <div className={styles.limits__value} onClick={handleToggle}>
                <p className={styles.limits__value_text}>{perPage}</p>
                <div
                    className={cn(styles.limits__arrow, {
                        [styles.limits__arrow_open]: isOpen
                    })}
                >
                    <ChevronDown size={20} strokeWidth={1.5} />
                </div>
            </div>
        </div>
    );
};

export default PaginationLimits;
