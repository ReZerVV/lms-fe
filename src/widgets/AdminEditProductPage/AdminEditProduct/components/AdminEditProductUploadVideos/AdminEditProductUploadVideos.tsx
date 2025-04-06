"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import {
    AdminEditProductUploadVideosFile,
    AdminEditProductUploadVideosPopup
} from "@/widgets";
import { Button } from "@/ui";

import { useGetLessons } from "@/apis";

import styles from "./AdminEditProductUploadVideos.module.scss";

const AdminEditProductUploadVideos = () => {
    const { id } = useParams<{ id: string }>();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { data: lessonsData, isLoading: lessonsIsLoading } =
        useGetLessons(id);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={styles.upload}>
                <div className={styles.upload__head}>
                    <h3 className={styles.upload__head_title}>
                        Product lessons
                    </h3>
                    <Button onClick={handleOpen}>Add new</Button>
                </div>
                {!lessonsIsLoading ? (
                    <div className={styles.upload__items}>
                        {lessonsData?.data.map((lesson) => (
                            <AdminEditProductUploadVideosFile
                                key={lesson?.id}
                                lesson={lesson}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
            {isOpen ? (
                <AdminEditProductUploadVideosPopup handleClose={handleClose} />
            ) : null}
        </>
    );
};

export default AdminEditProductUploadVideos;
