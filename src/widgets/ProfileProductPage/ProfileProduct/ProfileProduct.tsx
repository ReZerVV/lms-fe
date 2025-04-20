"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { ProfileProductLessons } from "@/widgets";
import { VideoPlayer } from "@/components";

import { useGetCourseById } from "@/apis";
import { STORAGE_URL, useMounted } from "@/shared";

import styles from "./ProfileProduct.module.scss";

const ProfileProduct = () => {
    const { id } = useParams<{ id: string }>();

    const [courseLink, setCourseLink] = useState<string>("");

    const { mounted } = useMounted();

    const { data: courseData, isLoading: courseIsLoading } =
        useGetCourseById(id);

    useEffect(() => {
        if (mounted && !courseIsLoading && courseData) {
            setCourseLink(courseData?.data?.lessons[0]?.fileUrl || "");
        }
    }, [mounted, courseIsLoading, courseData]);

    return !courseIsLoading ? (
        <section className={styles.lesson}>
            <div className="container">
                <div className={styles.lesson__inner}>
                    <div className={styles.lesson__row}>
                        <div className={styles.lesson__column}>
                            <VideoPlayer
                                src={`${STORAGE_URL}${courseLink}` || ""}
                            />
                            <p className={styles.lesson__text}>
                                {courseData?.data?.description}
                            </p>
                        </div>
                        <div className={styles.lesson__column}>
                            <ProfileProductLessons
                                courseLink={courseLink}
                                onChangeCourseLink={setCourseLink}
                                lessons={courseData?.data?.lessons || []}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default ProfileProduct;
