import { IUser } from "@/shared";

export interface SignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignUpResponse {
    success: boolean;
    data: IUser;
}

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    success: boolean;
    data: IUser;
}
