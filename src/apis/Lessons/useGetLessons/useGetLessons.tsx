import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { LessonsService } from "@/services";
import { GetLessonsResponse } from "@/shared";

const useGetLessons = (
    id: string
): UseQueryResult<GetLessonsResponse, Error> => {
    return useQuery({
        queryKey: ["lessons", id],
        queryFn: () => LessonsService.getLessons(id),
        placeholderData: keepPreviousData
    });
};

export default useGetLessons;
