import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { GetCoursesByIdResponse } from "@/shared";

const useGetCourseById = (
    id: string
): UseQueryResult<GetCoursesByIdResponse, Error> => {
    return useQuery({
        queryKey: ["profile", "courses", id],
        queryFn: () => UserService.getCourseById(id),
        placeholderData: keepPreviousData
    });
};

export default useGetCourseById;
