import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { UserService } from "@/services";
import { GetMeResponse } from "@/shared";

const useGetMe = (): UseQueryResult<GetMeResponse, Error> => {
    return useQuery({
        queryKey: ["me"],
        queryFn: () => UserService.getMe()
    });
};

export default useGetMe;
