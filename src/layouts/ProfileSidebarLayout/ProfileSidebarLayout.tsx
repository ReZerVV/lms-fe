"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";
import { LogOut } from "lucide-react";

import { Sidebar } from "@/components";
import { Button } from "@/ui";

import { useAuthLogOut } from "@/apis";
import { useAuthStore } from "@/store";
import { HOME_ROUTE, profileMenuList } from "@/shared";

import styles from "./ProfileSidebarLayout.module.scss";

const ProfileSidebarLayout = ({ children }: { children: ReactNode }) => {
    const setUser = useAuthStore((state) => state.setUser);
    const router = useRouter();

    const { mutate: logout } = useAuthLogOut({
        onSuccess: () => {
            setUser(null);
            router.push(HOME_ROUTE);
        }
    });

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={styles.layout}>
            <div className={styles.layout__column}>
                <Sidebar list={profileMenuList} />
                <div className={styles.layout__bottom}>
                    <Button
                        leftIcon={<LogOut size={20} />}
                        isBlock
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
            <div className={styles.layout__column}>
                <div className={cn(styles.layout__content, "sidebar-content")}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebarLayout;
