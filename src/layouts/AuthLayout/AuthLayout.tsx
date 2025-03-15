"use client";

import { ReactNode, useEffect, useState } from "react";

import { Loader } from "@/components";

import { useGetMe } from "@/apis";
import { useAuthStore } from "@/store";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const setUser = useAuthStore((state) => state.setUser);

    const { data: meData, isLoading: meIsLoading } = useGetMe();

    useEffect(() => {
        if (!meIsLoading) {
            if (meData) {
                setUser(meData?.data);
            }

            setIsLoading(false);
        }
    }, [meData, meIsLoading]);

    return !isLoading ? <>{children}</> : <Loader />;
};

export default AuthLayout;
