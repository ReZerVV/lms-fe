import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { ProductService } from "@/services";
import { GetProductByIdResponse } from "@/shared";

const useGetProductById = (
    id: string
): UseQueryResult<GetProductByIdResponse, Error> => {
    return useQuery({
        queryKey: ["products", id],
        queryFn: () => ProductService.getProductById(id)
    });
};

export default useGetProductById;
