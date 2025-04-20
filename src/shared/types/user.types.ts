import { ILesson } from "./lesson.types";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phoneNumber: string;
    address: {
        country: string;
        state: string;
        city: string;
        street: string;
        house: string;
        flat: string;
        floor: string;
        zip: string;
    };
    createdAt: string;
    updatedAt: string;
}

export interface GetMeResponse {
    success: boolean;
    data: IUser;
}

export interface ChangeProfileRequest {
    firstName: string;
    lastName: string;
    phoneNumber?: string | undefined;
}

export interface ChangeProfileResponse {
    success: boolean;
    data: IUser;
}

export interface ChangePasswordRequest {
    password: string;
    newPassword: string;
}

export interface ChangeAddressRequest {
    state?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    street?: string | undefined;
    house?: string | undefined;
    flat?: string | undefined;
    floor?: string | undefined;
    zip?: string | undefined;
}

export interface ChangeAddressResponse {
    success: boolean;
    data: IUser;
}

export interface GetUsersResponse {
    success: boolean;
    data: IUser[];
    page: number;
    totalPages: number;
    totalItems: number;
}

export interface ChangeUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    street?: string | undefined;
    house?: string | undefined;
    flat?: string | undefined;
    floor?: string | undefined;
    zip?: string | undefined;
    password?: string | undefined;
}

export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    street?: string | undefined;
    house?: string | undefined;
    flat?: string | undefined;
    floor?: string | undefined;
    zip?: string | undefined;
    password?: string | undefined;
}

export interface ICourse {
    id: string;
    articul: string;
    title: string;
    description: string;
    price: number;
    discountPrice: number;
    isActive: boolean;
    category: {
        id: string;
        isActive: boolean;
        iconUrl: string;
        title: string;
        description: string;
    };
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface GetCoursesResponse {
    success: boolean;
    data: ICourse[];
}

export interface GetCoursesByIdResponse {
    success: boolean;
    data: {
        id: string;
        articul: string;
        title: string;
        description: string;
        price: number;
        discountPrice: number;
        isActive: boolean;
        category: {
            id: string;
            isActive: boolean;
            iconUrl: string;
            title: string;
            description: string;
        };
        images: string[];
        lessons: ILesson[];
        createdAt: Date;
        updatedAt: Date;
    };
}
