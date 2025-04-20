import { ILesson } from "@/shared";

export interface ProfileProductLessonsItemProps {
    lesson: ILesson;
    onChange: (value: string) => void;
    isActive?: boolean;
}
