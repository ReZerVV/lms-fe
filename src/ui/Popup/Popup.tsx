"use client";

import { useEffect } from "react";
import cn from "classnames";
import { X } from "lucide-react";

import { Portal } from "@/shared";
import { PopupProps } from "./Popup.types";

import styles from "./Popup.module.scss";

const Popup = ({
    children,
    classNameWrapper,
    classNameInner,
    onClose
}: PopupProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <Portal>
            <div
                className={cn(styles.popup, classNameWrapper)}
                onClick={onClose}
            >
                <div
                    className={cn(styles.popup__inner, classNameInner)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.popup__close} onClick={onClose}>
                        <X size={20} strokeWidth={1.5} />
                    </button>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Popup;
