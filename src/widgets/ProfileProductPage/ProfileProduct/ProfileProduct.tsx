"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { ProfileProductLessons } from "@/widgets";
import { VideoPlayer } from "@/components";

import { useGetCourseById } from "@/apis";

import styles from "./ProfileProduct.module.scss";

const ProfileProduct = () => {
    const { id } = useParams<{ id: string }>();

    const [courseLink, setCourseLink] = useState<string | null>(null);

    const { data: courseData, isLoading: courseIsLoading } =
        useGetCourseById(id);

    return !courseIsLoading ? (
        <section className={styles.lesson}>
            <div className="container">
                <div className={styles.lesson__inner}>
                    <div className={styles.lesson__row}>
                        <div className={styles.lesson__column}>
                            <VideoPlayer src={courseLink || ""} />
                            <p className={styles.lesson__text}>
                                {courseData?.description}
                            </p>
                        </div>
                        <div className={styles.lesson__column}>
                            <ProfileProductLessons
                                courseLink={courseLink}
                                onChangeCourseLink={setCourseLink}
                                lessons={courseData?.lessons || []}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default ProfileProduct;
