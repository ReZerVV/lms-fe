import { GetLessonsResponse, instance } from "@/shared";

export default class LessonsService {
    static uploadVideo = (
        productId: string,
        data: FormData,
        signal: AbortController
    ): Promise<void> => {
        return instance.post(`${productId}/lessons`, data, {
            signal: signal.signal
        });
    };

    static getLessons = (id: string): Promise<GetLessonsResponse> => {
        return instance.get(`${id}/lessons`);
    };

    static deleteLesson = (productId: string, id: string): Promise<void> => {
        return instance.delete(`${productId}/lessons/${id}`);
    };
}
