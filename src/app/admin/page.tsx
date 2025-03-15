"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Loader } from "@/components";

import { ADMIN_DASHBOARD_ROUTE } from "@/shared";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(ADMIN_DASHBOARD_ROUTE);
    }, []);

    return <Loader />;
};

export default page;
