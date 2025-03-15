import { ReactNode } from "react";

import { ProfileSidebarLayout, ProtectedLayout } from "@/layouts";

import { USER_ROLES } from "@/shared";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectedLayout role={[USER_ROLES?.ADMIN, USER_ROLES?.USER]}>
            <ProfileSidebarLayout>{children}</ProfileSidebarLayout>
        </ProtectedLayout>
    );
};

export default layout;
