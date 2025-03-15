"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { ScanBarcode } from "lucide-react";

import { HistoryViewPopup } from "@/widgets";
import { Button } from "@/ui";

import { HistoryItemProps } from "./HistoryItem.types";

import styles from "./HistoryItem.module.scss";

const HistoryItem = ({ index, item }: HistoryItemProps) => {
    const [isViewOpen, setIsViewOpen] = useState<boolean>(false);

    const handleOpenViewPopup = () => {
        setIsViewOpen(true);
    };

    const handleCloseViewPopup = () => {
        setIsViewOpen(false);
    };

    return (
        <>
            <div className={styles.history}>
                <div className={styles.history__column}>
                    <p className={styles.history__order}>Order #{index + 1}</p>
                    <p className={styles.history__date}>
                        {dayjs(item?.createdAt).format("DD.MM.YYYY")}
                    </p>
                </div>
                <Button
                    className={styles.history__btn}
                    onClick={handleOpenViewPopup}
                >
                    <ScanBarcode size={20} strokeWidth={1} />
                </Button>
            </div>
            {isViewOpen ? (
                <HistoryViewPopup item={item} onClose={handleCloseViewPopup} />
            ) : null}
        </>
    );
};

export default HistoryItem;
