import { ILesson } from "@/shared";

export interface ProfileProductLessonsProps {
    courseLink: string;
    onChangeCourseLink: (value: string) => void;
    lessons: ILesson[];
}
