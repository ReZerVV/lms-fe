import { ReactNode } from "react";

export interface DropzoneProps {
    children: ReactNode;
    value: File[];
    onChange: (value: File[]) => void;
    maxFiles?: number;
    accept?: any;
    multiple?: boolean;
}
