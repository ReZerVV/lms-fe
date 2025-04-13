"use client";

import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";

import { useDeleteLesson } from "@/apis";
import { AdminEditProductUploadVideosFileProps } from "./AdminEditProductUploadVideosFile.types";

import styles from "./AdminEditProductUploadVideosFile.module.scss";

const AdminEditProductUploadVideosFile = ({
    lesson
}: AdminEditProductUploadVideosFileProps) => {
    const { id } = useParams<{ id: string }>();

    const queryClient = useQueryClient();

    const { mutate: deleteLesson, isPending: deleteLessonIsPending } =
        useDeleteLesson({
            onSuccess: () => {
                toast.success("Lesson deleted successfully");
                queryClient.invalidateQueries({ queryKey: ["lessons"] });
            }
        });

    const handleDeleteLesson = () => {
        deleteLesson({ productId: id, id: lesson?.id });
    };

    return (
        <div className={styles.item}>
            <div className={styles.item__row}>
                <p className={styles.item__number}>{lesson?.number}</p>
                <h3 className={styles.item__title} title={lesson?.title}>
                    {lesson?.title}
                </h3>
            </div>
            <button
                className={styles.item__delete}
                disabled={deleteLessonIsPending}
                onClick={handleDeleteLesson}
            >
                <Trash size={20} strokeWidth={1.5} />
            </button>
        </div>
    );
};

export default AdminEditProductUploadVideosFile;
