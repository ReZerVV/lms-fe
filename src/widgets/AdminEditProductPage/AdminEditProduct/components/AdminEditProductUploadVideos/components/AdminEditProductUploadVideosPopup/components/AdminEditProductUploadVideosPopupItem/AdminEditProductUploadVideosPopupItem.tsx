"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import cn from "classnames";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Button, Input } from "@/ui";

import { useUploadLesson } from "@/apis";
import { ArrowUpIcon, RefreshIcon } from "@/shared";
import { AdminEditProductUploadVideosPopupItemProps } from "./AdminEditProductUploadVideosPopupItem.types";

import styles from "./AdminEditProductUploadVideosPopupItem.module.scss";

const AdminEditProductUploadVideosPopupItem = ({
    file
}: AdminEditProductUploadVideosPopupItemProps) => {
    const { id } = useParams<{ id: string }>();

    const [number, setNumber] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);

    const abortRef = useRef(new AbortController());

    const queryClient = useQueryClient();

    const {
        mutate: uploadFile,
        isSuccess: uploadFileIsSuccess,
        isPending: uploadFileIsPending,
        isError: uploadFileIsError
    } = useUploadLesson({
        onSuccess: () => {
            toast.success("File uploaded successfully");
            queryClient.invalidateQueries({ queryKey: ["lessons"] });
        }
    });

    const handleUpload = () => {
        const formData = new FormData();

        if (!title || !number) {
            return toast.error("Please fill in all fields");
        }

        formData.append("file", file);
        formData.append("number", number);
        formData.append("title", title);

        uploadFile({
            productId: id!,
            data: formData,
            signal: abortRef.current
        });
    };

    useEffect(() => {
        abortRef.current = new AbortController();

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            const isConfirmed = confirm(
                "Are you sure you want to leave? Your upload will be cancelled."
            );

            if (!isConfirmed) {
                e.preventDefault();
                e.returnValue = "";
            } else {
                abortRef.current.abort();
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload, {
            signal: abortRef.current.signal
        });

        return () => {
            abortRef.current.abort();
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <div className={styles.item}>
            <div className={styles.item__row}>
                <div className={styles.item__column}>
                    <h3 className={styles.item__title} title={file.name}>
                        {file.name}
                    </h3>
                    <p className={styles.item__size}>
                        {file.size >= 1024 * 1024 ? (
                            <>{(file.size / (1024 * 1024)).toFixed(2)} MB</>
                        ) : (
                            <>{(file.size / 1024).toFixed(2)} KB</>
                        )}
                    </p>
                </div>
                <div className={styles.item__row}>
                    <Input
                        className={styles.item__input}
                        type="number"
                        value={number ?? ""}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Episode number"
                    />
                    <Input
                        className={styles.item__input}
                        value={title ?? ""}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Episode title"
                    />
                </div>
            </div>
            <div className={styles.item__row}>
                {uploadFileIsPending ? (
                    <div
                        className={cn(
                            styles.item__badge,
                            styles.item__badge_pending
                        )}
                    >
                        Pending
                    </div>
                ) : null}
                {uploadFileIsSuccess && !uploadFileIsPending ? (
                    <div
                        className={cn(
                            styles.item__badge,
                            styles.item__badge_success
                        )}
                    >
                        Loaded
                    </div>
                ) : null}
                <Button
                    className={cn(styles.item__btn, {
                        [styles.item__btn_error]: uploadFileIsError
                    })}
                    leftIcon={
                        uploadFileIsError &&
                        !uploadFileIsPending &&
                        !uploadFileIsSuccess ? (
                            <RefreshIcon />
                        ) : (
                            <ArrowUpIcon />
                        )
                    }
                    isDisabled={uploadFileIsPending || uploadFileIsSuccess}
                    onClick={handleUpload}
                >
                    {!uploadFileIsSuccess &&
                    !uploadFileIsPending &&
                    !uploadFileIsError
                        ? "Upload"
                        : null}
                    {uploadFileIsError &&
                    !uploadFileIsPending &&
                    !uploadFileIsSuccess
                        ? "Retry"
                        : null}
                </Button>
            </div>
        </div>
    );
};

export default AdminEditProductUploadVideosPopupItem;
