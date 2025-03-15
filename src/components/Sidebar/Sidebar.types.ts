import { ReactNode } from "react";

export interface ListItem {
    href: string;
    title: string;
    icon: ReactNode;
}

export interface SidebarProps {
    list: ListItem[];
}
