import {
    instance,
    SignInRequest,
    SignInResponse,
    SignUpRequest,
    SignUpResponse
} from "@/shared";

export default class AuthService {
    static signIn = (data: SignInRequest): Promise<SignInResponse> => {
        return instance.post("auth/login", data);
    };

    static signUp = (data: SignUpRequest): Promise<SignUpResponse> => {
        return instance.post("auth/register", data);
    };

    static logout = (): Promise<void> => {
        return instance.post("auth/logout");
    };
}
