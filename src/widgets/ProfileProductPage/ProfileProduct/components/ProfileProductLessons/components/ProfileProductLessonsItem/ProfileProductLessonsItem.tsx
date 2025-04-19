import cn from "classnames";

import { ProfileProductLessonsItemProps } from "./ProfileProductLessonsItem.types";

import styles from "./ProfileProductLessonsItem.module.scss";

const ProfileProductLessonsItem = ({
    lesson,
    isActive,
    onChange
}: ProfileProductLessonsItemProps) => {
    const handleChooseLesson = () => {
        onChange(lesson?.fileUrl);
    };

    return (
        <div
            className={cn(styles.item, {
                [styles.item__active]: isActive
            })}
            onClick={handleChooseLesson}
        >
            <h3 className={styles.item__title} title={lesson?.title}>
                {lesson?.title}
            </h3>
        </div>
    );
};

export default ProfileProductLessonsItem;
