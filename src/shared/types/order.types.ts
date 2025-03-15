export interface CreateOrderRequest {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    city: string;
    street: string;
    house: string | null;
    flat: string | null;
    floor: string | null;
    zip: string | null;
    items: {
        productId: string;
        quantity: number;
    }[];
}

export interface ChangeOrderRequest {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    city: string;
    street: string;
    house: string | null;
    flat: string | null;
    floor: string | null;
    zip: string | null;
    items: {
        productId: string;
        quantity: number;
    }[];
}

export interface IHistoryProduct {
    id: string;
    title: string;
    quantity: number;
    price: number;
    createdAt: Date;
}

export interface IHistory {
    id: string;
    price: number;
    items: IHistoryProduct[];
    country: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    state: string;
    city: string;
    street: string;
    house: string;
    flat: string;
    floor: string;
    zip: string;
    totalPrice: number;
    createdAt: Date;
}

export interface GetHistoryByIdResponse {
    success: boolean;
    data: IHistory;
}

export interface GetHistoryResponse {
    success: boolean;
    data: IHistory[];
    page: number;
    totalPages: number;
    totalItems: number;
}
