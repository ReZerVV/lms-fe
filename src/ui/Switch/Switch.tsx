"use client";

import { forwardRef, Ref } from "react";
import { motion } from "framer-motion";
import cn from "classnames";

import { SwitchProps } from "./Switch.types";

import styles from "./Switch.module.scss";

const Switch = forwardRef(
    ({ value, onChange }: SwitchProps, ref: Ref<HTMLDivElement>) => {
        const handleOnChange = () => {
            onChange(!value);
        };

        return (
            <div
                ref={ref}
                className={cn(styles.switch, {
                    [styles.switch__off]: !value
                })}
                onClick={handleOnChange}
            >
                <motion.div
                    animate={{
                        x: value ? 18 : 0
                    }}
                    transition={{
                        type: "ease",
                        duration: 0.2
                    }}
                    className={styles.switch__circle}
                />
            </div>
        );
    }
);

export default Switch;
