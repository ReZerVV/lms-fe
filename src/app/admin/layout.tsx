import { ReactNode } from "react";

import { ProtectedLayout, SidebarLayout } from "@/layouts";

import { USER_ROLES } from "@/shared";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectedLayout role={[USER_ROLES?.ADMIN]}>
            <SidebarLayout>{children}</SidebarLayout>
        </ProtectedLayout>
    );
};

export default layout;
