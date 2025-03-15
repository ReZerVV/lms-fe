import {
    ChangeOrderRequest,
    CreateOrderRequest,
    GetHistoryByIdResponse,
    GetHistoryResponse,
    instance
} from "@/shared";

export default class OrderService {
    static createOrder = (data: CreateOrderRequest): Promise<void> => {
        return instance.post("orders/client", data);
    };

    static getHistoryByUser = (
        page: number,
        limit: number
    ): Promise<GetHistoryResponse> => {
        return instance.get(`order-history?page=${page}&limit=${limit}`);
    };

    static getHistoryById = (id: string): Promise<GetHistoryByIdResponse> => {
        return instance.get(`order-history/${id}`);
    };

    static getOrders = (
        page: number,
        limit: number,
        search: string
    ): Promise<GetHistoryResponse> => {
        return instance.get(
            `orders?page=${page}&limit=${limit}${search ? `&search=${search}` : ""}`
        );
    };

    static createAdminOrder = (data: CreateOrderRequest): Promise<void> => {
        return instance.post("orders", data);
    };

    static changeOrder = (
        id: string,
        data: ChangeOrderRequest
    ): Promise<void> => {
        return instance.patch(`orders/${id}`, data);
    };
}
