"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Loader } from "@/components";

import { useAuthStore } from "@/store";
import { SIGN_IN_ROUTE } from "@/shared";
import { ProtectedLayoutProps } from "./ProtectedLayout.types";

const ProtectedLayout = ({
    children,
    role,
    redirectPath = SIGN_IN_ROUTE
}: ProtectedLayoutProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            return router.push(redirectPath);
        }

        if (!role.includes(user?.role)) {
            return router.push(redirectPath);
        }

        setIsLoading(false);
    }, [user]);

    return !isLoading ? <>{children}</> : <Loader />;
};

export default ProtectedLayout;
