"use client";

import { useState } from "react";

import { AdminEditProductUploadVideosPopupItem } from "@/widgets";
import { Dropzone, Popup } from "@/ui";

import { DownloadIcon } from "@/shared";
import { AdminEditProductUploadVideosPopupProps } from "./AdminEditProductUploadVideosPopup.types";

import styles from "./AdminEditProductUploadVideosPopup.module.scss";

const AdminEditProductUploadVideosPopup = ({
    handleClose
}: AdminEditProductUploadVideosPopupProps) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleCloseCheck = () => {
        if (files.length > 0) {
            const isConfirmed = confirm(
                "Are you sure you want to leave? Your upload will be cancelled."
            );

            if (isConfirmed) {
                handleClose();
            }
        } else {
            handleClose();
        }
    };

    return (
        <Popup onClose={handleCloseCheck}>
            <div className={styles.popup}>
                <h3 className={styles.popup__title}>Upload files</h3>
                <div className={styles.popup__dropzone_wrapper}>
                    <Dropzone
                        value={files}
                        onChange={setFiles}
                        accept={{
                            "video/mp4": [".mp4"],
                            "video/webm": [".webm"]
                        }}
                        maxFiles={10}
                        multiple
                    >
                        <div className={styles.popup__dropzone}>
                            <div className={styles.popup__dropzone_icon}>
                                <DownloadIcon />
                            </div>
                            <p className={styles.popup__dropzone_title}>
                                Click here to upload
                            </p>
                            <p className={styles.popup__dropzone_text}>
                                Supported formats: MP4, WEBM
                            </p>
                        </div>
                    </Dropzone>
                </div>
                <div className={styles.popup__list}>
                    {files.map((file, index) => (
                        <AdminEditProductUploadVideosPopupItem
                            key={index}
                            file={file}
                        />
                    ))}
                </div>
            </div>
        </Popup>
    );
};

export default AdminEditProductUploadVideosPopup;
