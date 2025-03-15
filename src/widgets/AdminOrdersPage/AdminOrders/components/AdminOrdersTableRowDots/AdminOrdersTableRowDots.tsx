"use client";

import { useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { FadeInDown, useOnClickOutside } from "@/shared";
import { AdminOrdersTableRowDotsProps } from "./AdminOrdersTableRowDots.types";

import styles from "./AdminOrdersTableRowDots.module.scss";

const AdminOrdersTableRowDots = ({
    handleView
}: AdminOrdersTableRowDotsProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dotsRef = useRef<HTMLDivElement | null>(null);

    const handleTogglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    useOnClickOutside(dotsRef, handleClosePopup);

    return (
        <div ref={dotsRef} className={styles.dots}>
            <div className={styles.dots__icon} onClick={handleTogglePopup}>
                <EllipsisVertical
                    size={20}
                    strokeWidth={1.5}
                    absoluteStrokeWidth
                />
            </div>

            <AnimatePresence initial={false}>
                {isOpen ? (
                    <motion.div
                        initial={FadeInDown.initial}
                        animate={FadeInDown.animate}
                        exit={FadeInDown.exit}
                        className={styles.dots__options}
                    >
                        <button
                            className={styles.dots__btn}
                            onClick={handleView}
                        >
                            View
                        </button>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default AdminOrdersTableRowDots;
