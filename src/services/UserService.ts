import {
    ChangeAddressRequest,
    ChangeAddressResponse,
    ChangePasswordRequest,
    ChangeProfileRequest,
    ChangeProfileResponse,
    ChangeUserRequest,
    CreateUserRequest,
    GetCoursesByIdResponse,
    GetCoursesResponse,
    GetMeResponse,
    GetUsersResponse,
    instance
} from "@/shared";

export default class UserService {
    static getMe = (): Promise<GetMeResponse> => {
        return instance.get("auth/me");
    };

    static changeProfile = (
        data: ChangeProfileRequest
    ): Promise<ChangeProfileResponse> => {
        return instance.patch("profile", data);
    };

    static changePassword = (data: ChangePasswordRequest): Promise<void> => {
        return instance.patch("profile/password", data);
    };

    static changeAddress = (
        data: ChangeAddressRequest
    ): Promise<ChangeAddressResponse> => {
        return instance.patch("profile/address", data);
    };

    static getCourses = (): Promise<GetCoursesResponse> => {
        return instance.get("profile/courses");
    };

    static getCourseById = (id: string): Promise<GetCoursesByIdResponse> => {
        return instance.get(`profile/courses/${id}`);
    };

    static getUsers = (
        page: number,
        limit: number,
        search: string
    ): Promise<GetUsersResponse> => {
        return instance.get(
            `users?page=${page}&limit=${limit}${search ? `&query=${search}` : ""}`
        );
    };

    static createUser = (data: CreateUserRequest): Promise<void> => {
        return instance.post("users", data);
    };

    static changeUser = (
        id: string,
        data: ChangeUserRequest
    ): Promise<void> => {
        return instance.patch(`users/${id}`, data);
    };

    static deleteUsers = (ids: string[]): Promise<void> => {
        return instance.post("users/delete", {
            ids: ids
        });
    };
}
