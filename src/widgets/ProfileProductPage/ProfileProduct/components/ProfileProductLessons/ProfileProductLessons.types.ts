import { ILesson } from "@/shared";

export interface ProfileProductLessonsProps {
    courseLink: string | null;
    onChangeCourseLink: (value: string | null) => void;
    lessons: ILesson[];
}
