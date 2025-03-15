import { ReactNode } from "react";
import cn from "classnames";

import { Sidebar } from "@/components";

import { adminMenuList } from "@/shared";

import styles from "./SidebarLayout.module.scss";

const SidebarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.layout__column}>
                <Sidebar list={adminMenuList} />
            </div>
            <div className={styles.layout__column}>
                <div className={cn(styles.layout__content, "sidebar-content")}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SidebarLayout;
