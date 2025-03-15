import { ReactNode } from "react";

export interface PopupProps {
    children: ReactNode;
    classNameWrapper?: string;
    classNameInner?: string;
    onClose: () => void;
}
