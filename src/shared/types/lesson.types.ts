export interface ILesson {
    id: string;
    title: string;
    number: number;
    fileUrl: string;
}

export interface GetLessonsResponse {
    success: boolean;
    data: ILesson[];
}
