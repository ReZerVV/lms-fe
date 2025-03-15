import { ReactNode } from "react";

export interface ProtectedLayoutProps {
    children: ReactNode;
    role: string[];
    redirectPath?: string;
}
