import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { UserService } from "@/services";

const useGetUsers = (page: number, limit: number, search: string) => {
    return useQuery({
        queryKey: ["users", page, limit, search],
        queryFn: () => UserService.getUsers(page, limit, search),
        placeholderData: keepPreviousData
    });
};

export default useGetUsers;
