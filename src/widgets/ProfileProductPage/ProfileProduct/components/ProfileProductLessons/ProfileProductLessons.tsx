import { ProfileProductLessonsItem } from "@/widgets";

import { ProfileProductLessonsProps } from "./ProfileProductLessons.types";

import styles from "./ProfileProductLessons.module.scss";

const ProfileProductLessons = ({
    courseLink,
    onChangeCourseLink,
    lessons
}: ProfileProductLessonsProps) => {
    return (
        <div className={styles.lessons}>
            {lessons?.map((lesson) => (
                <ProfileProductLessonsItem
                    key={lesson?.id}
                    lesson={lesson}
                    isActive={lesson?.fileUrl === courseLink}
                    onChange={onChangeCourseLink}
                />
            ))}
        </div>
    );
};

export default ProfileProductLessons;
