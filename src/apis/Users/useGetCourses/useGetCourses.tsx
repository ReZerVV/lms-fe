import {
    keepPreviousData,
    useQuery,
    UseQueryResult
} from "@tanstack/react-query";

import { UserService } from "@/services";
import { GetCoursesResponse } from "@/shared";

const useGetCourses = (): UseQueryResult<GetCoursesResponse, Error> => {
    return useQuery({
        queryKey: ["profile", "courses"],
        queryFn: () => UserService.getCourses(),
        placeholderData: keepPreviousData
    });
};

export default useGetCourses;
