import { ILesson } from "@/shared";

export interface ProfileProductLessonsItemProps {
    lesson: ILesson;
    onChange: (value: string | null) => void;
    isActive?: boolean;
}
