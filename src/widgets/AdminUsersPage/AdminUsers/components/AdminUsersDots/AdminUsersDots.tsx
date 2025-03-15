"use client";

import { useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import { FadeInDown, useOnClickOutside } from "@/shared";
import { AdminUsersDotsProps } from "./AdminUsersDots.types";

import styles from "./AdminUsersDots.module.scss";

const AdminUsersDots = ({
    handleEditOpen,
    handleDelete
}: AdminUsersDotsProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dotsRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useOnClickOutside(dotsRef, handleClose);

    return (
        <div ref={dotsRef} className={styles.dots}>
            <div className={styles.dots__icon} onClick={handleToggle}>
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
                            onClick={handleEditOpen}
                        >
                            Edit
                        </button>
                        <button
                            className={cn(
                                styles.dots__btn,
                                styles.dots__btn_red
                            )}
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default AdminUsersDots;
